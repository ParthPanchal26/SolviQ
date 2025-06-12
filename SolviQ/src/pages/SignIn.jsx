import { useState } from "react";
import { Link } from "react-router-dom";



export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt", { name, password });
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <div
        className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-10"
         style={{
          backgroundImage: `url("/login.jpeg")`,
            backgroundSize: "cover",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">SolviQ</h1>
        <p className="text-lg max-w-md text-center">
          Unlock your learning journey with our personalized education platform.
          Learn anything, anytime.
        </p>
      </div>

      <div
        className="w-1/2 flex flex-col items-center justify-center bg-gray-100"
      >
        <h1 className="text-4xl font-bold mb-6">Login</h1>
        <form className="w-80 space-y-4" onSubmit={handleSubmit}>
         <div className="flex space-x-5 justify-center items-center mb-4">
            
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex space-x-5 justify-center items-center mb-4">
         
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
          <div className="text-sm text-center">
             <Link style= {{textDecoration:'none'}}to="/Login"><span> Sign up here</span></Link>
            <Link to="/Signup" className="text-blue-500 hover:underline">
              do not have account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
