const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiId = '7bITS9pnop0z4L5ssJm1';

const getBooksAPI = async () => {
  const response = await fetch(`${baseUrl}/apps/${apiId}/books`);
  return response.json();
};

const addBooksAPI = async (data) => {
  const response = await fetch(`${baseUrl}/apps/${apiId}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};

export { getBooksAPI, addBooksAPI };
