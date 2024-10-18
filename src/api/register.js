async function register(formData) {
    try {
        const response = await axios.post('/register', formData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}