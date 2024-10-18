async function logout() {
    try {
        const response = await axios.get('/logout');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}