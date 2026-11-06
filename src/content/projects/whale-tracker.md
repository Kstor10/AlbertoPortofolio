---
order: 6
year: "2025"
status: prototype
cover: /images/projects/whale-tracker/whale-tracker-01-dashboard-simulado.webp
accent: violet
es:
  title: WhaleTracker
  eyebrow: Web3 · prototipo de producto
  summary: "Prototipo frontend para explorar actividad de ballenas en Solana, memecoins y una cartera, mostrado con datos simulados."
  problem: "Las señales de grandes transacciones, los tokens emergentes y la evolución de una cartera suelen consultarse en herramientas separadas y con contextos difíciles de comparar."
  solution:
    - "Dashboard con volumen, tamaño medio y feed de operaciones de compra y venta."
    - "Vista de memecoins con precio, capitalización, holders y progreso de la bonding curve."
    - "Cartera con posiciones, coste, valor y cálculo de ganancia o pérdida."
    - "Navegación, autenticación y ajustes preparados para una futura integración con Supabase y fuentes externas."
  result: "La interfaz React se ejecuta y permite recorrer el dashboard y la cartera. En el estado actual, las operaciones, precios, posiciones y actualizaciones son simulados en el frontend; la conexión blockchain, las APIs y el backend no están integrados."
  stack:
    - React 18
    - TypeScript
    - Vite
    - Tailwind CSS
    - shadcn/ui
    - React Router
    - Supabase client
  role:
    - Definición del concepto y del alcance del prototipo
    - Prototipado asistido con Lovable y organización de las vistas principales
    - Diseño de los flujos de dashboard, cartera, autenticación y ajustes
    - Preparación del frontend para una futura integración con datos reales
  gallery:
    - src: /images/projects/whale-tracker/whale-tracker-01-dashboard-simulado.webp
      alt: "Dashboard de WhaleTracker con estadísticas y transacciones simuladas"
      caption: "Vista local de demostración: los volúmenes, operaciones y memecoins proceden de constantes del frontend."
    - src: /images/projects/whale-tracker/whale-tracker-02-cartera-simulada.webp
      alt: "Cartera de WhaleTracker con posiciones y rentabilidad simuladas"
      caption: "La cartera calcula valor y P&L a partir de posiciones de prueba; no representa activos ni rendimientos reales."
en:
  title: WhaleTracker
  eyebrow: Web3 · product prototype
  summary: "A frontend prototype for exploring Solana whale activity, memecoins and a portfolio, shown with simulated data."
  problem: "Large-transaction signals, emerging tokens and portfolio performance are usually spread across separate tools with context that is hard to compare."
  solution:
    - "A dashboard with volume, average size and a feed of buy and sell operations."
    - "A memecoin view covering price, market cap, holders and bonding-curve progress."
    - "A portfolio with positions, cost, value and gain-or-loss calculations."
    - "Navigation, authentication and settings prepared for future integration with Supabase and external data sources."
  result: "The React interface runs and supports navigation through the dashboard and portfolio. In its current state, operations, prices, positions and updates are simulated in the frontend; blockchain connectivity, APIs and the backend are not integrated."
  stack:
    - React 18
    - TypeScript
    - Vite
    - Tailwind CSS
    - shadcn/ui
    - React Router
    - Supabase client
  role:
    - Product concept and prototype-scope definition
    - Lovable-assisted prototyping and organisation of the main views
    - Dashboard, portfolio, authentication and settings flow design
    - Frontend preparation for future real-data integration
  gallery:
    - src: /images/projects/whale-tracker/whale-tracker-01-dashboard-simulado.webp
      alt: "WhaleTracker dashboard with simulated statistics and transactions"
      caption: "Local demonstration view: volumes, operations and memecoins come from frontend constants."
    - src: /images/projects/whale-tracker/whale-tracker-02-cartera-simulada.webp
      alt: "WhaleTracker portfolio with simulated positions and returns"
      caption: "The portfolio calculates value and P&L from test positions; it does not represent real assets or returns."
---

WhaleTracker explora cómo reunir señales de mercado y seguimiento de cartera en una sola interfaz, manteniendo visible la diferencia entre prototipo y producto conectado.
