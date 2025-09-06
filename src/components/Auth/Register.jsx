// import React, { useState } from 'react';
// import './Auth.css';

// const Register = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     // Placeholder for future API call
//     console.log('Register:', form);
//   };

//   return (
//     <div className="auth-wrapper">
//       <form className="auth-form" onSubmit={handleRegister}>
//         <h2 className="auth-title">Sign Up</h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           className="auth-input"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="auth-input"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           className="auth-input"
//           value={form.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" className="btn btn-success auth-btn">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import './Auth.css';


const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleRegister = (e) => {
  e.preventDefault();
  console.log("Register submitted");
  // Later: send form data to backend
};

  return (
    <div className="auth-container row g-0">
      {/* Left Side with Image */}
      <div className="col-md-6 auth-image-section d-none d-md-flex align-items-center justify-content-center">
        <div className="overlay-text text-white text-center px-4">
          <h2>Join <span className="brand">1Stop</span> and grow your skills</h2>
          <p>Sign up to access exclusive courses and career tools.</p>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <form className="auth-form" onSubmit={handleRegister}>
          <h3 className="form-title">Sign Up</h3>
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Sign Up</button>
          <p className="switch-link">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
