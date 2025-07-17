import { useState } from 'react'
import '../App.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');
    setSuccessMessage('');

    if (email.trim() === '') {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Invalid email format.');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      isValid = false;
    }

    if (isValid) {
      setSuccessMessage('Login successful!');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

  };

  console.log('Email:', email);
  console.log('Password:', password);

  return (
    <>

      <div className="container">
        <h1>Login Form</h1>

        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              required
              aria-describedby="email-error"
            />
            <div id="email-error" className="error-message" aria-live="polite">
              {emailError}
            </div>
          </div>

          <div>
            <label htmlFor="password">Password * (min 6 chars)</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              minLength="6"
              required
              aria-describedby="password-error"
            />
            <div id="password-error" className="error-message" aria-live="polite">
              {passwordError}
            </div>
          </div>

          <button type="submit">Submit</button>
          {successMessage && (
            <div className="success-message" role="alert" aria-live="polite">
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Login;



