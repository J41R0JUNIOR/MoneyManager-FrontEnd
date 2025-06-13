import './style.css';
import { signIn } from './hook';
import { useState } from 'react';
import Background from './components/background';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    signIn(email, password);
    console.log('clicou');
  };

  return (
    <>
      <Background />

      <div className="container">
        <form >
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <div className="formButtons">
            <button className="continue" type="button" onClick={handleSignIn}>
              Continue
            </button>
          </div>

          <div>
            Don't have an account?
            <a href=""> Sign Up</a>
          </div>
        </form>
      </div>

      
    </>
  );
}

export default SignIn;
