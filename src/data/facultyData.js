// Dummy faculty data for CampusTrack

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timeSlots = [
  { slot: '09:00 - 10:00', room: '301' },
  { slot: '10:00 - 11:00', room: '302' },
  { slot: '11:00 - 12:00', room: '303' },
  { slot: '12:00 - 13:00', room: '304' },
  { slot: '14:00 - 15:00', room: '305' },
  { slot: '15:00 - 16:00', room: '306' },
  { slot: '16:00 - 17:00', room: '307' },
];

const generateTimetable = (facultyId) => {
  const timetable = [];
  days.forEach((day) => {
    const slots = Math.floor(Math.random() * 3) + 2; // 2-4 slots per day
    const usedSlots = new Set();
    
    for (let i = 0; i < slots; i++) {
      const slotIndex = Math.floor(Math.random() * timeSlots.length);
      if (!usedSlots.has(slotIndex)) {
        usedSlots.add(slotIndex);
        const timeSlot = timeSlots[slotIndex];
        const isClass = Math.random() > 0.3; // 70% chance of having a class
        timetable.push({
          day,
          slot: timeSlot.slot,
          class: isClass ? `${facultyId.substring(0, 3)}-A` : 'Free',
          room: isClass ? timeSlot.room : '-',
        });
      }
    }
  });
  return timetable.sort((a, b) => {
    const dayOrder = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5 };
    return dayOrder[a.day] - dayOrder[b.day];
  });
};

const statuses = ['Teaching', 'In Cabin', 'Free', 'On Leave', 'Unavailable'];
const locations = ['Room 302', 'Room 301', 'Room 303', 'Block A - Room 204', 'Block B - Room 105', 'Block C - Room 306'];

const cseFaculty = [
  {
    id: 'FAC101',
    name: 'Dr. Anjali Rao',
    department: 'CSE',
    cabin: 'Block A - Room 204',
    email: 'anjalirao@college.edu',
    phone: '9876543210',
    photo: 'https://randomuser.me/api/portraits/women/1.jpg',
    currentStatus: 'Teaching',
    currentLocation: 'Room 302',
  },
  {
    id: 'FAC102',
    name: 'Prof. Rajesh Kumar',
    department: 'CSE',
    cabin: 'Block A - Room 205',
    email: 'rajeshkumar@college.edu',
    phone: '9876543211',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    currentStatus: 'In Cabin',
    currentLocation: 'Block A - Room 205',
  },
  {
    id: 'FAC103',
    name: 'Dr. Priya Sharma',
    department: 'CSE',
    cabin: 'Block A - Room 206',
    email: 'priyasharma@college.edu',
    phone: '9876543212',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    currentStatus: 'Free',
    currentLocation: 'Block A - Room 206',
  },
  {
    id: 'FAC104',
    name: 'Prof. Amit Patel',
    department: 'CSE',
    cabin: 'Block A - Room 207',
    email: 'amitpatel@college.edu',
    phone: '9876543213',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
    currentStatus: 'Teaching',
    currentLocation: 'Room 301',
  },
  {
    id: 'FAC105',
    name: 'Dr. Sneha Reddy',
    department: 'CSE',
    cabin: 'Block A - Room 208',
    email: 'snehareddy@college.edu',
    phone: '9876543214',
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',
    currentStatus: 'In Cabin',
    currentLocation: 'Block A - Room 208',
  },
  {
    id: 'FAC106',
    name: 'Prof. Vikram Singh',
    department: 'CSE',
    cabin: 'Block A - Room 209',
    email: 'vikramsingh@college.edu',
    phone: '9876543215',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    currentStatus: 'Free',
    currentLocation: 'Block A - Room 209',
  },
  {
    id: 'FAC107',
    name: 'Dr. Meera Nair',
    department: 'CSE',
    cabin: 'Block A - Room 210',
    email: 'meeranair@college.edu',
    phone: '9876543216',
    photo: 'https://randomuser.me/api/portraits/women/4.jpg',
    currentStatus: 'Teaching',
    currentLocation: 'Room 303',
  },
  {
    id: 'FAC108',
    name: 'Prof. Arjun Desai',
    department: 'CSE',
    cabin: 'Block A - Room 211',
    email: 'arjundesai@college.edu',
    phone: '9876543217',
    photo: 'https://randomuser.me/api/portraits/men/4.jpg',
    currentStatus: 'On Leave',
    currentLocation: '-',
  },
  {
    id: 'FAC109',
    name: 'Dr. Kavita Joshi',
    department: 'CSE',
    cabin: 'Block A - Room 212',
    email: 'kavitajoshi@college.edu',
    phone: '9876543218',
    photo: 'https://randomuser.me/api/portraits/women/5.jpg',
    currentStatus: 'In Cabin',
    currentLocation: 'Block A - Room 212',
  },
  {
    id: 'FAC110',
    name: 'Prof. Sameer Khan',
    department: 'CSE',
    cabin: 'Block A - Room 213',
    email: 'sameerkhan@college.edu',
    phone: '9876543219',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg',
    currentStatus: 'Free',
    currentLocation: 'Block A - Room 213',
  },
];

