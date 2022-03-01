export const headers = () => {
    return {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  };
  