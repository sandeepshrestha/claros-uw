import React, { useState } from 'react';

const ComprehensiveStopLossDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('12months');
  const [selectedMetric, setSelectedMetric] = useState('premium');
  const [activeTab, setActiveTab] = useState('overview');

  // Comprehensive data structure
  const dashboardData = {
    company: {
      name: "ABC Corporation",
      accountNumber: "CL-2025-001847",
      renewalDate: "01/01/2026",
      industry: "Technology",
      employeeCount: 247,
      memberCount: 542,
      avgAge: 42.3,
      malePercentage: 58.2
    },
    plans: [
      {
        id: 'current',
        name: 'Current Plan',
        deductible: 50000,
        specificPremium: 14257,
        aggregatePremium: 6911,
        totalPremium: 21168,
        claimsRatio: 0.78,
        riskScore: 85,
        participationRate: 94.2,
        utilizationRate: 0.82
      },
      {
        id: 'option1',
        name: 'Option 1',
        deductible: 75000,
        specificPremium: 10693,
        aggregatePremium: 6911,
        totalPremium: 17604,
        claimsRatio: 0.71,
        riskScore: 72,
        participationRate: 91.5,
        utilizationRate: 0.76
      },
      {
        id: 'option2',
        name: 'Option 2',
        deductible: 100000,
        specificPremium: 8096,
        aggregatePremium: 6911,
        totalPremium: 15007,
        claimsRatio: 0.65,
        riskScore: 58,
        participationRate: 89.1,
        utilizationRate: 0.68
      }
    ],
    historicalData: {
      premiums: [
        { month: 'Jan 2024', current: 19500, option1: 16200, option2: 14100 },
        { month: 'Feb 2024', current: 19800, option1: 16400, option2: 14200 },
        { month: 'Mar 2024', current: 20100, option1: 16600, option2: 14300 },
        { month: 'Apr 2024', current: 20300, option1: 16800, option2: 14400 },
        { month: 'May 2024', current: 20600, option1: 17000, option2: 14500 },
        { month: 'Jun 2024', current: 20800, option1: 17200, option2: 14600 },
        { month: 'Jul 2024', current: 21000, option1: 17400, option2: 14800 },
        { month: 'Aug 2024', current: 21100, option1: 17500, option2: 14900 },
        { month: 'Sep 2024', current: 21150, option1: 17550, option2: 14950 },
        { month: 'Oct 2024', current: 21168, option1: 17604, option2: 15007 }
      ],
      claims: [
        { month: 'Jan 2024', total: 145000, large: 85000, frequency: 12 },
        { month: 'Feb 2024', total: 152000, large: 92000, frequency: 14 },
        { month: 'Mar 2024', total: 138000, large: 78000, frequency: 11 },
        { month: 'Apr 2024', total: 167000, large: 105000, frequency: 16 },
        { month: 'May 2024', total: 159000, large: 98000, frequency: 13 },
        { month: 'Jun 2024', total: 172000, large: 112000, frequency: 18 },
        { month: 'Jul 2024', total: 181000, large: 125000, frequency: 19 },
        { month: 'Aug 2024', total: 176000, large: 118000, frequency: 17 },
        { month: 'Sep 2024', total: 163000, large: 101000, frequency: 15 },
        { month: 'Oct 2024', total: 158000, large: 95000, frequency: 14 }
      ]
    },
    demographics: {
      ageGroups: [
        { range: '20-29', count: 58, percentage: 23.5, avgClaim: 2800 },
        { range: '30-39', count: 89, percentage: 36.0, avgClaim: 4200 },
        { range: '40-49', count: 67, percentage: 27.1, avgClaim: 6500 },
        { range: '50-59', count: 28, percentage: 11.3, avgClaim: 8900 },
        { range: '60+', count: 5, percentage: 2.0, avgClaim: 12100 }
      ],
      tierDistribution: [
        { tier: 'Employee Only', count: 98, percentage: 39.7, avgPremium: 285 },
        { tier: 'Employee + Spouse', count: 72, percentage: 29.1, avgPremium: 627 },
        { tier: 'Employee + Child', count: 34, percentage: 13.8, avgPremium: 513 },
        { tier: 'Employee + Family', count: 43, percentage: 17.4, avgPremium: 855 }
      ]
    },
    benchmarks: {
      industryAverage: {
        premiumPEPM: 78.50,
        claimsRatio: 0.72,
        utilizationRate: 0.75
      },
      regionalAverage: {
        premiumPEPM: 82.30,
        claimsRatio: 0.76,
        utilizationRate: 0.78
      }
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercent = (value) => {
    return `${(value * 100).toFixed(1)}%`;
  };

  // Advanced Line Chart Component
  const LineChart = ({ data, title, height = 300, showLegend = true }) => {
    const maxValue = Math.max(...data.map(d => Math.max(d.current || 0, d.option1 || 0, d.option2 || 0, d.total || 0)));
    const minValue = Math.min(...data.map(d => Math.min(d.current || 0, d.option1 || 0, d.option2 || 0, d.total || 0)));
    const range = maxValue - minValue;
    const chartHeight = height - 80;
    const chartWidth = 600;
    const stepX = chartWidth / (data.length - 1);

    const getY = (value) => chartHeight - ((value - minValue) / range) * chartHeight;

    const lines = [
      { key: 'current', color: '#EF4444', label: 'Current Plan' },
      { key: 'option1', color: '#3B82F6', label: 'Option 1' },
      { key: 'option2', color: '#10B981', label: 'Option 2' },
      { key: 'total', color: '#F59E0B', label: 'Total Claims' },
      { key: 'large', color: '#8B5CF6', label: 'Large Claims' }
    ];

    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
        <div className="relative">
          <svg width={chartWidth + 60} height={height} className="overflow-visible">
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
              <g key={i}>
                <line
                  x1={50}
                  y1={20 + ratio * chartHeight}
                  x2={chartWidth + 50}
                  y2={20 + ratio * chartHeight}
                  stroke="#E5E7EB"
                  strokeDasharray="3,3"
                />
                <text
                  x={40}
                  y={25 + ratio * chartHeight}
                  textAnchor="end"
                  className="text-xs fill-gray-500"
                >
                  {formatCurrency(maxValue - (ratio * range))}
                </text>
              </g>
            ))}

            {/* Data lines */}
            {lines.map(line => {
              if (!data[0]?.[line.key]) return null;
              
              const points = data.map((d, i) => ({
                x: 50 + i * stepX,
                y: 20 + getY(d[line.key])
              }));

              const pathData = points.reduce((acc, point, i) => {
                return acc + (i === 0 ? `M ${point.x},${point.y}` : ` L ${point.x},${point.y}`);
              }, '');

              return (
                <g key={line.key}>
                  <path
                    d={pathData}
                    fill="none"
                    stroke={line.color}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {points.map((point, i) => (
                    <circle
                      key={i}
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      fill={line.color}
                      className="hover:r-6 cursor-pointer transition-all"
                    >
                      <title>{`${data[i].month}: ${formatCurrency(data[i][line.key])}`}</title>
                    </circle>
                  ))}
                </g>
              );
            })}

            {/* X-axis labels */}
            {data.map((d, i) => (
              <text
                key={i}
                x={50 + i * stepX}
                y={height - 20}
                textAnchor="middle"
                className="text-xs fill-gray-500"
              >
                {d.month.split(' ')[0]}
              </text>
            ))}
          </svg>

          {/* Legend */}
          {showLegend && (
            <div className="flex flex-wrap gap-4 mt-4">
              {lines.map(line => (
                data[0]?.[line.key] && (
                  <div key={line.key} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: line.color }}
                    ></div>
                    <span className="text-sm text-gray-700">{line.label}</span>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Advanced Bar Chart Component
  const AdvancedBarChart = ({ data, title, height = 300, type = 'vertical' }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
        <div className="flex items-end justify-between space-x-3" style={{ height: `${height - 80}px` }}>
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1 group">
              <div className="w-full flex flex-col justify-end relative" style={{ height: `${height - 120}px` }}>
                <div 
                  className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg relative cursor-pointer hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg"
                  style={{ 
                    height: `${(item.value / maxValue) * (height - 140)}px`,
                    minHeight: '8px'
                  }}
                >
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                    <div className="font-medium">{item.label}</div>
                    <div>{typeof item.value === 'number' ? formatCurrency(item.value) : item.value}</div>
                    {item.percentage && <div>{item.percentage}%</div>}
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-600 mt-3 text-center font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Donut Chart Component
  const DonutChart = ({ data, title, centerLabel }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;
    const radius = 80;
    const innerRadius = 50;
    
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
        <div className="flex items-center justify-center">
          <div className="relative">
            <svg width="200" height="200" className="transform -rotate-90">
              {data.map((item, index) => {
                const percentage = (item.value / total) * 100;
                const angle = (percentage / 100) * 360;
                const x1 = 100 + radius * Math.cos((currentAngle * Math.PI) / 180);
                const y1 = 100 + radius * Math.sin((currentAngle * Math.PI) / 180);
                const x2 = 100 + radius * Math.cos(((currentAngle + angle) * Math.PI) / 180);
                const y2 = 100 + radius * Math.sin(((currentAngle + angle) * Math.PI) / 180);
                const x3 = 100 + innerRadius * Math.cos(((currentAngle + angle) * Math.PI) / 180);
                const y3 = 100 + innerRadius * Math.sin(((currentAngle + angle) * Math.PI) / 180);
                const x4 = 100 + innerRadius * Math.cos((currentAngle * Math.PI) / 180);
                const y4 = 100 + innerRadius * Math.sin((currentAngle * Math.PI) / 180);
                const largeArcFlag = angle > 180 ? 1 : 0;
                
                const pathData = [
                  "M", x1, y1,
                  "A", radius, radius, 0, largeArcFlag, 1, x2, y2,
                  "L", x3, y3,
                  "A", innerRadius, innerRadius, 0, largeArcFlag, 0, x4, y4,
                  "Z"
                ].join(" ");
                
                currentAngle += angle;
                
                return (
                  <path
                    key={index}
                    d={pathData}
                    fill={item.color}
                    className="hover:opacity-80 cursor-pointer transition-opacity"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <title>{`${item.label}: ${item.value} (${percentage.toFixed(1)}%)`}</title>
                  </path>
                );
              })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{centerLabel?.value}</div>
                <div className="text-sm text-gray-600">{centerLabel?.label}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                <div className="text-xs text-gray-500">{((item.value / total) * 100).toFixed(1)}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Metrics Grid Component
  const MetricsGrid = ({ metrics, title }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">{title}</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className={`text-3xl font-bold mb-2 ${metric.color || 'text-gray-900'}`}>
              {metric.value}
            </div>
            <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
            {metric.change && (
              <div className={`text-xs font-medium ${metric.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change > 0 ? '↗' : '↘'} {Math.abs(metric.change)}%
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-sky-500 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-800">CLAROS</span>
            </div>
            <nav className="flex space-x-8">
              <span className="text-gray-600 hover:text-gray-800 cursor-pointer">Health Benefits Consulting Suite</span>
              <span className="text-gray-800 font-medium">ClarosPlan Analytics</span>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <select 
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="6months">Last 6 Months</option>
              <option value="12months">Last 12 Months</option>
              <option value="24months">Last 24 Months</option>
            </select>
            <button className="bg-sky-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-sky-600 transition-colors">
              Export Dashboard
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="px-8 py-2 border-t border-gray-100">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'premiums', label: 'Premium Analysis' },
              { id: 'claims', label: 'Claims Analytics' },
              { id: 'demographics', label: 'Demographics' },
              { id: 'benchmarks', label: 'Benchmarks' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-sky-500 text-sky-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="p-8">
        {/* Company Header */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-8 rounded-xl mb-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{dashboardData.company.name}</h1>
              <p className="text-sky-100 text-lg">Stop-Loss Insurance Analytics Dashboard</p>
              <div className="flex items-center space-x-8 mt-4">
                <div>
                  <div className="text-sm text-sky-200">Account Number</div>
                  <div className="font-semibold">{dashboardData.company.accountNumber}</div>
                </div>
                <div>
                  <div className="text-sm text-sky-200">Renewal Date</div>
                  <div className="font-semibold">{dashboardData.company.renewalDate}</div>
                </div>
                <div>
                  <div className="text-sm text-sky-200">Industry</div>
                  <div className="font-semibold">{dashboardData.company.industry}</div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">{dashboardData.company.memberCount}</div>
              <div className="text-sky-200">Total Members</div>
              <div className="text-2xl font-semibold mt-2">{dashboardData.company.employeeCount}</div>
              <div className="text-sky-200">Employees</div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics Row */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Current Monthly Premium',
                  value: formatCurrency(dashboardData.plans[0].totalPremium),
                  change: 2.3,
                  icon: '💰',
                  color: 'text-blue-600'
                },
                {
                  title: 'Claims Ratio',
                  value: formatPercent(dashboardData.plans[0].claimsRatio),
                  change: -1.2,
                  icon: '📊',
                  color: 'text-green-600'
                },
                {
                  title: 'Risk Score',
                  value: dashboardData.plans[0].riskScore,
                  change: 0.8,
                  icon: '⚠️',
                  color: 'text-orange-600'
                },
                {
                  title: 'Participation Rate',
                  value: `${dashboardData.plans[0].participationRate}%`,
                  change: 1.5,
                  icon: '👥',
                  color: 'text-purple-600'
                }
              ].map((metric, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                      <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                      <div className={`flex items-center mt-2 text-xs font-medium ${
                        metric.change > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <span>{metric.change > 0 ? '↗' : '↘'}</span>
                        <span className="ml-1">{Math.abs(metric.change)}% from last period</span>
                      </div>
                    </div>
                    <div className="text-3xl">{metric.icon}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <LineChart 
                data={dashboardData.historicalData.premiums}
                title="Premium Trends - Plan Comparison"
                height={400}
              />
              
              <DonutChart 
                data={dashboardData.demographics.tierDistribution.map((tier, index) => ({
                  label: tier.tier,
                  value: tier.count,
                  color: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'][index]
                }))}
                title="Coverage Tier Distribution"
                centerLabel={{
                  value: dashboardData.company.employeeCount,
                  label: 'Total Employees'
                }}
              />
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <AdvancedBarChart 
                data={dashboardData.plans.map(plan => ({
                  label: plan.name,
                  value: plan.totalPremium
                }))}
                title="Monthly Premium Comparison"
                height={350}
              />

              <AdvancedBarChart 
                data={dashboardData.demographics.ageGroups.map(group => ({
                  label: group.range,
                  value: group.avgClaim,
                  percentage: group.percentage
                }))}
                title="Average Claims by Age Group"
                height={350}
              />

              <MetricsGrid 
                title="Risk Metrics Comparison"
                metrics={[
                  { label: 'Current Plan', value: formatCurrency(50000), color: 'text-red-600' },
                  { label: 'Option 1', value: formatCurrency(75000), color: 'text-blue-600' },
                  { label: 'Option 2', value: formatCurrency(100000), color: 'text-green-600' },
                  { label: 'Industry Avg', value: formatCurrency(65000), color: 'text-gray-600' }
                ]}
              />
            </div>
          </div>
        )}

        {activeTab === 'premiums' && (
          <div className="space-y-8">
            {/* Premium Analysis */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <LineChart 
                data={dashboardData.historicalData.premiums}
                title="12-Month Premium Trend Analysis"
                height={400}
              />
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Annual Cost Projection</h3>
                <div className="space-y-6">
                  {dashboardData.plans.map((plan, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-800">{plan.name}</div>
                        <div className="text-sm text-gray-600">Deductible: {formatCurrency(plan.deductible)}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-gray-900">
                          {formatCurrency(plan.totalPremium * 12)}
                        </div>
                        <div className="text-sm text-gray-600">Annual Premium</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Premium Breakdown */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {dashboardData.plans.map((plan, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{plan.name} Breakdown</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Specific Coverage</span>
                      <span className="font-bold text-red-600">{formatCurrency(plan.specificPremium)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Aggregate Coverage</span>
                      <span className="font-bold text-blue-600">{formatCurrency(plan.aggregatePremium)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-2 border-green-200">
                      <span className="font-semibold text-gray-800">Total Monthly</span>
                      <span className="text-xl font-bold text-green-600">{formatCurrency(plan.totalPremium)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'claims' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <LineChart 
                data={dashboardData.historicalData.claims}
                title="Claims Trend Analysis"
                height={400}
              />
              
              <AdvancedBarChart 
                data={dashboardData.historicalData.claims.slice(-6).map(claim => ({
                  label: claim.month.split(' ')[0],
                  value: claim.frequency
                }))}
                title="Claims Frequency - Last 6 Months"
                height={400}
              />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <MetricsGrid 
                title="Claims Performance"
                metrics={[
                  { label: 'Total Claims YTD', value: '$1.6M', change: 5.2, color: 'text-blue-600' },
                  { label: 'Large Claims', value: '$980K', change: -2.1, color: 'text-orange-600' },
                  { label: 'Claims Frequency', value: '152', change: 8.3, color: 'text-purple-600' },
                  { label: 'Avg Claim Size', value: '$10.5K', change: -1.8, color: 'text-green-600' }
                ]}
              />

              <div className="col-span-2 bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Claims Analysis by Category</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">By Claim Size</h4>
                    <div className="space-y-2">
                      {[
                        { range: '$0 - $5K', count: 89, percentage: 58.2 },
                        { range: '$5K - $25K', count: 42, percentage: 27.5 },
                        { range: '$25K - $50K', count: 15, percentage: 9.8 },
                        { range: '$50K+', count: 7, percentage: 4.6 }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-gray-600">{item.range}</span>
                          <span className="font-medium">{item.count} ({item.percentage}%)</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">By Service Type</h4>
                    <div className="space-y-2">
                      {[
                        { type: 'Inpatient', percentage: 35.2 },
                        { type: 'Outpatient', percentage: 28.7 },
                        { type: 'Prescription', percentage: 22.1 },
                        { type: 'Emergency', percentage: 14.0 }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-gray-600">{item.type}</span>
                          <span className="font-medium">{item.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'demographics' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <DonutChart 
                data={dashboardData.demographics.ageGroups.map((group, index) => ({
                  label: group.range,
                  value: group.count,
                  color: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'][index]
                }))}
                title="Age Distribution"
                centerLabel={{
                  value: `${dashboardData.company.avgAge}`,
                  label: 'Average Age'
                }}
              />

              <AdvancedBarChart 
                data={dashboardData.demographics.ageGroups.map(group => ({
                  label: group.range,
                  value: group.avgClaim
                }))}
                title="Average Claims by Age Group"
                height={350}
              />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Demographics Summary</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">{dashboardData.company.malePercentage}%</div>
                    <div className="text-sm text-gray-600">Male Employees</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-600">{100 - dashboardData.company.malePercentage}%</div>
                    <div className="text-sm text-gray-600">Female Employees</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">{dashboardData.company.avgAge}</div>
                    <div className="text-sm text-gray-600">Average Age</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">2.2</div>
                    <div className="text-sm text-gray-600">Avg Family Size</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Coverage Tier Analysis</h3>
                <div className="space-y-4">
                  {dashboardData.demographics.tierDistribution.map((tier, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-800">{tier.tier}</div>
                        <div className="text-sm text-gray-600">{tier.count} employees ({tier.percentage}%)</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{formatCurrency(tier.avgPremium)}</div>
                        <div className="text-sm text-gray-600">Avg PEPM</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'benchmarks' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Industry Benchmarks</h3>
                <div className="space-y-6">
                  {[
                    {
                      metric: 'Premium PEPM',
                      company: formatCurrency(dashboardData.plans[0].totalPremium / dashboardData.company.memberCount * 12),
                      industry: formatCurrency(dashboardData.benchmarks.industryAverage.premiumPEPM),
                      regional: formatCurrency(dashboardData.benchmarks.regionalAverage.premiumPEPM)
                    },
                    {
                      metric: 'Claims Ratio',
                      company: formatPercent(dashboardData.plans[0].claimsRatio),
                      industry: formatPercent(dashboardData.benchmarks.industryAverage.claimsRatio),
                      regional: formatPercent(dashboardData.benchmarks.regionalAverage.claimsRatio)
                    },
                    {
                      metric: 'Utilization Rate',
                      company: formatPercent(dashboardData.plans[0].utilizationRate),
                      industry: formatPercent(dashboardData.benchmarks.industryAverage.utilizationRate),
                      regional: formatPercent(dashboardData.benchmarks.regionalAverage.utilizationRate)
                    }
                  ].map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="font-medium text-gray-800 mb-3">{item.metric}</div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-xl font-bold text-blue-600">{item.company}</div>
                          <div className="text-gray-600">Your Company</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-green-600">{item.industry}</div>
                          <div className="text-gray-600">Industry Avg</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-orange-600">{item.regional}</div>
                          <div className="text-gray-600">Regional Avg</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Performance Scorecard</h3>
                <div className="space-y-4">
                  {[
                    { category: 'Cost Management', score: 85, color: 'bg-green-500' },
                    { category: 'Risk Profile', score: 72, color: 'bg-yellow-500' },
                    { category: 'Claims Management', score: 78, color: 'bg-blue-500' },
                    { category: 'Employee Satisfaction', score: 91, color: 'bg-green-500' },
                    { category: 'Utilization Efficiency', score: 68, color: 'bg-orange-500' }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">{item.category}</span>
                        <span className="text-sm font-bold text-gray-900">{item.score}/100</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${item.color}`}
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Recommendations</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Cost Optimization',
                    description: 'Consider Option 2 to reduce annual premiums by $74K while maintaining adequate coverage.',
                    impact: 'High',
                    priority: 'High'
                  },
                  {
                    title: 'Risk Management',
                    description: 'Implement wellness programs to reduce claims in the 40-49 age group.',
                    impact: 'Medium',
                    priority: 'Medium'
                  },
                  {
                    title: 'Utilization Review',
                    description: 'Review prescription drug utilization patterns to identify potential savings.',
                    impact: 'Medium',
                    priority: 'Low'
                  }
                ].map((rec, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">{rec.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                    <div className="flex justify-between text-xs">
                      <span className={`px-2 py-1 rounded-full ${
                        rec.impact === 'High' ? 'bg-red-100 text-red-700' :
                        rec.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {rec.impact} Impact
                      </span>
                      <span className={`px-2 py-1 rounded-full ${
                        rec.priority === 'High' ? 'bg-red-100 text-red-700' :
                        rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {rec.priority} Priority
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComprehensiveStopLossDashboard;