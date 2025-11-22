import { createContext, useContext, useState, useEffect } from 'react';

const RoleContext = createContext();

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};

export const RoleProvider = ({ children }) => {
  const [selectedRole, setSelectedRole] = useState(() => {
    return localStorage.getItem('selectedRole') || null;
  });

  const [userRoles, setUserRoles] = useState(() => {
    const stored = localStorage.getItem('userRoles');
    return stored ? JSON.parse(stored) : {
      investor: true,  // Always available by default
      builder: false,
      owner: false
    };
  });

  useEffect(() => {
    if (selectedRole) {
      localStorage.setItem('selectedRole', selectedRole);
    } else {
      localStorage.removeItem('selectedRole');
    }
  }, [selectedRole]);

  useEffect(() => {
    localStorage.setItem('userRoles', JSON.stringify(userRoles));
  }, [userRoles]);

  const selectRole = (role) => {
    setSelectedRole(role);
  };

  const clearRole = () => {
    setSelectedRole(null);
    localStorage.removeItem('selectedRole');
  };

  const clearAllData = () => {
    setSelectedRole(null);
    setUserRoles({
      investor: true,  // Keep investor always available
      builder: false,
      owner: false
    });
    localStorage.removeItem('selectedRole');
    localStorage.removeItem('userRoles');
  };

  const registerRole = (role) => {
    setUserRoles(prev => ({
      ...prev,
      [role]: true
    }));
  };

  const isRoleRegistered = (role) => {
    // Investor is always available
    if (role === 'investor') {
      return true;
    }
    return userRoles[role] || false;
  };

  return (
    <RoleContext.Provider
      value={{
        selectedRole,
        selectRole,
        clearRole,
        clearAllData,
        userRoles,
        registerRole,
        isRoleRegistered
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

