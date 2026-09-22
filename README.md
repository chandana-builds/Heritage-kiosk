# 🏛️ Heritage Kiosk — Interactive Cultural Portal & Museum Guide

[![Next.js](https://img.shields.io/badge/Next.js-16.3.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-amber?style=for-the-badge)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live_Demo-heritage--kiosk.onrender.com-brightgreen?style=for-the-badge&logo=render)](https://heritage-kiosk.onrender.com/)

> 🌐 **Live Demo**: [https://heritage-kiosk.onrender.com/](https://heritage-kiosk.onrender.com/)

An immersive, touch-optimized digital kiosk web application designed for archaeological museums, heritage landmarks, and cultural exhibition halls. Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and modern web accessibility standards.

---

## ✨ Key Features

### 🏺 1. Curated Heritage Gallery
- **Multi-Epoch Filtering**: Categorized across *Ancient Antiquity, Classical Golden Age, Medieval Kingdoms, Early Modern Renaissance,* and *Modern Nation & Freedom Renaissance*.
- **Category Filter**: Quickly isolate *Architecture, Sculptures, Sacred Relics, Monuments,* and *Manuscripts*.
- **Modern Manuscripts & Memorials**:
  - **Dr. B.R. Ambedkar**: Original 231-page Calligraphed Constitution of India Manuscript & Deekshabhoomi Stupa (Nagpur).
  - **Jawaharlal Nehru**: 1,000-page prison manuscript of *The Discovery of India*, handwritten *Tryst with Destiny* draft, and Teen Murti / Anand Bhavan.
  - **Mahatma Gandhi**: Handwritten manuscripts of *Hind Swaraj* (written aboard SS Kildonan Castle), *The Story of My Experiments with Truth*, and Sabarmati Ashram (Hriday Kunj).
  - **Dr. A.P.J. Abdul Kalam**: Technical flight notebooks (SLV-3 Rohini launch), *Wings of Fire* manuscripts, and the National Memorial at Rameswaram.
- **Multi-Photo Interactive Gallery**: High-definition thumbnail switcher in exhibit view to seamlessly toggle between original manuscripts and sacred memorial architecture.
- **Instant Search**: Real-time querying across titles, periods, locations, materials, and tags.
- **Rich Curatorial Records**: Detailed historical context, provenance records, dimensions, and architectural highlights for every piece.

### 🎙️ 2. Live Audio Guide Narration
- **In-Kiosk Voice Commentary**: Integrated with the **Web Speech API** for spoken narration in real time without external audio streaming latency.
- **Speed & Playback Control**: Multi-speed playback (`0.85x`, `1x`, `1.25x`, `1.5x`), mute toggle, and smooth progress tracking.
- **Read-Along Transcripts**: Collapsible verbatim curatorial transcripts for reading accessibility.

### 🔄 3. 360° 3D Artifact Inspector
- **Touch / Drag Interactive Rotation**: Seamless touch/drag manipulation along 3D axes with natural inertia.
- **Clickable Discovery Hotspots**: Interactive pins on the 3D artifact revealing close-up craftsmanship, inscriptions, and historical significance.
- **Holographic Wireframe Mode**: Switch between polished surface rendering and structural mesh view.
- **Auto-Spin & Zoom Controls**: Hands-free presentation loop with precision zoom controls.

### ⏳ 4. Chronological Epoch Timeline
- Spans over **5,000 years of civilization** (from the Indus Valley and Mauryan Empire to the Chola Dynasty, Vijayanagara, and Renaissance synthesis).
- Step-by-step milestone cards detailing scientific breakthroughs, monumental temple excavations, and philosophical turning points.

### 🏆 5. Visitor Heritage Trivia Challenge
- Interactive 5-question historical quiz testing visitor knowledge.
- Instant validation with comprehensive educational explanations.
- Final scoring with collectible digital explorer ranks (*Master of World Antiquity*, *Custodian of Culture*).
- Direct deep-links from quiz questions back to the corresponding museum exhibits.

### ♿ 6. Kiosk Mode, Attract Screen & Accessibility
- **Attract Screen (Idle Screen-Saver)**: Welcoming ambient loop with featured treasures and touch-to-explore callout.
- **Auto-Idle Detection**: Automatically resets to attract mode after 2 minutes of visitor inactivity for the next patron.
- **Accessibility Dock**: Instant high-contrast mode toggle and dynamic font scaling for seniors and visually impaired visitors.
- **Multilingual Support**: Real-time language switching across **English**, **हिन्दी (Hindi)**, **Español (Spanish)**, and **Français (French)**.
- **Smartphone Sync (QR Code)**: Dynamic QR handoff code allowing visitors to seamlessly continue the audio tour on their personal smartphones.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16.3.5](https://nextjs.org/) (App Router & Turbopack) |
| **UI Library** | [React 19.2.8](https://react.dev/) |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4.3](https://tailwindcss.com/) with Vanilla CSS custom design tokens |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Audio** | Native HTML5 & Web Speech Synthesis API |

---

## 📂 Project Structure

```
Heritage-kiosk/
├── app/
│   ├── globals.css           # Obsidian & brushed gold design tokens, touch animations
│   ├── layout.tsx            # Root layout, Google Fonts, and kiosk viewport settings
│   └── page.tsx              # Main dashboard orchestration & idle session management
├── components/
│   ├── AccessibilityBar.tsx  # Floating accessibility dock & session reset button
│   ├── ArtifactViewer3D.tsx  # 360° rotatable 3D inspector with discovery hotspots
│   ├── AttractScreen.tsx     # Idle museum screen-saver ("Touch Screen to Begin")
│   ├── AudioNarrator.tsx     # Audio guide player with SpeechSynthesis & speed controls
│   ├── EpochTimeline.tsx     # Chronological civilizational milestone navigator
│   ├── ExhibitExplorer.tsx   # Filterable treasure catalog with search & tags
│   ├── ExhibitModal.tsx      # In-depth curatorial record with audio & 3D tabs
│   ├── HeritageQuiz.tsx      # Interactive visitor trivia challenge & ranking
│   ├── KioskHeader.tsx       # Museum branding, live clock, language & accessibility
│   └── VisitorGuideModal.tsx # Gallery zone map, visitor etiquette, and mobile QR sync
├── data/
│   └── heritageData.ts       # Curated antiquities dataset, quiz items, and i18n strings
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Project dependencies and npm scripts
├── postcss.config.mjs        # PostCSS configuration
└── tsconfig.json             # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or higher (recommended: Node 20 or Node 24)
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chandana-builds/Heritage-kiosk.git
   cd Heritage-kiosk
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 📦 Production Build

To compile an optimized production bundle:

```bash
npm run build
npm run start
```

### Build Verification
- **TypeScript**: 0 errors
- **Lint**: `npm run lint` passes with 0 warnings
- **Static Pages**: 100% pre-rendered

---

## 🖥️ Physical Kiosk Deployment Guidelines

For deployment on museum touch pedestals or interactive wall displays:

1. **Recommended Resolution**: Full HD (`1920x1080`) or 4K (`3840x2160`) in landscape orientation.
2. **Kiosk Browser Launch Flag** (Chrome / Edge):
   ```bash
   chrome.exe --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 http://localhost:3000
   ```
3. **Auto-Reset**: The application includes built-in inactivity listeners that automatically reset any open modals or session data back to the **Attract Screen** after 120 seconds of idle time.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Developed with ❤️ for cultural preservation and historical education.
