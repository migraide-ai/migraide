async function forgotPassword(email) {
    try {
        const response = await axios.post('/forgot_password', { email });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}