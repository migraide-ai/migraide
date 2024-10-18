async function signin(email, password) {
    try {
      const response = await axios.post('/signin', { email_address: email, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }