# System Monitoring Dashboard

A modern, high-performance web application built with TypeScript, featuring a real-time system monitoring dashboard. It leverages Mithril.js for a lightweight UI and ECharts for reactive, interactive data visualizations.

## 🚀 Features

- **Real-time Monitoring:** Live tracking of CPU load, frequency, temperatures, power consumption, and FPS.
- **Interactive Visualizations:** High-performance charts powered by ECharts with support for:
  - Grid and List layout modes.
  - Interactive filtering and searching.
  - Detailed modal views for individual metrics.
  - Play/Pause functionality for live data streams.
- **Responsive UI:** Built with Tailwind CSS for a seamless experience across devices.
- **Lightweight & Fast:** Uses Mithril.js for minimal overhead and esbuild for lightning-fast bundling.
- **Modern Backend:** Express.js server providing static asset delivery and API endpoints.

## 🛠 Tech Stack

- **Frontend:** [Mithril.js](https://mithril.js.org/), [ECharts](https://echarts.apache.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend:** [Express.js](https://expressjs.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [esbuild](https://esbuild.github.io/)
- **Dev Tools:** nodemon, concurrently

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tswebapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development environment (starts the server, client bundler, and Tailwind compiler in watch mode):

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Production Build

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📂 Project Structure

- `src/server.ts`: Express backend entry point.
- `src/ui/`: Frontend source code.
  - `index.ts`: Application entry and routing.
  - `layout.ts`: Common UI wrapper.
  - `system_monitor/`: Core monitoring logic and components.
  - `tailwind.css`: Tailwind entry point.
- `public/`: Static assets and bundled output.
- `tsconfig.json`: TypeScript configuration.

## 📜 License

This project is licensed under the ISC License.
