PROJECT DOCUMENTATION

1. TECH STACK
--------------------------------------------------
- Frontend Framework: React 19 (Modern UI library)
- Programming Language: JavaScript & TypeScript (Used for frontend logic and type-safe backend functions)
- Build Tool: Vite (Fast development and build process)
- Backend & Database: Convex (Real-time backend service for lead capture and admin settings)
- Styling: Vanilla CSS & Tailwind CSS (Custom design system refined with utility-first styling)
- Animations: Framer Motion (Used for smooth transitions in the Admin Portal and UI components)

2. HOW THE PROJECT WORKS (FLOW)
--------------------------------------------------
- Initial Load: The project starts at 'main.jsx', which initializes the React environment and wraps the app with the Convex provider for real-time data access.
- Navigation: The 'App.jsx' file manages page routing using 'react-router-dom', allowing for a seamless Single Page Application experience.
- Routing:
  * Home Page (/): The public landing page showcasing industrial solutions, services, and testimonials.
  * Admin Portal (/admin-portal): A secure dashboard for managing captured leads, requiring dual-key authentication.
- Layout: Features a responsive global Navbar and Footer on the main site, while the Admin Portal utilizes a custom sidebar and header for dashboard management.
- Data Flow: When a visitor submits a contact form, a Convex Action ('processContactCapture') is triggered. It saves the contact to the database and then triggers two email services in parallel: Resend (admin alert) and EmailJS (customer auto-reply).

3. LIBRARIES USED & THEIR PURPOSE
--------------------------------------------------
- react-router-dom: 
  * Used in: 'App.jsx'
  * Purpose: Manages navigation between site sections and handles private route protection for the admin dashboard.

- convex:
  * Used in: 'main.jsx', the 'convex/' folder, and many dashboard components.
  * Purpose: Acts as the infrastructure for the entire app, providing a real-time database, mutations, and server-side actions.

- framer-motion:
  * Used in: 'AdminPortal.jsx' and various entrance animations.
  * Purpose: Provides high-quality animations and transitions for UI elements, making the interface feel responsive and high-end.

- lucide-react:
  * Used in: Sidebar, Dashboard metrics, and UI buttons.
  * Purpose: Supplies the clean, vector-based iconography used throughout the administrative and user interfaces.

- resend:
  * Used in: 'convex/actions.ts'
  * Purpose: Powers the professional email alert system that notifies the admin immediately when a new lead is captured.

- emailjs(limit:200/month):
  * Used in: 'convex/actions.ts' (via direct API fetch)
  * Purpose: Sends automated acknowledgement emails to customers right after they submit a query.

- vercel.json:
  * Used in: Root directory.
  * Purpose: Configures production routing to prevent 404 errors when users refresh deep pages in the React app.