const csmFaculty = [
  {
    id: 'FAC201',
    name: 'Dr. Neha Gupta',
    department: 'CSM',
    cabin: 'Block B - Room 101',
    email: 'nehagupta@college.edu',
    phone: '9876543220',
    photo: 'https://randomuser.me/api/portraits/women/6.jpg',
    currentStatus: 'Teaching',
    currentLocation: 'Room 304',
  },
  {
    id: 'FAC202',
    name: 'Prof. Rohit Verma',
    department: 'CSM',
    cabin: 'Block B - Room 102',
    email: 'rohitverma@college.edu',
    phone: '9876543221',
    photo: 'https://randomuser.me/api/portraits/men/6.jpg',
    currentStatus: 'In Cabin',
    currentLocation: 'Block B - Room 102',
  },
  {
    id: 'FAC203',
    name: 'Dr. Ananya Iyer',
    department: 'CSM',
    cabin: 'Block B - Room 103',
    email: 'ananyaiyer@college.edu',
    phone: '9876543222',
    photo: 'https://randomuser.me/api/portraits/women/7.jpg',
    currentStatus: 'Free',
    currentLocation: 'Block B - Room 103',
  },
  {
    id: 'FAC204',
    name: 'Prof. Karan Malhotra',
    department: 'CSM',
    cabin: 'Block B - Room 104',
    email: 'karanmalhotra@college.edu',
    phone: '9876543223',
    photo: 'https://randomuser.me/api/portraits/men/7.jpg',
    currentStatus: 'Teaching',
    currentLocation: 'Room 305',
  },
  {
    id: 'FAC205',
    name: 'Dr. Divya Menon',
    department: 'CSM',
    cabin: 'Block B - Room 105',
    email: 'divyamenon@college.edu',
    phone: '9876543224',
    photo: 'https://randomuser.me/api/portraits/women/8.jpg',
    currentStatus: 'In Cabin',
    currentLocation: 'Block B - Room 105',
  },
  {
    id: 'FAC206',
    name: 'Prof. Manish Agarwal',
    department: 'CSM',
    cabin: 'Block B - Room 106',
    email: 'manishagarwal@college.edu',
    phone: '9876543225',
    photo: 'https://randomuser.me/api/portraits/men/8.jpg',
    currentStatus: 'Free',
    currentLocation: 'Block B - Room 106',
  },
  {
    id: 'FAC207',
    name: 'Dr. Radhika Pillai',
    department: 'CSM',
    cabin: 'Block B - Room 107',
    email: 'radhikapillai@college.edu',
    phone: '9876543226',
    photo: 'https://randomuser.me/api/portraits/women/9.jpg',
    currentStatus: 'Teaching',
    currentLocation: 'Room 306',
  },
  {
    id: 'FAC208',
    name: 'Prof. Aditya Shah',
    department: 'CSM',
    cabin: 'Block B - Room 108',
    email: 'adityashah@college.edu',
    phone: '9876543227',
    photo: 'https://randomuser.me/api/portraits/men/9.jpg',
    currentStatus: 'Unavailable',
    currentLocation: '-',
  },
  {
    id: 'FAC209',
    name: 'Dr. Shruti Kapoor',
    department: 'CSM',
    cabin: 'Block B - Room 109',
    email: 'shrutikapoor@college.edu',
    phone: '9876543228',
    photo: 'https://randomuser.me/api/portraits/women/10.jpg',
    currentStatus: 'In Cabin',
    currentLocation: 'Block B - Room 109',
  },
  {
    id: 'FAC210',
    name: 'Prof. Nikhil Mehta',
    department: 'CSM',
    cabin: 'Block B - Room 110',
    email: 'nikhilmehta@college.edu',
    phone: '9876543229',
    photo: 'https://randomuser.me/api/portraits/men/10.jpg',
    currentStatus: 'Free',
    currentLocation: 'Block B - Room 110',
  },
];

