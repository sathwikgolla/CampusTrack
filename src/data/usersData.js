// Store registered users in localStorage
// This simulates a database for the demo

export const getRegisteredUsers = () => {
  const stored = localStorage.getItem('campusTrack_registeredUsers');
  return stored ? JSON.parse(stored) : [];
};

export const saveRegisteredUser = (userData) => {
  const users = getRegisteredUsers();
  
  // Check for duplicate email
  if (userData.email) {
    const existingEmail = users.find((u) => u.email && u.email.toLowerCase() === userData.email.toLowerCase());
    if (existingEmail) {
      return { success: false, message: 'This email is already registered. Please use a different email or log in.' };
    }
  }
  
  // Check for duplicate phone number
  if (userData.phone) {
    const existingPhone = users.find((u) => u.phone && u.phone === userData.phone);
    if (existingPhone) {
      return { success: false, message: 'This phone number is already registered. Please use a different phone number.' };
    }
  }
  
  // Check for duplicate roll number (for students)
  if (userData.rollNumber) {
    const existingRollNumber = users.find((u) => u.rollNumber && u.rollNumber === userData.rollNumber);
    if (existingRollNumber) {
      return { success: false, message: 'This roll number is already registered. Please use a different roll number or log in.' };
    }
  }
  
  // Check for duplicate employee ID (for teachers)
  if (userData.employeeId) {
    const existingEmployeeId = users.find((u) => u.employeeId && u.employeeId === userData.employeeId);
    if (existingEmployeeId) {
      return { success: false, message: 'This employee ID is already registered. Please use a different employee ID or log in.' };
    }
  }

  const newUser = {
    ...userData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  localStorage.setItem('campusTrack_registeredUsers', JSON.stringify(users));
  return { success: true, message: 'User registered successfully' };
};

export const authenticateStudent = (rollNumber, password) => {
  const users = getRegisteredUsers();
  const user = users.find(
    (u) => u.rollNumber === rollNumber && u.userType === 'student'
  );

  if (!user) {
    return { success: false, message: 'Roll number not found. Please register first.' };
  }

  if (user.password !== password) {
    return { success: false, message: 'Incorrect password' };
  }

  return { success: true, user };
};

export const authenticateTeacher = (email, password) => {
  const users = getRegisteredUsers();
  const user = users.find(
    (u) => u.email && u.email.toLowerCase() === email.toLowerCase() && u.userType === 'teacher'
  );

  if (!user) {
    return { success: false, message: 'Email not found. This email is not registered. Please register first or check your email address.' };
  }

  if (user.password !== password) {
    return { success: false, message: 'Incorrect password. Please check your password and try again.' };
  }

  return { success: true, user };
};

