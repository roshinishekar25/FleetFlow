import { useState } from "react";

import axios from "axios";

import "./Auth.css";

function Signup() {

  const [full_name, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "http://localhost:5000/api/auth/signup",

        {

          full_name,

          email,

          password

        }

      );


      console.log(response.data);

      alert("Signup Successful");


      setFullName("");

      setEmail("");

      setPassword("");

    }

    catch (error) {

      console.log(error);

      alert("Signup Failed");

    }

  };


  return (

    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={handleSignup}
      >

        <h2>Create Account</h2>


        <input
          type="text"
          placeholder="Full Name"
          value={full_name}
          onChange={(e) =>
            setFullName(e.target.value)
          }
          required
        />


        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />


        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />


        <button type="submit">

          Signup

        </button>

      </form>

    </div>

  );

}

export default Signup;