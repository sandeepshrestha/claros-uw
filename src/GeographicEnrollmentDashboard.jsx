import React, { useState } from 'react';

const GeographicEnrollmentDashboard = () => {
  const [selectedState, setSelectedState] = useState('CA');
  const [activeTab, setActiveTab] = useState('overview');

  // Sample state enrollment data
  const stateData = {
    'CA': {
      name: 'California',
      totalMembers: 156,
      totalEmployees: 68,
      averageAge: 41.2,
      malePercentage: 62.3,
      topCities: ['Los Angeles', 'San Francisco', 'San Diego'],
      ageDistribution: [
        { range: '20-29', count: 18, percentage: 26.5, avgSalary: 75000 },
        { range: '30-39', count: 24, percentage: 35.3, avgSalary: 95000 },
        { range: '40-49', count: 16, percentage: 23.5, avgSalary: 110000 },
        { range: '50-59', count: 8, percentage: 11.8, avgSalary: 125000 },
        { range: '60+', count: 2, percentage: 2.9, avgSalary: 130000 }
      ],
      genderDistribution: {
        male: { count: 42, percentage: 62.3, avgAge: 42.1, avgClaims: 4200 },
        female: { count: 26, percentage: 37.7, avgAge: 39.8, avgClaims: 3800 }
      },
      zipCodeData: [
        { zip: '90210', city: 'Beverly Hills', members: 23, avgIncome: 180000, claimsRate: 0.68 },
        { zip: '94105', city: 'San Francisco', members: 19, avgIncome: 165000, claimsRate: 0.71 },
        { zip: '92101', city: 'San Diego', members: 15, avgIncome: 95000, claimsRate: 0.75 },
        { zip: '90028', city: 'Hollywood', members: 11, avgIncome: 78000, claimsRate: 0.82 }
      ],
      coverageTiers: [
        { tier: 'Employee Only', count: 28, percentage: 41.2, avgPremium: 320 },
        { tier: 'Employee + Spouse', count: 19, percentage: 27.9, avgPremium: 685 },
        { tier: 'Employee + Child', count: 9, percentage: 13.2, avgPremium: 560 },
        { tier: 'Employee + Family', count: 12, percentage: 17.6, avgPremium: 920 }
      ],
      healthMetrics: {
        bmi: { average: 25.2, ranges: { underweight: 8, normal: 45, overweight: 35, obese: 12 } },
        conditions: [
          { condition: 'Hypertension', prevalence: 18.5 },
          { condition: 'Diabetes', prevalence: 8.2 },
          { condition: 'High Cholesterol', prevalence: 22.1 },
          { condition: 'Asthma', prevalence: 12.3 }
        ],
        utilization: {
          primaryCare: 2.3,
          specialist: 1.8,
          emergency: 0.4,
          preventive: 1.9
        }
      }
    },
    'NY': {
      name: 'New York',
      totalMembers: 89,
      totalEmployees: 42,
      averageAge: 39.8,
      malePercentage: 54.8,
      topCities: ['New York City', 'Albany', 'Buffalo'],
      ageDistribution: [
        { range: '20-29', count: 14, percentage: 33.3, avgSalary: 68000 },
        { range: '30-39', count: 16, percentage: 38.1, avgSalary: 85000 },
        { range: '40-49', count: 8, percentage: 19.0, avgSalary: 98000 },
        { range: '50-59', count: 3, percentage: 7.1, avgSalary: 105000 },
        { range: '60+', count: 1, percentage: 2.4, avgSalary: 110000 }
      ],
      genderDistribution: {
        male: { count: 23, percentage: 54.8, avgAge: 40.2, avgClaims: 3900 },
        female: { count: 19, percentage: 45.2, avgAge: 39.3, avgClaims: 4100 }
      },
      zipCodeData: [
        { zip: '10001', city: 'Manhattan', members: 28, avgIncome: 125000, claimsRate: 0.72 },
        { zip: '11201', city: 'Brooklyn', members: 8, avgIncome: 78000, claimsRate: 0.78 },
        { zip: '12203', city: 'Albany', members: 4, avgIncome: 65000, claimsRate: 0.65 },
        { zip: '14202', city: 'Buffalo', members: 2, avgIncome: 58000, claimsRate: 0.69 }
      ],
      coverageTiers: [
        { tier: 'Employee Only', count: 18, percentage: 42.9, avgPremium: 340 },
        { tier: 'Employee + Spouse', count: 12, percentage: 28.6, avgPremium: 720 },
        { tier: 'Employee + Child', count: 6, percentage: 14.3, avgPremium: 590 },
        { tier: 'Employee + Family', count: 6, percentage: 14.3, avgPremium: 980 }
      ],
      healthMetrics: {
        bmi: { average: 26.1, ranges: { underweight: 5, normal: 42, overweight: 38, obese: 15 } },
        conditions: [
          { condition: 'Hypertension', prevalence: 21.4 },
          { condition: 'Diabetes', prevalence: 9.5 },
          { condition: 'High Cholesterol', prevalence: 25.3 },
          { condition: 'Asthma', prevalence: 15.8 }
        ],
        utilization: {
          primaryCare: 2.8,
          specialist: 2.1,
          emergency: 0.6,
          preventive: 1.7
        }
      }
    },
    'TX': {
      name: 'Texas',
      totalMembers: 134,
      totalEmployees: 58,
      averageAge: 43.1,
      malePercentage: 58.6,
      topCities: ['Houston', 'Dallas', 'Austin'],
      ageDistribution: [
        { range: '20-29', count: 12, percentage: 20.7, avgSalary: 62000 },
        { range: '30-39', count: 21, percentage: 36.2, avgSalary: 78000 },
        { range: '40-49', count: 15, percentage: 25.9, avgSalary: 92000 },
        { range: '50-59', count: 8, percentage: 13.8, avgSalary: 105000 },
        { range: '60+', count: 2, percentage: 3.4, avgSalary: 115000 }
      ],
      genderDistribution: {
        male: { count: 34, percentage: 58.6, avgAge: 43.8, avgClaims: 3600 },
        female: { count: 24, percentage: 41.4, avgAge: 42.1, avgClaims: 3200 }
      },
      zipCodeData: [
        { zip: '77002', city: 'Houston', members: 22, avgIncome: 85000, claimsRate: 0.74 },
        { zip: '75201', city: 'Dallas', members: 18, avgIncome: 82000, claimsRate: 0.71 },
        { zip: '78701', city: 'Austin', members: 14, avgIncome: 95000, claimsRate: 0.68 },
        { zip: '76102', city: 'Fort Worth', members: 4, avgIncome: 72000, claimsRate: 0.76 }
      ],
      coverageTiers: [
        { tier: 'Employee Only', count: 22, percentage: 37.9, avgPremium: 295 },
        { tier: 'Employee + Spouse', count: 18, percentage: 31.0, avgPremium: 620 },
        { tier: 'Employee + Child', count: 8, percentage: 13.8, avgPremium: 510 },
        { tier: 'Employee + Family', count: 10, percentage: 17.2, avgPremium: 850 }
      ],
      healthMetrics: {
        bmi: { average: 27.3, ranges: { underweight: 3, normal: 38, overweight: 41, obese: 18 } },
        conditions: [
          { condition: 'Hypertension', prevalence: 24.1 },
          { condition: 'Diabetes', prevalence: 12.1 },
          { condition: 'High Cholesterol', prevalence: 28.6 },
          { condition: 'Asthma', prevalence: 10.3 }
        ],
        utilization: {
          primaryCare: 2.1,
          specialist: 1.6,
          emergency: 0.5,
          preventive: 1.4
        }
      }
    }
  };

  // USA Map Component (simplified SVG)
  const USAMap = () => {
    const states = [
      { id: 'CA', name: 'California', path: 'M158 310 L158 320 L180 350 L190 360 L200 340 L210 330 L200 310 L180 300 Z', members: 156 },
      { id: 'NY', name: 'New York', path: 'M740 180 L760 180 L770 190 L780 200 L770 210 L750 210 L740 200 Z', members: 89 },
      { id: 'TX', name: 'Texas', path: 'M420 360 L480 360 L490 380 L500 420 L480 440 L420 430 L410 400 L420 380 Z', members: 134 },
      { id: 'FL', name: 'Florida', path: 'M680 420 L720 420 L730 440 L740 480 L720 490 L680 480 L670 450 Z', members: 67 },
      { id: 'IL', name: 'Illinois', path: 'M580 250 L600 250 L610 270 L600 290 L580 290 L570 270 Z', members: 45 }
    ];

    const getStateColor = (members) => {
      if (members > 150) return '#1f2937'; // Dark gray for highest
      if (members > 100) return '#374151'; // Medium gray
      if (members > 50) return '#6b7280'; // Light gray
      return '#9ca3af'; // Lightest gray
    };

    return (
      <div className="relative">
        <svg viewBox="0 0 900 500" className="w-full h-96 border border-gray-300 rounded-lg bg-blue-50">
          {/* Background */}
          <rect width="900" height="500" fill="#f0f9ff" />
          
          {/* States */}
          {states.map(state => (
            <path
              key={state.id}
              d={state.path}
              fill={selectedState === state.id ? '#0ea5e9' : getStateColor(state.members)}
              stroke="#fff"
              strokeWidth="2"
              className="cursor-pointer hover:opacity-80 transition-all"
              onClick={() => setSelectedState(state.id)}
            >
              <title>{state.name}: {state.members} members</title>
            </path>
          ))}
          
          {/* Legend */}
          <g transform="translate(50, 420)">
            <text x="0" y="0" className="text-sm font-semibold fill-gray-700">Members by State</text>
            <g transform="translate(0, 20)">
              <rect x="0" y="0" width="15" height="15" fill="#1f2937" />
              <text x="20" y="12" className="text-xs fill-gray-600">150+</text>
              <rect x="60" y="0" width="15" height="15" fill="#374151" />
              <text x="80" y="12" className="text-xs fill-gray-600">100-149</text>
              <rect x="130" y="0" width="15" height="15" fill="#6b7280" />
              <text x="150" y="12" className="text-xs fill-gray-600">50-99</text>
              <rect x="190" y="0" width="15" height="15" fill="#9ca3af" />
              <text x="210" y="12" className="text-xs fill-gray-600">0-49</text>
            </g>
          </g>
        </svg>
      </div>
    );
  };

  // Chart Components
  const BarChart = ({ data, title, xKey, yKey, color = '#3B82F6' }) => {
    const maxValue = Math.max(...data.map(d => d[yKey]));
    
    return (
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h4 className="text-md font-semibold text-gray-800 mb-4">{title}</h4>
        <div className="flex items-end justify-between space-x-2" style={{ height: '200px' }}>
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1 group">
              <div className="w-full flex flex-col justify-end" style={{ height: '160px' }}>
                <div 
                  className="rounded-t-sm relative cursor-pointer hover:opacity-80 transition-all"
                  style={{ 
                    backgroundColor: color,
                    height: `${(item[yKey] / maxValue) * 140}px`,
                    minHeight: '4px'
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item[yKey]}
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-600 mt-2 text-center">{item[xKey]}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Combined Age-Gender Bar Chart Component
  const CombinedAgeGenderChart = ({ ageData, genderData, title }) => {
    // Calculate gender distribution per age group based on total percentages
    const calculateGenderByAge = () => {
      return ageData.map(ageGroup => {
        const totalInGroup = ageGroup.count;
        const maleCount = Math.round(totalInGroup * (genderData.male.percentage / 100));
        const femaleCount = totalInGroup - maleCount;
        
        return {
          range: ageGroup.range,
          male: maleCount,
          female: femaleCount,
          total: totalInGroup
        };
      });
    };

    const combinedData = calculateGenderByAge();
    const maxValue = Math.max(...combinedData.map(d => Math.max(d.male, d.female)));
    
    return (
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h4 className="text-md font-semibold text-gray-800 mb-4">{title}</h4>
        
        {/* Legend */}
        <div className="flex items-center space-x-6 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-sm text-gray-700">Male</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-pink-500 rounded"></div>
            <span className="text-sm text-gray-700">Female</span>
          </div>
        </div>

        <div className="flex items-end justify-between space-x-3" style={{ height: '240px' }}>
          {combinedData.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full flex items-end justify-center space-x-1" style={{ height: '180px' }}>
                {/* Male Bar */}
                <div className="flex flex-col items-center flex-1 group">
                  <div className="w-full flex flex-col justify-end" style={{ height: '160px' }}>
                    <div 
                      className="bg-blue-500 rounded-t-sm relative cursor-pointer hover:bg-blue-600 transition-all"
                      style={{ 
                        height: `${(item.male / maxValue) * 140}px`,
                        minHeight: '4px'
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        Male: {item.male}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Female Bar */}
                <div className="flex flex-col items-center flex-1 group">
                  <div className="w-full flex flex-col justify-end" style={{ height: '160px' }}>
                    <div 
                      className="bg-pink-500 rounded-t-sm relative cursor-pointer hover:bg-pink-600 transition-all"
                      style={{ 
                        height: `${(item.female / maxValue) * 140}px`,
                        minHeight: '4px'
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        Female: {item.female}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Age Group Label */}
              <div className="text-xs text-gray-600 mt-3 text-center font-medium">{item.range}</div>
              <div className="text-xs text-gray-500 text-center">Total: {item.total}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const PieChart = ({ data, title }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
    
    return (
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h4 className="text-md font-semibold text-gray-800 mb-4">{title}</h4>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <svg width="120" height="120" className="transform -rotate-90">
              {data.map((item, index) => {
                const percentage = (item.value / total) * 100;
                const angle = (percentage / 100) * 360;
                const radius = 50;
                const x1 = 60 + radius * Math.cos((currentAngle * Math.PI) / 180);
                const y1 = 60 + radius * Math.sin((currentAngle * Math.PI) / 180);
                const x2 = 60 + radius * Math.cos(((currentAngle + angle) * Math.PI) / 180);
                const y2 = 60 + radius * Math.sin(((currentAngle + angle) * Math.PI) / 180);
                const largeArcFlag = angle > 180 ? 1 : 0;
                
                const pathData = [
                  "M", 60, 60,
                  "L", x1, y1,
                  "A", radius, radius, 0, largeArcFlag, 1, x2, y2,
                  "Z"
                ].join(" ");
                
                currentAngle += angle;
                
                return (
                  <path
                    key={index}
                    d={pathData}
                    fill={colors[index % colors.length]}
                    className="hover:opacity-80 cursor-pointer"
                  />
                );
              })}
            </svg>
          </div>
          <div className="flex-1 space-y-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: colors[index % colors.length] }}
                ></div>
                <span className="text-sm text-gray-700">{item.label}</span>
                <span className="text-sm font-medium text-gray-900">
                  {item.value} ({((item.value / total) * 100).toFixed(1)}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const currentStateData = stateData[selectedState];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900">Geographic Enrollment Distribution</h1>
        <p className="text-gray-600 mt-1">Interactive state-by-state enrollment analysis and demographics</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Left Side - USA Map */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">United States Enrollment Map</h2>
              <USAMap />
              
              {/* State Summary Cards */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {Object.entries(stateData).slice(0, 4).map(([code, data]) => (
                  <div 
                    key={code}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedState === code 
                        ? 'border-sky-500 bg-sky-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedState(code)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-gray-800">{data.name}</div>
                        <div className="text-sm text-gray-600">{data.totalEmployees} employees</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-sky-600">{data.totalMembers}</div>
                        <div className="text-xs text-gray-500">members</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - State Details */}
          <div className="space-y-6">
            {/* State Header */}
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold">{currentStateData.name}</h2>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <div className="text-3xl font-bold">{currentStateData.totalMembers}</div>
                  <div className="text-sky-200">Total Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{currentStateData.totalEmployees}</div>
                  <div className="text-sky-200">Employees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{currentStateData.averageAge}</div>
                  <div className="text-sky-200">Avg Age</div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'age', label: 'By Age' },
                    { id: 'gender', label: 'By Gender' },
                    { id: 'zipcode', label: 'By ZIP Code' },
                    { id: 'coverage', label: 'Coverage Tiers' },
                    { id: 'health', label: 'Health Metrics' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-sky-500 text-sky-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-3">Key Statistics</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Male Percentage:</span>
                            <span className="font-medium">{currentStateData.malePercentage}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Average Age:</span>
                            <span className="font-medium">{currentStateData.averageAge} years</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Members per Employee:</span>
                            <span className="font-medium">{(currentStateData.totalMembers / currentStateData.totalEmployees).toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-3">Top Cities</h4>
                        <div className="space-y-2">
                          {currentStateData.topCities.map((city, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                              <span className="text-gray-700">{city}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <PieChart 
                      data={currentStateData.ageDistribution.map(age => ({
                        label: age.range,
                        value: age.count
                      }))}
                      title="Age Distribution Overview"
                    />
                  </div>
                )}

                {activeTab === 'age' && (
                  <div className="space-y-6">
                    <CombinedAgeGenderChart 
                      ageData={currentStateData.ageDistribution}
                      genderData={currentStateData.genderDistribution}
                      title="Enrollment by Age Group and Gender"
                    />
                    
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg">
                        <div className="px-4 py-3 border-b border-gray-200">
                          <h4 className="font-semibold text-gray-800">Age Group Details</h4>
                        </div>
                        <div className="p-4">
                          <div className="space-y-3">
                            {currentStateData.ageDistribution.map((group, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                  <div className="font-medium text-gray-800">{group.range} years</div>
                                  <div className="text-sm text-gray-600">{group.count} employees ({group.percentage}%)</div>
                                </div>
                                <div className="text-right">
                                  <div className="font-bold text-green-600">${group.avgSalary.toLocaleString()}</div>
                                  <div className="text-sm text-gray-600">Avg Salary</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg">
                        <div className="px-4 py-3 border-b border-gray-200">
                          <h4 className="font-semibold text-gray-800">Gender Distribution Summary</h4>
                        </div>
                        <div className="p-4">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                              <div className="text-2xl font-bold text-blue-600">{currentStateData.genderDistribution.male.count}</div>
                              <div className="text-blue-800 font-medium">Male</div>
                              <div className="text-sm text-blue-600">{currentStateData.genderDistribution.male.percentage}%</div>
                            </div>
                            <div className="text-center p-4 bg-pink-50 rounded-lg">
                              <div className="text-2xl font-bold text-pink-600">{currentStateData.genderDistribution.female.count}</div>
                              <div className="text-pink-800 font-medium">Female</div>
                              <div className="text-sm text-pink-600">{currentStateData.genderDistribution.female.percentage}%</div>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Male Avg Age:</span>
                              <span className="font-medium">{currentStateData.genderDistribution.male.avgAge}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Female Avg Age:</span>
                              <span className="font-medium">{currentStateData.genderDistribution.female.avgAge}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Male Avg Claims:</span>
                              <span className="font-medium">${currentStateData.genderDistribution.male.avgClaims}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Female Avg Claims:</span>
                              <span className="font-medium">${currentStateData.genderDistribution.female.avgClaims}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'gender' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-blue-600">{currentStateData.genderDistribution.male.count}</div>
                          <div className="text-blue-800 font-medium">Male Employees</div>
                          <div className="text-sm text-blue-600 mt-2">{currentStateData.genderDistribution.male.percentage}%</div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Average Age:</span>
                            <span className="font-medium">{currentStateData.genderDistribution.male.avgAge}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Avg Claims:</span>
                            <span className="font-medium">${currentStateData.genderDistribution.male.avgClaims}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-pink-600">{currentStateData.genderDistribution.female.count}</div>
                          <div className="text-pink-800 font-medium">Female Employees</div>
                          <div className="text-sm text-pink-600 mt-2">{currentStateData.genderDistribution.female.percentage}%</div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Average Age:</span>
                            <span className="font-medium">{currentStateData.genderDistribution.female.avgAge}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Avg Claims:</span>
                            <span className="font-medium">${currentStateData.genderDistribution.female.avgClaims}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <BarChart 
                      data={[
                        { gender: 'Male', count: currentStateData.genderDistribution.male.count },
                        { gender: 'Female', count: currentStateData.genderDistribution.female.count }
                      ]}
                      title="Gender Distribution"
                      xKey="gender"
                      yKey="count"
                      color="#EC4899"
                    />
                  </div>
                )}

                {activeTab === 'zipcode' && (
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 rounded-lg">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <h4 className="font-semibold text-gray-800">ZIP Code Analysis</h4>
                      </div>
                      <div className="p-4">
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="px-3 py-2 text-left font-medium">ZIP Code</th>
                                <th className="px-3 py-2 text-left font-medium">City</th>
                                <th className="px-3 py-2 text-center font-medium">Members</th>
                                <th className="px-3 py-2 text-center font-medium">Avg Income</th>
                                <th className="px-3 py-2 text-center font-medium">Claims Rate</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentStateData.zipCodeData.map((zip, index) => (
                                <tr key={index} className="border-b border-gray-100">
                                  <td className="px-3 py-2 font-mono">{zip.zip}</td>
                                  <td className="px-3 py-2">{zip.city}</td>
                                  <td className="px-3 py-2 text-center font-medium">{zip.members}</td>
                                  <td className="px-3 py-2 text-center">${zip.avgIncome.toLocaleString()}</td>
                                  <td className="px-3 py-2 text-center">
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                      zip.claimsRate > 0.75 ? 'bg-red-100 text-red-700' :
                                      zip.claimsRate > 0.70 ? 'bg-yellow-100 text-yellow-700' :
                                      'bg-green-100 text-green-700'
                                    }`}>
                                      {(zip.claimsRate * 100).toFixed(1)}%
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <BarChart 
                      data={currentStateData.zipCodeData}
                      title="Members by ZIP Code"
                      xKey="zip"
                      yKey="members"
                      color="#10B981"
                    />
                  </div>
                )}

                {activeTab === 'coverage' && (
                  <div className="space-y-6">
                    <PieChart 
                      data={currentStateData.coverageTiers.map(tier => ({
                        label: tier.tier,
                        value: tier.count
                      }))}
                      title="Coverage Tier Distribution"
                    />

                    <div className="bg-white border border-gray-200 rounded-lg">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <h4 className="font-semibold text-gray-800">Coverage Tier Details</h4>
                      </div>
                      <div className="p-4">
                        <div className="space-y-3">
                          {currentStateData.coverageTiers.map((tier, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-800">{tier.tier}</div>
                                <div className="text-sm text-gray-600">{tier.count} employees ({tier.percentage}%)</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-purple-600">${tier.avgPremium}</div>
                                <div className="text-sm text-gray-600">Avg Premium</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'health' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-4">BMI Distribution</h4>
                        <div className="text-center mb-4">
                          <div className="text-2xl font-bold text-gray-900">{currentStateData.healthMetrics.bmi.average}</div>
                          <div className="text-sm text-gray-600">Average BMI</div>
                        </div>
                        <div className="space-y-2">
                          {Object.entries(currentStateData.healthMetrics.bmi.ranges).map(([category, count]) => (
                            <div key={category} className="flex justify-between text-sm">
                              <span className="capitalize text-gray-600">{category}:</span>
                              <span className="font-medium">{count}%</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-4">Utilization Rates</h4>
                        <div className="space-y-3">
                          {Object.entries(currentStateData.healthMetrics.utilization).map(([service, rate]) => (
                            <div key={service} className="flex justify-between items-center">
                              <span className="text-sm capitalize text-gray-600">{service.replace(/([A-Z])/g, ' $1')}:</span>
                              <span className="font-medium">{rate}x/year</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <h4 className="font-semibold text-gray-800">Common Health Conditions</h4>
                      </div>
                      <div className="p-4">
                        <div className="space-y-3">
                          {currentStateData.healthMetrics.conditions.map((condition, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-gray-700">{condition.condition}</span>
                              <div className="flex items-center space-x-3">
                                <div className="w-32 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-blue-500 h-2 rounded-full"
                                    style={{ width: `${condition.prevalence * 4}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium w-12 text-right">{condition.prevalence}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeographicEnrollmentDashboard;