# 🏫 Mahishadal Raj High School (H.S.)

Official web portal and digital management platform for **Mahishadal Raj High School (H.S.)**, established in 1945. This web application provides a comprehensive digital experience for students, parents, faculty, and administrative staff.

---

## 🔗 Quick Links

- **🌐 Live Web Portal:** [https://mahishadal-boys-school.vercel.app](https://mahishadal-boys-school.vercel.app)
- **🐙 GitHub Repository:** [https://github.com/loharbijoy2005-a11y/School](https://github.com/loharbijoy2005-a11y/School)

---

## ✨ Features

- 🌐 **Bilingual Support (English & Bengali / বাংলা):** Toggle seamlessly between English and Bengali across the entire portal.
- 📢 **Live Announcement Marquee Ticker:** Real-time editable ticker for urgent admissions, routine updates, and notice announcements.
- 👩‍🏫 **Dynamic Faculty & Staff Roster:** Searchable and filterable staff database with detailed profiles for teaching and non-teaching staff.
- 📋 **Tabbed Notice Board & PDF Viewer:** Categorized announcements (Madhyamik, Higher Secondary, Grants, Holidays) with integrated PDF preview & download simulation.
- 🔐 **Admin Management Dashboard:** Secure authentication portal allowing administrators to update announcements, manage faculty rosters, and post updates.
- 🎓 **Online Admission Portal:** Interactive modal form supporting applications for Class V to Class XI (WBBSE & WBCHSE).
- 🎁 **Govt Welfare Schemes Corner:** Dedicated information desk for *Oasis Scholarship (Pre-Matric & Post-Matric)*, *Sabooj Sathi*, *Aikyashree*, *Swami Vivekananda Merit-cum-Means (SVMCM)*, and *Taruner Swapna*.
- 🍱 **Bento-Grid Campus Facilities:** Interactive visual showcase of Science Labs, Smart Classrooms, Library, ICT Computer Lab, Sports Grounds, and Hostel.
- 💬 **Google Reviews & Feedback Widget:** Authentic community feedback and ratings display.
- 🗺️ **Interactive Geo-Location & Contact Desk:** Location mapping, direct contact form, and emergency contacts.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Library:** [React 18](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** FontAwesome 6 & Lucide React

### Backend
- **Framework:** Python [FastAPI](https://fastapi.tiangolo.com/) (located in `/backend`)
- **Deployment:** [Vercel](https://vercel.com/) (Service routing configured via `vercel.json`)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn or pnpm
- Python 3.10+ (optional, for backend service)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/loharbijoy2005-a11y/School.git
   cd School
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Run the Next.js development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the web app.

4. **(Optional) Run backend API service:**
   ```bash
   cd backend
   python -m venv venv
   # On Windows:
   .\venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate

   pip install -r requirements.txt
   uvicorn main:app --reload
   ```

---

## 📂 Project Structure

```text
School/
├── app/                  # Next.js App Router (pages & global styles)
│   ├── layout.tsx        # Base root layout & metadata
│   ├── page.tsx          # Main homepage component & state orchestration
│   └── globals.css       # Custom CSS & Tailwind imports
├── components/           # Reusable UI components
│   ├── Navbar.tsx        # Top navigation & language switcher
│   ├── HeroNoticeOverlay.tsx # Hero banner slider & notice board
│   ├── AboutDesk.tsx     # Headmaster message & faculty roster
│   ├── AdminDashboard.tsx# Administrative control panel
│   ├── SchemesCorner.tsx # WB Government scholarship cards
│   ├── ContactSection.tsx# Contact form & location map
│   └── ...
├── backend/              # Python FastAPI service
│   ├── main.py           # FastAPI entry point & API endpoints
│   └── requirements.txt  # Python packages
├── contexts/             # React context providers (LanguageContext)
├── types/                # TypeScript interfaces & types
├── public/               # Static assets & images
├── vercel.json           # Vercel deployment configuration
└── package.json          # Node dependencies & build scripts
```

---

## ☁️ Deployment

This application is configured for deployment on **Vercel**.

To deploy manually via Vercel CLI:
```bash
npm install -g vercel
vercel
```

---

## 📄 License

This project is maintained for **Mahishadal Raj High School (H.S.)**. All rights reserved.
