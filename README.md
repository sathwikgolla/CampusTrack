# CampusTrack - Faculty Finder

A comprehensive React-based web application for finding and connecting with faculty members across campus departments.

## Features

### For Students
- **Student Authentication**: Login with roll number and password
- **Faculty Search**: Global search across all departments with fuzzy matching
- **Department Browsing**: Browse faculty by department (CSE, CSM, ECE)
- **Faculty Details**: View comprehensive faculty information including:
  - Name, Department, Cabin number
  - Email and contact information
  - Today's timetable
  - Current status (Teaching/Free/In Cabin/On Leave/Unavailable)
  - Current location
- **Real-time Status**: See current availability of faculty members
- **Timetable View**: Access weekly schedules for all faculty

### For Teachers
- **Teacher Authentication**: Login with email and password
- **Status Management**: Update current status:
  - "In Cabin"
  - "In Class"
  - "On Leave"
  - "Unavailable"
- **Location Updates**: Update current location (room number/block)
- **Class Management**: Update current class or meeting information
- **Profile Management**: View and manage teacher profile

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **Axios** - HTTP client (for future API integration)
- **shadcn/UI** - Reusable component library

## Project Structure

```
src/
 ├─ assets/
 │   ├─ images/
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
```

## Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## Usage

### Student Login
- Navigate to `/login`
- Enter any roll number and password (dummy authentication)
- Access the student dashboard

### Teacher Login
- Navigate to `/teacher/login`
- Enter any email and password (dummy authentication)
- Access the teacher dashboard

### Features Overview

#### Student Features
- **Dashboard**: View all departments, search faculty, and see quick stats
- **Search**: Global search across all faculty members
- **Departments**: Browse faculty by department with filtering options
- **Faculty Details**: Comprehensive view of faculty information and timetable
- **Settings**: Manage profile settings

#### Teacher Features
- **Dashboard**: Overview of current status and quick actions
- **Update Status**: Change availability, location, and current class
- **Profile**: View and manage teacher profile
- **Timetable**: View personal timetable

## Color Theme

The application uses a clean, professional color palette:

- **Primary**: `#3B82F6` (blue-500)
- **Secondary**: `#6366F1` (indigo-500)
- **Accent**: `#0EA5E9` (sky-500)
- **Background**: `#F1F5F9` (slate-100)
- **Text**: `#334155` (slate-700)

## Dummy Data

The application includes realistic dummy data for:
- **30 Faculty Members** (10 per department)
- **3 Departments**: CSE, CSM, ECE
- **Weekly Timetables** for each faculty member
- **Current Status** and location information

## API Integration

Currently, the application uses dummy data and local state management. For production, you'll need to:

1. Replace dummy authentication with real API calls
2. Connect to backend API for faculty data
3. Implement real-time status updates
4. Add proper error handling and loading states

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Development Notes

- All authentication is currently dummy-based (accepts any credentials)
- Faculty data is stored in `src/data/facultyData.js`
- Status updates are stored in local state (not persisted)
- Image placeholders use randomuser.me API
- Toast notifications are used for user feedback

## Future Enhancements

- [ ] Real backend API integration
- [ ] Persistent status updates
- [ ] Real-time notifications
- [ ] Advanced filtering options
- [ ] Faculty availability calendar
- [ ] Appointment booking system
- [ ] Email notifications
- [ ] Mobile app version

## License

This project is created for educational purposes.

## Support

For issues or questions, please refer to the project documentation or contact the development team.

---

**Built with ❤️ using React + Vite + Tailwind CSS**

