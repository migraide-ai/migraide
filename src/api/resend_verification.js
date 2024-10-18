async function resendVerification(email) {
    try {
      const response = await axios.post('/resend_verification', { email });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }