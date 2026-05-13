# **Blueprint: 3-6 Class Soccer Hub**

## **Overview**
This project is a dedicated web platform for Class 3-6 students to track their soccer tournament progress during the school sports festival. It provides a central location for match results, highlight videos, upcoming schedules, and team recognition, all wrapped in a high-energy, modern interface.

## **Detailed Outline**
### **Project Documentation**
*   **Purpose:** To boost class spirit and provide easy access to tournament data.
*   **Design Philosophy:** Modern, dynamic, and interactive. Using dark backgrounds with vibrant neon accents to simulate a high-stakes sports atmosphere.
*   **Tech Stack:** 
    *   **HTML5:** Semantic structure for accessibility and SEO.
    *   **CSS3 (Baseline):** Using `@container`, `:has()`, `oklch()`, and CSS variables.
    *   **JS (ES Modules):** Web Components for modular UI.

### **Features Implemented (v1.0)**
*   **Global Layout:** Responsive grid system with header and main navigation.
*   **Theme:** "Modern & Dynamic" with noise texture and glow effects.
*   **Scoreboard Section:** Uses `<soccer-match-card>` components.
*   **Highlights Section:** Uses `<soccer-highlight>` components for video embeds.
*   **Schedule Section:** Displays upcoming match details.
*   **Team Section:** Uses `<soccer-player-card>` to showcase 3-6 class representatives.

---

## **Current Plan: Initial Implementation**

### **Step 1: Foundational Structure**
*   [x] Update `index.html` with semantic structure.
*   [x] Initialize `style.css` with CSS variables and base resets.

### **Step 2: Component Development**
*   [x] Define `SoccerMatchCard` component in `main.js`.
*   [x] Define `SoccerHighlight` component in `main.js`.
*   [x] Define `SoccerPlayerCard` component in `main.js`.

### **Step 3: Styling & Polishing**
*   [x] Add global effects (noise, glow) in `style.css`.
*   [x] Ensure mobile responsiveness.
