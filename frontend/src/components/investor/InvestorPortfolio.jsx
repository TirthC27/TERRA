const InvestorPortfolio = ({ wallet }) => {
  // Sample portfolio data for charts
  const totalInvested = 1223000;
  const totalCurrentValue = 1366400;
  const totalProfit = totalCurrentValue - totalInvested;
  const totalReturn = ((totalProfit / totalInvested) * 100).toFixed(2);
  const monthlyIncome = 9050;
  
  // Sample data for returns chart
  const investments = [
    { propertyTitle: 'Modern Villa', annualReturn: 8.2 },
    { propertyTitle: 'Luxury Penthouse', annualReturn: 10.5 },
    { propertyTitle: 'Beachfront Property', annualReturn: 6.8 }
  ];

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Total Invested</h3>
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">${(totalInvested / 1000).toFixed(0)}K</p>
        </div>

        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Current Value</h3>
            <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">${(totalCurrentValue / 1000).toFixed(0)}K</p>
          <p className="text-success text-sm mt-1">+{totalReturn}%</p>
        </div>

        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Total Profit</h3>
            <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-success">+${(totalProfit / 1000).toFixed(0)}K</p>
        </div>

        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Monthly Income</h3>
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">${(monthlyIncome / 1000).toFixed(1)}K</p>
          <p className="text-text-muted text-xs mt-1">per month</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Value Chart */}
        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Portfolio Value Over Time</h3>
            <div className="flex items-center gap-2 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-lg">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-primary-500 text-xs font-medium">Live</span>
            </div>
          </div>
          <div className="h-72 relative">
            <svg width="100%" height="100%" className="overflow-visible">
              <defs>
                <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5b6fed" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#5b6fed" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#5b6fed" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Y-axis labels */}
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const value = 1200 - (i * 200);
                return (
                  <g key={i}>
                    <line
                      x1="8%"
                      y1={`${15 + i * 16}%`}
                      x2="92%"
                      y2={`${15 + i * 16}%`}
                      stroke={i === 0 ? "#3d4158" : "#2e3142"}
                      strokeWidth={i === 0 ? "1.5" : "1"}
                      strokeDasharray={i === 0 ? "0" : "4,4"}
                    />
                    <text
                      x="6%"
                      y={`${15 + i * 16}%`}
                      fill="#6c6f93"
                      fontSize="11"
                      textAnchor="end"
                      alignmentBaseline="middle"
                    >
                      ${value}K
                    </text>
                  </g>
                );
              })}
              {/* Chart line with glow */}
              <path
                d="M 10% 80% L 25% 70% L 40% 55% L 55% 45% L 70% 35% L 85% 30% L 90% 25%"
                fill="none"
                stroke="#5b6fed"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                className="animate-draw"
              />
              {/* Area fill */}
              <path
                d="M 10% 80% L 25% 70% L 40% 55% L 55% 45% L 70% 35% L 85% 30% L 90% 25% L 90% 100% L 10% 100% Z"
                fill="url(#portfolioGradient)"
              />
              {/* Data points with hover effect */}
              {[
                { x: 10, y: 80, value: 1000 },
                { x: 25, y: 70, value: 1100 },
                { x: 40, y: 55, value: 1200 },
                { x: 55, y: 45, value: 1300 },
                { x: 70, y: 35, value: 1350 },
                { x: 85, y: 30, value: 1360 },
                { x: 90, y: 25, value: 1366 }
              ].map((point, i) => (
                <g key={i} className="group cursor-pointer">
                  <circle
                    cx={`${point.x}%`}
                    cy={`${point.y}%`}
                    r="6"
                    fill="#1a1d29"
                    stroke="#5b6fed"
                    strokeWidth="2.5"
                    className="group-hover:r-8 transition-all duration-300"
                  />
                  <circle
                    cx={`${point.x}%`}
                    cy={`${point.y}%`}
                    r="3"
                    fill="#5b6fed"
                    className="group-hover:r-4 transition-all duration-300"
                  />
                  {/* Tooltip on hover */}
                  <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <rect
                      x={`${point.x - 3}%`}
                      y={`${point.y - 8}%`}
                      width="6%"
                      height="4%"
                      fill="#1a1d29"
                      stroke="#5b6fed"
                      strokeWidth="1"
                      rx="4"
                    />
                    <text
                      x={`${point.x}%`}
                      y={`${point.y - 5.5}%`}
                      fill="#5b6fed"
                      fontSize="10"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      ${point.value}K
                    </text>
                  </g>
                </g>
              ))}
              {/* X-axis labels */}
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((label, i) => (
                <text
                  key={i}
                  x={`${10 + i * 15}%`}
                  y="98%"
                  fill="#8b8fa3"
                  fontSize="12"
                  textAnchor="middle"
                  fontWeight="500"
                >
                  {label}
                </text>
              ))}
            </svg>
          </div>
        </div>

        {/* Returns Distribution Chart */}
        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Returns by Property</h3>
            <span className="text-text-muted text-xs">Annual Return %</span>
          </div>
          <div className="h-72 space-y-5">
            {investments.map((inv, index) => {
              const percentage = parseFloat(inv.annualReturn);
              const width = (percentage / 12) * 10;
              const colors = [
                { bg: 'from-primary-500 to-primary-600', text: 'text-primary-400' },
                { bg: 'from-purple-500 to-purple-600', text: 'text-purple-400' },
                { bg: 'from-pink-500 to-pink-600', text: 'text-pink-400' }
              ];
              const color = colors[index % colors.length];
              
              return (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-secondary text-sm font-medium truncate flex-1">{inv.propertyTitle}</span>
                    <div className="flex items-center gap-2 ml-3">
                      <span className={`text-white font-bold text-base ${color.text}`}>{inv.annualReturn}%</span>
                      <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative w-full bg-dark-bg rounded-full h-3 overflow-hidden border border-dark-border">
                    <div
                      className={`bg-gradient-to-r ${color.bg} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg group-hover:shadow-xl relative overflow-hidden`}
                      style={{ width: `${Math.min(width, 100)}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Summary card */}
            <div className="mt-6 pt-5 border-t border-dark-border">
              <div className="flex items-center justify-between">
                <span className="text-text-muted text-sm">Average Return</span>
                <span className="text-white font-bold text-lg">
                  {((investments.reduce((sum, inv) => sum + parseFloat(inv.annualReturn), 0) / investments.length)).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Income Chart */}
      <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Monthly Income Trend</h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <span className="text-text-muted text-xs">Income</span>
            </div>
          </div>
        </div>
        <div className="h-72 relative">
          <svg width="100%" height="100%" className="overflow-visible">
            <defs>
              <linearGradient id="incomeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <filter id="barGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Y-axis labels */}
            {[0, 1, 2, 3, 4].map((i) => {
              const value = 4 - i;
              return (
                <g key={i}>
                  <line
                    x1="8%"
                    y1={`${15 + i * 20}%`}
                    x2="92%"
                    y2={`${15 + i * 20}%`}
                    stroke={i === 0 ? "#3d4158" : "#2e3142"}
                    strokeWidth={i === 0 ? "1.5" : "1"}
                    strokeDasharray={i === 0 ? "0" : "4,4"}
                  />
                  <text
                    x="6%"
                    y={`${15 + i * 20}%`}
                    fill="#6c6f93"
                    fontSize="11"
                    textAnchor="end"
                    alignmentBaseline="middle"
                  >
                    ${value}K
                  </text>
                </g>
              );
            })}
            {/* Bars with improved styling */}
            {[2.5, 2.8, 2.9, 3.0, 2.95, 3.1, 3.2].map((value, i) => {
              const barHeight = ((value / 4) * 60);
              const x = 10 + i * 13;
              const isHighest = value === Math.max(...[2.5, 2.8, 2.9, 3.0, 2.95, 3.1, 3.2]);
              
              return (
                <g key={i} className="group cursor-pointer">
                  {/* Bar shadow */}
                  <rect
                    x={`${x}%`}
                    y={`${80 - barHeight + 2}%`}
                    width="10%"
                    height={`${barHeight}%`}
                    fill="#000"
                    opacity="0.2"
                    rx="4"
                  />
                  {/* Bar fill */}
                  <rect
                    x={`${x}%`}
                    y={`${80 - barHeight}%`}
                    width="10%"
                    height={`${barHeight}%`}
                    fill="url(#barGradient)"
                    rx="4"
                    filter={isHighest ? "url(#barGlow)" : ""}
                    className="group-hover:opacity-90 transition-all duration-300"
                    style={{ 
                      transformOrigin: 'bottom',
                      animation: `growBar 0.8s ease-out ${i * 0.1}s both`
                    }}
                  />
                  {/* Bar border */}
                  <rect
                    x={`${x}%`}
                    y={`${80 - barHeight}%`}
                    width="10%"
                    height={`${barHeight}%`}
                    fill="none"
                    stroke={isHighest ? "#a78bfa" : "#8b5cf6"}
                    strokeWidth={isHighest ? "2.5" : "2"}
                    rx="4"
                    className="group-hover:stroke-white/50 transition-all duration-300"
                  />
                  {/* Value label */}
                  <text
                    x={`${x + 5}%`}
                    y={`${75 - barHeight}%`}
                    fill="#a78bfa"
                    fontSize="11"
                    textAnchor="middle"
                    fontWeight="bold"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    ${value.toFixed(1)}K
                  </text>
                  {/* Hover indicator */}
                  <rect
                    x={`${x}%`}
                    y={`${80 - barHeight - 3}%`}
                    width="10%"
                    height="3%"
                    fill="#a78bfa"
                    rx="2"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </g>
              );
            })}
            {/* X-axis labels */}
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((label, i) => (
              <text
                key={i}
                x={`${15 + i * 13}%`}
                y="98%"
                fill="#8b8fa3"
                fontSize="12"
                textAnchor="middle"
                fontWeight="500"
              >
                {label}
              </text>
            ))}
          </svg>
        </div>
      </div>

    </div>
  );
};

export default InvestorPortfolio;

