const path = '/api/memo';

const memoApi = {
    async getNumber() {
        const response = await fetch(path);

        if (response.ok) {
            return response.json();
        }
        return { message: 'memory error' };
    },

    async postNumber(number) {
        const response = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(number),
        });
        if (response.ok) {
            return;
        }
        return response.json();
    },
}

export default memoApi;