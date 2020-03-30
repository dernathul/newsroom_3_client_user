import React from 'react';
import auth from '../modules/auth'

const LoginForm = () => {
  return (
    <div>
      <form>
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign in </button>
      </form>
    </div>
  )
}

export default LoginForm