const eceFaculty = [
  {
    id: 'FAC301',
    name: 'Dr. Pooja Chaturvedi',
    department: 'ECE',
    cabin: 'Block C - Room 201',
    email: 'poojachaturvedi@college.edu',
    phone: '9876543230',
    photo: 'https://randomuser.me/api/portraits/women/11.jpg',
    currentStatus: 'Teaching',
    currentLocation: 'Room 307',
  },
  {
    id: 'FAC302',
    name: 'Prof. Ravi Thakur',
    department: 'ECE',
    cabin: 'Block C - Room 202',
    email: 'ravithakur@college.edu',
    phone: '9876543231',
    photo: 'https://randomuser.me/api/portraits/men/11.jpg',
    currentStatus: 'In Cabin',
    currentLocation: 'Block C - Room 202',
  },
  {
    id: 'FAC303',
    name: 'Dr. Swati Banerjee',
    department: 'ECE',
    cabin: 'Block C - Room 203',
    email: 'swatibanerjee@college.edu',
    phone: '9876543232',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    currentStatus: 'Free',
    currentLocation: 'Block C - Room 203',
  },
  {
    id: 'FAC304',
    name: 'Prof. Deepak Jain',
    department: 'ECE',
    cabin: 'Block C - Room 204',
    email: 'deepakjain@college.edu',
    phone: '9876543233',
    photo: 'https://randomuser.me/api/portraits/men/12.jpg',
    currentStatus: 'Teaching',
    currentLocation: 'Room 301',
  },
  {
    id: 'FAC305',
    name: 'Dr. Tanvi Deshmukh',
    department: 'ECE',
    cabin: 'Block C - Room 205',
    email: 'tanvideshmukh@college.edu',
    phone: '9876543234',
    photo: 'https://randomuser.me/api/portraits/women/13.jpg',
    currentStatus: 'In Cabin',
    currentLocation: 'Block C - Room 205',
  },
  {
    id: 'FAC306',
    name: 'Prof. Harsh Tiwari',
    department: 'ECE',
    cabin: 'Block C - Room 206',
    email: 'harshtiwari@college.edu',
    phone: '9876543235',
    photo: 'https://randomuser.me/api/portraits/men/13.jpg',
    currentStatus: 'Free',
    currentLocation: 'Block C - Room 206',
  },
  {
    id: 'FAC307',
    name: 'Dr. Ishita Rana',
    department: 'ECE',
    cabin: 'Block C - Room 207',
    email: 'ishitarana@college.edu',
    phone: '9876543236',
    photo: 'https://randomuser.me/api/portraits/women/14.jpg',
    currentStatus: 'Teaching',
    currentLocation: 'Room 302',
  },
  {
    id: 'FAC308',
    name: 'Prof. Yash Bansal',
    department: 'ECE',
    cabin: 'Block C - Room 208',
    email: 'yashbansal@college.edu',
    phone: '9876543237',
    photo: 'https://randomuser.me/api/portraits/men/14.jpg',
    currentStatus: 'On Leave',
    currentLocation: '-',
  },
  {
    id: 'FAC309',
    name: 'Dr. Aishwarya Sood',
    department: 'ECE',
    cabin: 'Block C - Room 209',
    email: 'aishwaryasood@college.edu',
    phone: '9876543238',
    photo: 'https://randomuser.me/api/portraits/women/15.jpg',
    currentStatus: 'In Cabin',
    currentLocation: 'Block C - Room 209',
  },
  {
    id: 'FAC310',
    name: 'Prof. Varun Chopra',
    department: 'ECE',
    cabin: 'Block C - Room 210',
    email: 'varunchopra@college.edu',
    phone: '9876543239',
    photo: 'https://randomuser.me/api/portraits/men/15.jpg',
    currentStatus: 'Free',
    currentLocation: 'Block C - Room 210',
  },
];

// Add timetables to all faculty
const allFaculty = [...cseFaculty, ...csmFaculty, ...eceFaculty].map((faculty) => ({
  ...faculty,
  timetable: generateTimetable(faculty.id),
}));

export const facultyData = allFaculty;

export const getFacultyByDepartment = (department) => {
  return allFaculty.filter((f) => f.department === department);
};

export const getFacultyById = (id) => {
  return allFaculty.find((f) => f.id === id);
};

export const searchFaculty = (query) => {
  const lowerQuery = query.toLowerCase();
  return allFaculty.filter(
    (f) =>
      f.name.toLowerCase().includes(lowerQuery) ||
      f.department.toLowerCase().includes(lowerQuery) ||
      f.email.toLowerCase().includes(lowerQuery)
  );
};

export const departments = [
  { id: 'CSE', name: 'Computer Science Engineering', color: 'blue' },
  { id: 'CSM', name: 'Computer Science & Mathematics', color: 'indigo' },
  { id: 'ECE', name: 'Electronics & Communication Engineering', color: 'sky' },
];

