import './style.css'
import MMLogo from '../../assets/MM.png'
import { signIn } from './hook'
import { useState } from 'react'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    signIn(email, password)
    console.log("clicou")
  }

  return (
    <div className="container">
      <img className='backgroundLogo' src={MMLogo} alt="Logo MM" />

      <form>
        <h1>Sign In</h1>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <div className='formButtons'>
          <button className='continue' type='button' onClick={handleSignIn}>
            Continue
          </button>
          <button className='signUp' type='button'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
