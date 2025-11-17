# Quick Start Guide - CampusTrack

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Access the Application**
   - Open your browser and go to: `http://localhost:5173`

## Testing the Application

### Student Login
1. Click "Student Login" or navigate to `/login`
2. Enter any roll number (e.g., "2024CS001")
3. Enter any password (e.g., "password123")
4. Click "Login"
5. You'll be redirected to the student dashboard

### Teacher Login
1. Click "Teacher Login" or navigate to `/teacher/login`
2. Enter any email (e.g., "teacher@college.edu")
3. Enter any password (e.g., "password123")
4. Click "Login"
5. You'll be redirected to the teacher dashboard

## Key Features to Test

### As a Student:
- ✅ Search faculty by name, department, or email
- ✅ Browse departments (CSE, CSM, ECE)
- ✅ View faculty details with timetable
- ✅ Filter faculty by status (Available, Teaching, In Cabin)
- ✅ View weekly timetables

### As a Teacher:
- ✅ Update current status (In Cabin, In Class, On Leave, Unavailable)
- ✅ Update location and current class
- ✅ View personal dashboard
- ✅ Access profile settings

## Project Structure Overview

```
faculty-finder/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   ├── routes/          # Routing configuration
│   ├── contexts/        # React contexts (Auth)
│   ├── data/            # Dummy data
│   ├── lib/             # Utility functions
│   └── assets/          # Static assets
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Notes

- All authentication is currently dummy-based (any credentials work)
- Faculty data is stored in `src/data/facultyData.js`
- Status updates are stored in local state (not persisted across page refreshes)
- Images use placeholder URLs from randomuser.me

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Module Not Found Errors
Run `npm install` again to ensure all dependencies are installed.

### Build Errors
Clear the `node_modules` folder and `package-lock.json`, then run `npm install` again.

---

**Happy Coding! 🚀**

