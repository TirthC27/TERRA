// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BuilderRegistry {

    /********************************************
     *                STRUCTS
     ********************************************/

    struct BuilderProfile {
        string cid;           // builder_profile.json ka CID
        bool isRegistered;
    }

    struct Building {
        uint256 buildingId;
        string cid;           // building.json ka CID
        address builder;
        uint256 pincode;
        uint256 createdAt;
    }

    struct Flat {
        uint256 flatId;
        string cid;           // flat.json ka CID
        uint256 buildingId;
        address builder;
        uint256 createdAt;
    }

    /********************************************
     *                MAPPINGS
     ********************************************/

    mapping(address => BuilderProfile) public builders;

    mapping(uint256 => Building) public buildings;

    mapping(uint256 => Flat) public flats;

    // builder → building IDs
    mapping(address => uint256[]) public builderToBuildingIds;

    // building → flat IDs
    mapping(uint256 => uint256[]) public buildingToFlatIds;

    // pincode → building IDs
    mapping(uint256 => uint256[]) public pincodeToBuildingIds;

    uint256 public nextBuildingId = 1;
    uint256 public nextFlatId = 1;

    /********************************************
     *                EVENTS
     ********************************************/

    event BuilderRegistered(address indexed builder, string cid);
    event BuildingRegistered(uint256 indexed buildingId, address indexed builder, string cid);
    event FlatRegistered(uint256 indexed flatId, uint256 indexed buildingId, string cid);

    /********************************************
     *                FUNCTIONS
     ********************************************/

    // 1️⃣ REGISTER BUILDER PROFILE
    function registerBuilder(string calldata cid) external {
        builders[msg.sender] = BuilderProfile(cid, true);
        emit BuilderRegistered(msg.sender, cid);
    }

    // 2️⃣ REGISTER BUILDING
    function registerBuilding(string calldata cid, uint256 pincode)
        external
        returns (uint256)
    {
        require(builders[msg.sender].isRegistered, "BUILDER NOT REGISTERED");

        uint256 buildingId = nextBuildingId++;

        buildings[buildingId] = Building({
            buildingId: buildingId,
            cid: cid,
            builder: msg.sender,
            pincode: pincode,
            createdAt: block.timestamp
        });

        builderToBuildingIds[msg.sender].push(buildingId);
        pincodeToBuildingIds[pincode].push(buildingId);

        emit BuildingRegistered(buildingId, msg.sender, cid);

        return buildingId;
    }

    // 3️⃣ REGISTER FLAT
    function registerFlat(uint256 buildingId, string calldata cid)
        external
        returns (uint256)
    {
        require(builders[msg.sender].isRegistered, "BUILDER NOT REGISTERED");
        require(buildings[buildingId].builder == msg.sender, "NOT YOUR BUILDING");

        uint256 flatId = nextFlatId++;

        flats[flatId] = Flat({
            flatId: flatId,
            cid: cid,
            buildingId: buildingId,
            builder: msg.sender,
            createdAt: block.timestamp
        });

        buildingToFlatIds[buildingId].push(flatId);

        emit FlatRegistered(flatId, buildingId, cid);

        return flatId;
    }

    /********************************************
     *          GETTER FUNCTIONS (HELPERS)
     ********************************************/

    function getBuilderCID(address builder) external view returns (string memory) {
        return builders[builder].cid;
    }

    function getBuildingsByBuilder(address builder) external view returns (uint256[] memory) {
        return builderToBuildingIds[builder];
    }

    function getBuildingsByPincode(uint256 pincode) external view returns (uint256[] memory) {
        return pincodeToBuildingIds[pincode];
    }

    function getFlatsByBuilding(uint256 buildingId) external view returns (uint256[] memory) {
        return buildingToFlatIds[buildingId];
    }
}
