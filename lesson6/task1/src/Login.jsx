import React from 'react';

function Login({onLogin}) {
  return (
    <button className="login btn" onClick={onLogin}>
      Login
    </button>
  );
}

export default Login;