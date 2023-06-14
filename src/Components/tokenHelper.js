const isTokenExpired = (tokenExpiration) => {
    const currentTime = Math.floor(Date.now() / 1000);
    return tokenExpiration < currentTime;
  };
// 1. as of now we dont need this tokenexpiration it should be in the backend api itself
// 2. just we need to catch the error of token expired and show to the user 
// 3. and get new updated token by providing old token and replace with existing token 
  export default isTokenExpired