# Hannes Zhang - Personal Portfolio

A lightweight, fast, and data-driven personal portfolio website for Hannes Zhang (张誉怀). Designed with an academic and clean aesthetic, perfect for showcasing research in Embodied Intelligence, Computer Vision, and HCI.

## Features
- **Performance First:** Built with Vite and Tailwind CSS for rapid development and lightning-fast production builds.
- **Data-Driven Architecture:** Easily update publications and projects by editing a single JavaScript data file (`js/data.js`), without touching the HTML markup.
- **Responsive Design:** Fully responsive layout with mobile-specific optimizations (e.g., hiding complex CSS animations on smaller screens to ensure readability).
- **Pure CSS Apple-Style Animations:** Engaging robotic arm, drone, and smart glasses animations built purely with CSS keyframes. Recently redesigned with an elegant "Apple-style" aesthetic (Space Gray, Silver, glassmorphism, and soft shadows) to perfectly blend hard-core tech with minimalist frontend design, requiring no heavy 3D rendering libraries.

## Tech Stack
- HTML5 / Vanilla JS
- [Tailwind CSS](https://tailwindcss.com/) (Utility-first styling)
- [DaisyUI](https://daisyui.com/) (Component classes)
- [Vite](https://vitejs.dev/) (Build tool & development server)

## Project Structure
```text
.
├── index.html          # Main HTML structure
├── css/
│   ├── main.css        # Tailwind directives and CSS entry point
│   └── style.css       # Custom styles and pure CSS animations
├── js/
│   ├── main.js         # Core logic (DOM rendering and scroll animations)
│   └── data.js         # Data source for publications, projects, and news
├── images/             # Static assets (images, profile pictures)
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project metadata and scripts
```

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Hannezs/My_web.git
   cd My_web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server (with hot-module replacement):
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173`.

## How to Update Content
This website uses a modular data approach for the Publications and Projects sections. 
To add or modify content, simply edit the `js/data.js` file:

```javascript
export const publicationsData = [
    {
        title: "Your New Paper Title",
        authors: "Hannes Zhang, et al.",
        venue: "CVPR 2026",
        links: [
            { text: "Paper", url: "link-to-pdf" },
            { text: "Code", url: "link-to-repo" }
        ],
        image: "assets/paper-preview.jpg"
    }
];
```
The application reads this array and dynamically mounts the UI cards to the browser DOM.

## Building for Production
To generate the optimized static files for deployment (e.g., GitHub Pages, Vercel, Netlify):
```bash
npm run build
```
The compiled, minified, and deployment-ready assets will be output to the `dist/` directory.

## License
&copy; 2026 Hannes Zhang. All rights reserved.
