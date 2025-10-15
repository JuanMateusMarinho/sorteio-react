// This is a placeholder for your user service.
// In a real application, this would make an API call to your backend.

export const createUser = async (user) => {
  console.log('Creating user:', user);
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('User created successfully (simulated).');
      resolve({ status: 'success', data: user });
    }, 500);
  });
};
