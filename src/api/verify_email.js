async function verifyEmail(token) {
    try {
        const response = await axios.get(`/verify_email/${token}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}