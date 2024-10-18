async function resetPassword(token, newPassword) {
    try {
      const response = await axios.post(`/reset_password/${token}`, { Password: newPassword });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }