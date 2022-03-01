export const headers = () => {
    // Generate a unique token for storing your bookshelf data on the backend server.
    let token = localStorage.token
    if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)
    return {
        'Accept': 'application/json',
        'Authorization': token, 
        'Content-Type': 'application/json'
    };
  };
  