📘 CampusTrack – Faculty Finder

A comprehensive React-based web application to help students and teachers easily locate faculty members, check their availability, and manage campus-wide interactions.

🚀 Features
👨‍🎓 For Students

🔐 Student Authentication (Roll number + password)

🔍 Faculty Search with fuzzy matching across all departments

🏫 Browse by Department (CSE, CSM, ECE)

👩‍🏫 Faculty Details View including:

Name, Department, Cabin number

Contact information

Today’s timetable

Real-time status (Teaching / Free / In Cabin / On Leave / Unavailable)

Current location

⏱️ Real-Time Status Monitoring

📅 Weekly Timetable

👨‍🏫 For Teachers

🔐 Teacher Authentication (Email + password)

✅ Status Management

In Cabin

In Class

On Leave

Unavailable

📍 Location Updates (Room/Block)

📝 Class / Meeting Info Update

👤 Profile Management

📅 Personal Timetable View

🛠️ Tech Stack
Category	Technology
UI	React 18
Build Tool	Vite
CSS	Tailwind CSS
Routing	React Router DOM
Icons	Lucide React
Components	shadcn/UI
HTTP	Axios (future use)
📂 Project Structure
src/
 ├─ assets/
 │   └─ images/
 ├─ components/
 │   ├─ ui/
 │   │   ├─ Button.jsx
 │   │   ├─ Input.jsx
 │   │   ├─ Card.jsx
 │   │   └─ Toast.jsx
 │   ├─ Navbar.jsx
 │   ├─ FacultyCard.jsx
 │   ├─ DepartmentCard.jsx
 │   ├─ SearchBar.jsx
 │   ├─ StatusBadge.jsx
 │   └─ TimetableTable.jsx
 ├─ contexts/
 │   └─ AuthContext.jsx
 ├─ data/
 │   └─ facultyData.js
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ Login.jsx
 │   ├─ StudentDashboard.jsx
 │   ├─ SearchFaculty.jsx
 │   ├─ FacultyDetails.jsx
 │   ├─ DepartmentList.jsx
 │   ├─ DepartmentFaculty.jsx
 │   ├─ Settings.jsx
 │   ├─ TeacherLogin.jsx
 │   ├─ TeacherDashboard.jsx
 │   ├─ UpdateStatus.jsx
 │   ├─ TeacherProfile.jsx
 │   ├─ Timetable.jsx
 │   └─ About.jsx
 ├─ routes/
 │   └─ AppRoutes.jsx
 ├─ lib/
 │   └─ utils.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css

⚙️ Installation
# Clone the repo
git clone <your-repo-url>

# Install dependencies
npm install

# Start the dev server
npm run dev


Open http://localhost:5173
 in your browser.

📌 Usage
👨‍🎓 Student Login

Navigate to /login

Enter any roll number + password (dummy auth)

Access Student Dashboard

👨‍🏫 Teacher Login

Navigate to /teacher/login

Enter any email + password (dummy auth)

Access Teacher Dashboard

🎨 Color Theme

Primary: #3B82F6 (blue-500)

Secondary: #6366F1 (indigo-500)

Accent: #0EA5E9 (sky-500)

Background: #F1F5F9 (slate-100)

Text: #334155 (slate-700)

📊 Dummy Data Included

30 Faculty Profiles (10 per department: CSE, CSM, ECE)

Weekly timetables

Real-time status simulation

Random user images via randomuser.me

🔌 API Integration (Future)

To make the app production-ready:

Replace dummy authentication with backend API

Store faculty/status data in database

Add real-time updates (web sockets)

Implement backend error handling

🏗️ Build for Production
npm run build


Output will be inside the dist/ folder.

Preview production build:

npm run preview

🛑 Development Notes

Authentication is dummy-based

Status updates are saved locally (not persistent)

Faculty data stored in src/data/facultyData.js

Uses Toast for notifications

🔮 Future Enhancements

Backend API integration

Persistent teacher status

Real-time notifications

Advanced filters

Availability calendar

Appointment booking system

Email alerts

Mobile App (React Native)

📜 License

This project is created for educational purposes.

❤️ Built With

React + Vite + Tailwind CSS + shadcn/UI
