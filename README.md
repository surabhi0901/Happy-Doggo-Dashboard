# Happy Doggo Dashboard

A modern React-based business intelligence dashboard for Happy Doggo, featuring comprehensive analytics on customer segmentation, revenue by product and city, repeat customer analysis, and individual customer performance data.

## Features

- 📊 **Interactive Charts**: Visualize revenue distribution across segments, products, and cities
- 👥 **Customer Analytics**: Detailed customer data with filtering by segment and product
- 🏙️ **City Rankings**: Revenue and loyalty metrics by city
- 📈 **Product Performance**: Compare revenue, order value, and frequency across product lines
- 💡 **Strategic Insights**: Data-driven recommendations for business growth
- 🎨 **Dark Mode**: Automatic dark mode support based on system preferences
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **React 18**: UI framework
- **Vite**: Fast build tool and dev server
- **Chart.js**: Data visualization
- **Lucide React**: Beautiful icons
- **CSS Variables**: Theming support

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/masterkaran003/Happ-Doggo-Dashboard.git
cd Happ-Doggo-Dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview
```bash
npm run preview
```
Serves the production build locally for testing.

### Deploy
```bash
npm run deploy
```
Builds the project and deploys to GitHub Pages.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── TopBar.jsx          # Header with logo and badge
│   │   ├── KPICards.jsx        # KPI metrics display
│   │   ├── TabNavigation.jsx   # Tab navigation controls
│   │   └── tabs/
│   │       ├── OverviewTab.jsx     # Main dashboard overview
│   │       ├── ProductsTab.jsx     # Product performance
│   │       ├── CitiesTab.jsx       # City analytics
│   │       ├── CustomersTab.jsx    # Customer management
│   │       └── InsightsTab.jsx     # Strategic insights
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # React entry point
│   ├── index.css              # Global styles
│   └── data.js                # Application data and constants
├── index.html                 # HTML entry point
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## GitHub Pages Deployment

### Setup Instructions

1. **Update GitHub Username**: In `package.json`, change the `homepage` URL:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/Happ-Doggo-Dashboard"
```

2. **Create GitHub Personal Access Token**:
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Create a new token with `public_repo` scope
   - Copy the token

3. **Set Up Repository Secrets**:
   - Go to your repository Settings → Secrets and variables → Actions
   - Create a new secret named `GITHUB_TOKEN` and paste your token

4. **Initial Deployment**:
```bash
npm install -g gh-pages
npm run deploy
```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select `gh-pages` branch as the source

### Automatic Deployment with GitHub Actions

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the main branch. Check `.github/workflows/deploy.yml` for the workflow configuration.

## Data Structure

The dashboard uses sample customer data located in `src/data.js`. This includes:

- **Customers**: 15 sample customers with purchase history
- **KPIs**: Key performance indicators (revenue, AOV, repeat rate, top 20% share)
- **Cities**: Revenue breakdown across 5 Indian cities
- **Products**: Performance metrics for Training, Treats, and Grooming services

## Customization

### Adding New Data

1. Update `src/data.js` with your actual data
2. Modify component rendering in the respective tab components

### Styling

- Global styles are in `src/index.css`
- CSS variables for theming are defined in `:root`
- Dark mode is automatically applied based on system preferences

### Charts

Chart configurations can be customized in each tab component. Refer to [Chart.js documentation](https://www.chartjs.org/docs/latest/) for more options.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The application is optimized for performance:
- Lazy loading of components
- Efficient re-renders with React hooks
- Minified production builds
- Responsive images and assets

## Troubleshooting

### Deployment Issues

If `npm run deploy` fails:
1. Ensure `gh-pages` is installed: `npm install gh-pages --save-dev`
2. Verify GitHub token has correct permissions
3. Check that repository is public or GitHub Pages is enabled

### Dark Mode Not Working

Clear browser cache and hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Charts Not Rendering

Ensure Chart.js is properly installed: `npm install chart.js react-chartjs-2`

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues, questions, or suggestions, please open an issue on the repository.

---

**Happy Doggo Dashboard** - Bringing data-driven insights to dog care services! 🐕📊
