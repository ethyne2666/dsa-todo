
<div align="center">

<!-- Animated Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=6366f1&height=200&section=header&text=DSA%20Todo%20Tracker&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Striver's%20A2Z%20Sheet%20Progress%20Tracker&descAlignY=60&descColor=c7d2fe" width="100%"/>

<!-- Badges Row -->
<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

<!-- Status Badges -->
<p align="center">
  <img src="https://img.shields.io/badge/Problems-454-6366f1?style=flat-square" alt="Problems"/>
  <img src="https://img.shields.io/badge/Topics-18-8b5cf6?style=flat-square" alt="Topics"/>
  <img src="https://img.shields.io/badge/Users-2-a78bfa?style=flat-square" alt="Users"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License"/>
</p>

<br/>

> 🧠 A personal DSA progress tracker built for **Charan Kumar** & **Devanarayan** to collaboratively track [Striver's A2Z DSA Sheet](https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z) — all **454 problems** across **18 topics**.

<br/>

</div>

---

## 📸 Preview

<div align="center">

| 🏠 Home Dashboard | 📋 DSA Sheet Tracker |
|:-:|:-:|
| *Per-user progress cards + topic-wise breakdown* | *Checkboxes per user, search, collapsible sections* |

</div>

---

## ✨ Features

- 🗂️ **All 454 Problems** from Striver's A2Z DSA Sheet — organized into 18 topics and subtopics
- ☑️ **Dual Checkboxes** — separate tracking per user (Charan Kumar & Devanarayan)
- 📊 **Progress Dashboard** — visual progress bars per user and per topic on the Home page
- 🔍 **Search Bar** — instantly filter problems by name
- 🗃️ **Collapsible Topics & Subtopics** — clean, uncluttered navigation
- 💾 **Persistent Storage** — progress saved in `localStorage`, survives browser restarts
- ✏️ **Strikethrough UX** — fully completed problems get visually dimmed and crossed out
- 📱 **Responsive** — works on mobile, tablet, and desktop

---

## 🗂️ Project Structure

```
dsa-todo/
├── public/
└── src/
    ├── components/
    │   └── Navbar.jsx          # Sticky top navbar with routing links
    ├── pages/
    │   ├── Home.jsx            # Dashboard with user stats & topic progress
    │   └── Todo.jsx            # Main DSA tracker with all problems
    ├── data/
    │   └── dsaData.js          # All 454 problems structured as JSON
    ├── hooks/
    │   └── useProgress.js      # Custom hook for localStorage progress tracking
    ├── App.jsx                 # Root component with routing
    ├── App.css
    ├── index.css
    └── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v16+) and **npm** installed.

```bash
node --version
npm --version
```

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/dsa-todo.git
cd dsa-todo
```

**2. Install dependencies**
```bash
npm install
```

**3. Install React Router DOM** *(if not already in package.json)*
```bash
npm install react-router-dom
```

**4. Start the development server**
```bash
npm run dev
```

**5. Open in browser**
```
http://localhost:5173
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| ⚛️ **React 18** | UI Framework |
| ⚡ **Vite** | Build tool & dev server |
| 🎨 **Tailwind CSS** | Utility-first styling |
| 🔀 **React Router v6** | Client-side routing |
| 💾 **localStorage** | Persistent progress storage |
| 🧩 **Custom Hooks** | `useProgress` for state management |

---

## 📚 DSA Topics Covered

| # | Topic | Problems |
|---|---|:-:|
| 1 | Learn the Basics | 31 |
| 2 | Sorting Techniques | 7 |
| 3 | Arrays [Easy → Medium → Hard] | 40 |
| 4 | Binary Search [1D, 2D, Search Space] | 32 |
| 5 | Strings [Basic & Medium] | 15 |
| 6 | LinkedList [Single, Double, Medium, Hard] | 31 |
| 7 | Recursion [PatternWise] | 25 |
| 8 | Bit Manipulation | 18 |
| 9 | Stack & Queues | 30 |
| 10 | Sliding Window & Two Pointer | 12 |
| 11 | Heaps | 17 |
| 12 | Greedy Algorithms | 16 |
| 13 | Binary Trees | 39 |
| 14 | Binary Search Trees | 16 |
| 15 | Graphs | 53 |
| 16 | Dynamic Programming | 56 |
| 17 | Tries | 7 |
| 18 | Strings [Advanced] | 9 |
| | **Total** | **454** |

---

## 👥 Built For

<div align="center">

| 👤 User | Color |
|:-:|:-:|
| **Charan Kumar** | 🟣 Indigo |
| **Devanarayan** | 🟣 Purple |

</div>

Each problem row has **two independent checkboxes** — one per user — so both can track their own progress side by side.

---

## 📖 How to Use

1. **Open the app** and go to the **DSA Sheet** page
2. **Find your topic** — topics are collapsible; click to expand
3. **Check the box** under your name column when you solve a problem
4. **Watch your progress** update live on the Home dashboard
5. Use the **search bar** to quickly find any specific problem
6. Progress is **automatically saved** — no login needed

---

## 🔮 Future Ideas

- [ ] Add difficulty tags (Easy / Medium / Hard) per problem
- [ ] LeetCode / GFG direct links per problem
- [ ] Notes/comments per problem
- [ ] Export progress as PDF
- [ ] Dark/light theme toggle
- [ ] Daily streak tracking

---

## 📄 License

This project is licensed under the **MIT License** — feel free to fork and customize!

---

## 🙌 Acknowledgements

- 📘 [Striver's A2Z DSA Sheet](https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z) by [TakeUForward](https://takeuforward.org/) — the best structured DSA roadmap out there
- ⚡ [Vite](https://vitejs.dev/) for blazing fast dev experience
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for clean utility styling

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=6366f1&height=100&section=footer" width="100%"/>

**Made with ❤️ by Charan Kumar & Devanarayan**

⭐ Star this repo if it helped you!

</div>
