const login = async (email, password) => {
  const jsonBody = ({
    email,
    password,
  });

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(jsonBody, null, 2));

  await new Promise((resolve) => setTimeout(resolve, 500));

  return ({
    status: {
      code: 200,
      message: 'Logged in sucessfully.',
    },
    data: {
      id: 2,
      email,
      name: 'Swagger',
      role: 'user',
    },
  });
};

const logout = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return ({
    status: 200,
    message: 'logged out successfully',
  });
};

const signup = async (name, email, password) => {
  const jsonBody = ({
    name,
    email,
    password,
  });

  // eslint-disable-next-line no-console
  console.debug(JSON.stringify(jsonBody, null, 2));
  await new Promise((resolve) => setTimeout(resolve, 500));
  return ({
    status: {
      code: 200,
      message: 'Signed up sucessfully.',
    },
    data: {
      id: 2,
      email,
      name,
      role: 'user',
    },
  });
};

const AuthAPI = {
  login,
  logout,
  signup,
};

export default AuthAPI;
