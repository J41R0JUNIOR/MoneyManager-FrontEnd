import './style.css'

function SignIn() {
  return (
    <div className='container'>
      <form>
        <h1>Sign In</h1>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />

        <button className='continue' type='button'>Continue</button>
        <button className='signUp' type='button'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignIn
