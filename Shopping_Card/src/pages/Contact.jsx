// import { useState } from 'react'
// import './Contact.css'
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";
// function Contact() {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });


//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     axios.post("http://localhost:7000/register", form)
//       .then((res) => {
//         console.log(res);

//       })
//       .catch((err) => {
//         console.log(err);
//       });
//       navigate("/order")

//        alert(isLogin ? "Login Successful!" : "Registration Successful!");
 
//     setForm({ name: "", email: "", password: "" });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:7000/login", form)
//       .then((res) => {
//         console.log(res);
//         alert("Login Successful!");
//         navigate("/")

//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2 className="auth-title">{isLogin ? "Login" : "Register"}</h2>

//         <form className="auth-form" onSubmit={isLogin ? handleLogin : handleSubmit}>
//           {!isLogin && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={handleChange}
//               className="auth-input"
//             />
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             className="auth-input"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             className="auth-input"
//           />

//           <button className="auth-button" type="submit"  onClick={()=>{useNavigate("/order")}}>
//             {isLogin ? "Login" : "Register"}
//           </button>
//         </form>

//         <p className="auth-switch">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}
//           <span onClick={() => setIsLogin(!isLogin)} className="auth-link">
//             {isLogin ? " Register" : " Login"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }
// export default Contact;


import { useState } from 'react'
import './Contact.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    //Duplicate email register not accepted

    const existingUser = JSON.parse(localStorage.getItem("user"));

if (existingUser && existingUser.email === form.email) {
  alert("Email already registered!");
  return;
}
    // Empty validation
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all details");
      return;
    }
    //Email Validation
    const emailPattern = /^[a-z0-9._%+-]+@gmail\.com$/;

    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid email address");
      return;
    }

    //Password Validation

    const passwordPattern = /^[0-9]{6}$/;

    if (!passwordPattern.test(form.password)) {
      alert("Password must be exactly 6 characters numbers only)");
      return;
    }


    axios.post("http://localhost:7000/user-register", form)
      .then((res) => {
        console.log(res);

        localStorage.setItem("user", JSON.stringify(form));

      })
      .catch((err) => {
        console.log(err);
      });

      alert("Registration Successful!");
         navigate("/Order")
 
    setForm({ name: "", email: "", password: "" });
  };
  
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Register</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
    
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="auth-input"
            />
      

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="auth-input"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="auth-input"
          />

          <button className="auth-button" type="submit"  onClick={()=>{useNavigate("/order")}}>
          Submit
          </button>
        </form>

        <p className="auth-switch">
         Already have an account?
          <span className="auth-link">
          </span>
        </p>
      </div>
    </div>
  );
}
export default Contact;
