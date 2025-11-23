# CampusTrack – Faculty Finder

A comprehensive React-based web application that helps students locate faculty members, check real-time availability, and explore department-wise faculty information.

## 🚀 Features

### 👨‍🎓 Student Features
- Student login (dummy authentication)
- Search faculty across all departments
- View department-wise faculty list
- View faculty details:
  - Name, department, cabin number
  - Email
  - Phone
  - Today's timetable
  - Real-time status
  - Live location
- Weekly timetable view
- Real-time status updates

### 👨‍🏫 Teacher Features
- Teacher login (dummy authentication)
- Update status (In Cabin / In Class / Unavailable / On Leave)
- Update current location
- Update ongoing class/meeting
- View personal timetable
- Manage profile

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| Icons | Lucide React |
| UI Components | shadcn/ui |
| Requests | Axios (future integration) |

## 📁 Project Structure
src/
├─ assets/
│ └─ images/
├─ components/
│ ├─ ui/
│ │ ├─ Button.jsx
│ │ ├─ Input.jsx
│ │ ├─ Card.jsx
│ │ └─ Toast.jsx
│ ├─ Navbar.jsx
│ ├─ FacultyCard.jsx
│ ├─ DepartmentCard.jsx
│ ├─ SearchBar.jsx
│ ├─ StatusBadge.jsx
│ └─ TimetableTable.jsx
├─ contexts/
│ └─ AuthContext.jsx
├─ data/
│ └─ facultyData.js
├─ pages/
│ ├─ Home.jsx
│ ├─ Login.jsx
│ ├─ StudentDashboard.jsx
│ ├─ SearchFaculty.jsx
│ ├─ FacultyDetails.jsx
│ ├─ DepartmentList.jsx
│ ├─ DepartmentFaculty.jsx
│ ├─ Settings.jsx
│ ├─ TeacherLogin.jsx
│ ├─ TeacherDashboard.jsx
│ ├─ UpdateStatus.jsx
│ ├─ TeacherProfile.jsx
│ └─ Timetable.jsx
├─ routes/
│ └─ AppRoutes.jsx
├─ lib/
│ └─ utils.js
├─ App.jsx
├─ main.jsx
└─ index.css

text

## ⚙️ Installation

```bash
git clone <repository-url>
cd campus-track-faculty-finder
npm install
npm run dev
Visit: http://localhost:5173

👨‍🎓 Student Login
Go to /login

Enter any roll number + any password

👨‍🏫 Teacher Login
Go to /teacher/login

Enter any email + any password

🎨 Color Palette
Element	Color
Primary	#3B82F6
Secondary	#6366F1
Accent	#0EA5E9
Background	#F1F5F9
Text	#334155
🔮 Future Enhancements
Real backend (Node.js / Firebase)

Real-time WebSocket updates

Notifications

Appointment booking

Admin dashboard

Mobile app version

📜 License
For educational use.

text

This formatted README.md includes proper code blocks, tables for tech stack and color palette, organized sections with emojis, and clean project structure visualization. It's now ready to be used on GitHub!
