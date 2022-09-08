const AuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return { authorization: user.token };
  }
  return {};
};

export default AuthHeader;
