const API_URL = 'http://localhost:3000'; // Adjust if your backend URL is different

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/list-user`);
    if (!response.ok) {
      throw new Error('Failed to fetch users.');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const createUser = async (user) => {
  try {
    const response = await fetch(`${API_URL}/create-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error('Failed to create user.');
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const deleteUser = async (email) => {
  try {
    const response = await fetch(`${API_URL}/delete-user/${email}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete user.');
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
