import { useState } from 'react'
import '../App.css'

function Register() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [submittedNames, setSubmittedNames] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.name, "name")
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  const validateForm = () => {
    const { name, email, password } = formData;
    const newErrors = {};
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format.';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required.';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setSuccessMessage('Form submitted successfully!');
    } else {
      setSuccessMessage('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      setSubmittedNames([...submittedNames, formData.name]);
      setFormData({ name: '', email: '', password: '' });
    }
  };

  const handleDelete = (indexToRemove) => {
    setSubmittedNames(submittedNames.filter((_, i) => i !== indexToRemove));
  };



  console.log('Name:', formData.name);
  console.log('Email:', formData.email);
  console.log('Password:', formData.password);

  return (
    <>
      <div className="container">
        <h1>Register Form</h1>

        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              aria-describedby="name-error"
              required
            />
            <div id="name-error" className="error-message" aria-live="polite">
              {errors.name}
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              aria-describedby="email-error"
              required
            />
            <div id="email-error" className="error-message" aria-live="polite">
              {errors.email}
            </div>
          </div>

          <div>
            <label htmlFor="password">Password(min 6 chars)</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              minLength="6"
              value={formData.password}
              onChange={handleChange}
              aria-describedby="password-error"
              required
            />
            <div id="password-error" className="error-message" aria-live="polite">
              {errors.password}
            </div>
          </div>

          <button type="submit">Submit</button>

          {successMessage && (
            <div
              id="success-message"
              className="success-message"
              role="alert"
              aria-live="polite"
            >
              {successMessage}
            </div>
          )}
        </form>

        {submittedNames.length > 0 && (
          <div className="submitted-names">
            <h2>Submitted Names:</h2>
            <ul>
              {submittedNames.map((name, index) => (
                <li key={index}>
                  {name}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Register;