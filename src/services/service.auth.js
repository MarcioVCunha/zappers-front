const getConfig = () => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  };

  return config;
};

export default getConfig;