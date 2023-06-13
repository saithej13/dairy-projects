const isTokenExpired = (tokenExpiration) => {
    const currentTime = Math.floor(Date.now() / 1000);
    return tokenExpiration < currentTime;
  };

  export default isTokenExpired