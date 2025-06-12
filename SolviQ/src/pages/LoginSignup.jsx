import { useState } from "react";
import { Link } from "react-router-dom";


export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Attempt", { name, password });
  };

  return (
    <div className="h-screen w-screen flex">
      <div
        className="w-1/2 text-white flex flex-col justify-center items-center p-10 bg-cover bg-center"
        style={{
          backgroundImage: `url("/signup.avif")`,
        }}
      >
        <h1 className="text-5xl font-bold mb-4 text-purple-700">
          Welcome to SolviQ
        </h1>
        <p className="text-xl max-w-md text-center p-4 rounded text-purple-500">
          Your gateway to quality learning. Join now or log in to continue your journey.
        </p>
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Signup</h1>
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
              type="email"
              placeholder="Email"
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
            Register
          </button>
          <div className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-blue-500 hover:underline">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
