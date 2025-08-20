# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CLAROS is a stop-loss insurance analytics dashboard built as a React single-page application. It provides comprehensive analytics for health benefits consulting, displaying premium comparisons, claims analysis, demographics, and industry benchmarks for insurance plan evaluation.

## Development Commands

```bash
# Start development server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Alternative static server
npm run serve
```

## Architecture

### Core Structure
- **Single Component Architecture**: The entire dashboard is implemented as one comprehensive React component (`ComprehensiveStopLossDashboard`) in `src/App.jsx`
- **Data-Driven**: All dashboard content is driven by a single `dashboardData` object containing company info, insurance plans, historical data, demographics, and benchmarks
- **Tab-Based Navigation**: Five main sections accessed via tab state (`overview`, `premiums`, `claims`, `demographics`, `benchmarks`)

### Key Data Structure
The dashboard revolves around a central data object with these main sections:
- `company` - Basic company information and employee counts
- `plans` - Array of insurance plan options with premiums, deductibles, and risk metrics
- `historicalData` - Time-series data for premiums and claims trends
- `demographics` - Employee age groups and coverage tier distributions
- `benchmarks` - Industry and regional comparison data

### Custom Chart Components
All visualizations are implemented as custom React components using SVG:
- `LineChart` - Multi-line time series charts with hover tooltips
- `AdvancedBarChart` - Vertical bar charts with gradient styling and hover effects
- `DonutChart` - Donut charts with center labels and legends
- `MetricsGrid` - Grid layout for key performance indicators

### Styling
- **Tailwind CSS**: All styling uses Tailwind utility classes
- **Responsive Design**: Grid layouts adapt from mobile to desktop
- **Color Scheme**: Consistent blue/sky theme with semantic colors for data visualization

### State Management
Simple React useState for:
- `activeTab` - Controls which dashboard section is visible
- `selectedTimeframe` - Time period filter (currently display-only)
- `selectedMetric` - Metric filter (currently display-only)

## File Structure Notes

- `comprehensive_desktop_dashboard.tsx` - Original TypeScript version (legacy)
- `src/App.jsx` - Main dashboard component (active version)
- `src/main.jsx` - React entry point
- `src/index.css` - Tailwind imports and basic styles
- Configuration files for Vite, Tailwind, and PostCSS in root

## Data Integration

Currently uses mock data embedded in the component. To integrate real data:
1. Replace the `dashboardData` object with API calls or props
2. Add loading states for chart components
3. Consider moving data fetching to custom hooks or context providers