import { useState } from 'react';

const InvestorWallet = ({ wallet }) => {
  const [selectedTab, setSelectedTab] = useState('payouts');

  const [payouts, setPayouts] = useState([
    {
      id: 1,
      type: 'Rental Income',
      property: 'Modern Villa in Beverly Hills',
      amount: 2850,
      date: '2024-12-01',
      status: 'Pending',
      txHash: null
    },
    {
      id: 2,
      type: 'Rental Income',
      property: 'Luxury Penthouse Downtown',
      amount: 3800,
      date: '2024-12-01',
      status: 'Pending',
      txHash: null
    },
    {
      id: 3,
      type: 'Rental Income',
      property: 'Beachfront Property Miami',
      amount: 2400,
      date: '2024-12-01',
      status: 'Pending',
      txHash: null
    },
    {
      id: 4,
      type: 'Rental Income',
      property: 'Mountain Cabin Resort',
      amount: 2100,
      date: '2024-12-01',
      status: 'Pending',
      txHash: null
    },
    {
      id: 5,
      type: 'Rental Income',
      property: 'Modern Villa in Beverly Hills',
      amount: 2850,
      date: '2024-11-01',
      status: 'Completed',
      txHash: '0x1234...5678'
    },
    {
      id: 6,
      type: 'Rental Income',
      property: 'Luxury Penthouse Downtown',
      amount: 3800,
      date: '2024-11-01',
      status: 'Completed',
      txHash: '0x2345...6789'
    },
    {
      id: 7,
      type: 'Rental Income',
      property: 'Beachfront Property Miami',
      amount: 2400,
      date: '2024-11-01',
      status: 'Completed',
      txHash: '0x3456...7890'
    },
    {
      id: 8,
      type: 'Rental Income',
      property: 'Modern Villa in Beverly Hills',
      amount: 2850,
      date: '2024-10-01',
      status: 'Completed',
      txHash: '0x4567...8901'
    },
    {
      id: 9,
      type: 'Rental Income',
      property: 'Luxury Penthouse Downtown',
      amount: 3800,
      date: '2024-10-01',
      status: 'Completed',
      txHash: '0x5678...9012'
    }
  ]);

  const handleClaimPayout = (payoutId) => {
    setPayouts(payouts.map(payout => {
      if (payout.id === payoutId && payout.status === 'Pending') {
        return {
          ...payout,
          status: 'Completed',
          txHash: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`
        };
      }
      return payout;
    }));
  };

  const handleClaimAll = () => {
    setPayouts(payouts.map(payout => {
      if (payout.status === 'Pending') {
        return {
          ...payout,
          status: 'Completed',
          txHash: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`
        };
      }
      return payout;
    }));
  };

  const pendingPayouts = payouts.filter(p => p.status === 'Pending');
  const totalPendingAmount = pendingPayouts.reduce((sum, p) => sum + p.amount, 0);

  const transactions = [
    {
      id: 1,
      type: 'Purchase',
      property: 'Modern Villa in Beverly Hills',
      tokens: 15,
      amount: -375000,
      date: '2024-01-15',
      status: 'Completed',
      txHash: '0xabcd...ef12'
    },
    {
      id: 2,
      type: 'Purchase',
      property: 'Luxury Penthouse Downtown',
      tokens: 8,
      amount: -464000,
      date: '2024-02-20',
      status: 'Completed',
      txHash: '0xbcde...f123'
    },
    {
      id: 3,
      type: 'Purchase',
      property: 'Beachfront Property Miami',
      tokens: 12,
      amount: -384000,
      date: '2024-03-10',
      status: 'Completed',
      txHash: '0xcdef...1234'
    }
  ];

  const totalEarned = payouts.filter(p => p.status === 'Completed').reduce((sum, payout) => sum + payout.amount, 0);
  const monthlyAverage = totalEarned / 2; // 2 months of data
  const nextPayout = totalPendingAmount; // Sum of pending payouts

  return (
    <div className="space-y-6">
      {/* Wallet Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Total Earned</h3>
            <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">${(totalEarned / 1000).toFixed(1)}K</p>
          <p className="text-text-muted text-sm mt-1">All time earnings</p>
        </div>

        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Monthly Average</h3>
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">${(monthlyAverage / 1000).toFixed(1)}K</p>
          <p className="text-text-muted text-sm mt-1">Per month</p>
        </div>

        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Next Payout</h3>
            <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">${(nextPayout / 1000).toFixed(1)}K</p>
          <p className="text-text-muted text-sm mt-1">Dec 1, 2024</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
        <div className="flex gap-4 mb-6 border-b border-dark-border">
          <button
            onClick={() => setSelectedTab('payouts')}
            className={`px-4 py-2 font-medium transition-colors cursor-pointer ${
              selectedTab === 'payouts'
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-text-muted hover:text-white'
            }`}
          >
            Payouts
          </button>
          <button
            onClick={() => setSelectedTab('transactions')}
            className={`px-4 py-2 font-medium transition-colors cursor-pointer ${
              selectedTab === 'transactions'
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-text-muted hover:text-white'
            }`}
          >
            Transactions
          </button>
        </div>

        {/* Payouts Tab */}
        {selectedTab === 'payouts' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Rental Income Payouts</h3>
              <div className="flex gap-3">
                {pendingPayouts.length > 0 && (
                  <button
                    onClick={handleClaimAll}
                    className="px-4 py-2 bg-gradient-primary hover:opacity-90 text-white rounded-lg text-sm font-medium transition-all cursor-pointer flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Claim All (${totalPendingAmount.toLocaleString()})
                  </button>
                )}
                <button className="px-4 py-2 bg-primary-500/20 hover:bg-primary-500 text-primary-500 hover:text-white rounded-lg text-sm font-medium transition-all cursor-pointer">
                  Export CSV
                </button>
              </div>
            </div>

            {pendingPayouts.length > 0 && (
              <div className="bg-warning/10 border border-warning/30 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-warning/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Pending Payouts Available</h4>
                      <p className="text-text-muted text-sm">{pendingPayouts.length} payout{pendingPayouts.length > 1 ? 's' : ''} ready to claim</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-warning font-bold text-lg">${totalPendingAmount.toLocaleString()}</p>
                    <p className="text-text-muted text-xs">Total pending</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {payouts.map((payout) => (
                <div
                  key={payout.id}
                  className={`bg-dark-bg/50 border rounded-xl p-4 transition-colors ${
                    payout.status === 'Pending' 
                      ? 'border-warning/50 hover:border-warning' 
                      : 'border-dark-border hover:border-primary-500/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          payout.status === 'Pending' ? 'bg-warning/20' : 'bg-success/20'
                        }`}>
                          <svg className={`w-5 h-5 ${payout.status === 'Pending' ? 'text-warning' : 'text-success'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{payout.type}</h4>
                          <p className="text-text-muted text-sm">{payout.property}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className={`font-bold text-lg ${payout.status === 'Pending' ? 'text-warning' : 'text-success'}`}>
                        +${payout.amount.toLocaleString()}
                      </p>
                      <p className="text-text-muted text-sm">{new Date(payout.date).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-dark-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        payout.status === 'Completed' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
                      }`}>
                        {payout.status}
                      </span>
                      {payout.txHash && (
                        <a
                          href={`https://explorer.mantle.xyz/tx/${payout.txHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-500 text-xs hover:underline flex items-center gap-1"
                        >
                          {payout.txHash}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                    {payout.status === 'Pending' && (
                      <button
                        onClick={() => handleClaimPayout(payout.id)}
                        className="px-4 py-2 bg-gradient-primary hover:opacity-90 text-white rounded-lg text-sm font-medium transition-all cursor-pointer flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Claim
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {selectedTab === 'transactions' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Transaction History</h3>
              <button className="px-4 py-2 bg-primary-500/20 hover:bg-primary-500 text-primary-500 hover:text-white rounded-lg text-sm font-medium transition-all cursor-pointer">
                Export CSV
              </button>
            </div>

            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="bg-dark-bg/50 border border-dark-border rounded-xl p-4 hover:border-primary-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-danger/20 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{transaction.type} - {transaction.tokens} Tokens</h4>
                          <p className="text-text-muted text-sm">{transaction.property}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-danger font-bold text-lg">${transaction.amount.toLocaleString()}</p>
                      <p className="text-text-muted text-sm">{new Date(transaction.date).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-dark-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        transaction.status === 'Completed' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
                      }`}>
                        {transaction.status}
                      </span>
                      <a
                        href={`https://explorer.mantle.xyz/tx/${transaction.txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 text-xs hover:underline flex items-center gap-1"
                      >
                        {transaction.txHash}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestorWallet;

