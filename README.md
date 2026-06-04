# MRJ-Portfolio & CV-Engine
A responsive, high-performance portfolio application built with **Blazor WebAssembly**. It serves as a dual-purpose tool: a professional showcase of project history and a dynamic CV-rendering engine that allows users to export resume data into formatted PDF documents using client-side JavaScript interop.

---

## 🚀 What
A high-performance portfolio and CV generation platform. It provides an immersive experience for viewing professional history and enables instant, high-quality PDF exports of resume data directly in the browser.

## 💡 Why
*   **Performance:** By leveraging Blazor WebAssembly, the application runs entirely in the browser, eliminating the need for a persistent server-side connection and providing a snappier user experience.
*   **Maintainability:** The use of `Layouts` and `Components` ensures a modular architecture where the CV data is cleanly separated from the rendering logic.
*   **Portability:** The integration of `html2pdf.js` allows for a "WYSIWYG" (What You See Is What You Get) export experience, ensuring that the resume layout is preserved regardless of the user's local environment.

## 🌐 Where
*   **Infrastructure:** Deployed on GitHub Pages, utilizing a custom `base href` logic in `index.html` to handle routing within sub-path environments.
*   **Runtime:** Optimized for modern browsers (Chrome, Edge, Firefox).
*   **Scope:** Client-side only. No backend API is required, making the site extremely fast, secure, and cost-effective to host.

## 🛠 How
*   **Routing:** Uses a custom `Router` component with an `IntersectionObserver` to track scroll positions, enabling an immersive "Dynamic Background" color-shifting effect.
*   **UI/UX:** Styling is achieved through scoped CSS combined with Bootstrap 5, featuring an auto-hiding navigation bar that pins/unpins based on user preference and interaction.
*   **Interoperability:** The C# code utilizes `IJSRuntime` to bridge .NET logic with external JS libraries (`html2pdf.js` for PDF generation, `scrollTracker.js` for UI behaviors).
*   **Deployment:** Leverages static site hosting for near-instant load times.

## 📋 Key Technical Features
*   **Custom Interop Modules:** A modular JavaScript system handles scroll observation and navbar state management, reducing main-thread load and preventing layout jitter.
*   **Responsive Scaling:** Implemented a transform-based CSS scaling system that allows the CV "paper" to adjust dynamically for mobile viewports without breaking the document flow.
*   **Print-Ready CSS:** A comprehensive `@media print` block ensures that during PDF generation, all UI controls (buttons, navbars) are programmatically stripped out, leaving only the clean, professional document.
*   **Dynamic Loading:** Features a custom CSS-animated loading screen that tracks the Blazor download percentage, providing visual feedback during the initial WebAssembly assembly download.

---

### 💻 Technologies Used
*   **Framework:** .NET / Blazor WebAssembly
*   **UI/Styling:** Bootstrap 5, Scoped CSS
*   **JS Libraries:** `html2pdf.js`, `IntersectionObserver`
*   **Deployment:** GitHub Pages

## Contact
Feel free to reach out to me through my social channels:
*   [LinkedIn](https://www.linkedin.com/in/marlon-junio-4b4a69164/)
*   [GitHub](https://github.com/MrjDevBE)
*   [Instagram](https://www.instagram.com/papy.moja/)
*   [Email](dev.mrjunio@gmail.com)
*   Happy to help!

Please use this link to visit the actual project : https://mrjdevbe.github.io/MrJProject/
