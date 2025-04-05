import React, { useState } from "react";
import { Mail, Lock, Key, EyeOff, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userType: "normal",
    email: "",
    password: "",
    matricule: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    }
    if (formData.userType === "legal" && !formData.matricule.trim()) {
      newErrors.matricule = "Matricule is required for legal experts.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const url =
          "https://rrn24.techchantier.com/Legal_First_Aid/public/api/login"
        const headers = {
          "Content-Type": "application/json",
          Accept: "application/json",
        };
        const bodyData = {
          email: formData.email,
          password: formData.password,
        };
        const response = await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify(bodyData),
        });
        const result = await response.json();
        if (response.ok) {
          localStorage.setItem("user", JSON.stringify(result.user));
          localStorage.setItem("token", result.token);
          alert("Login successful!");
          navigate("/home");
        } else {
          alert(result.message || "Login failed!");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred during login.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          {/* User Type Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">User Type</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="normal">Normal User</option>
              <option value="legal">Legal Expert</option>
            </select>
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700">
              <Mail className="inline mr-2" size={16} />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700">
              <Lock className="inline mr-2" size={16} />
              Password
            </label>
            <div className="flex items-center border rounded hover:border-black focus-within:ring-2 focus-within:ring-blue-600">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 focus:outline-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-2 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="text-gray-500" size={20} />
                ) : (
                  <Eye className="text-gray-500" size={20} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          {/* Conditional Matricule Field for Legal Experts */}
          {formData.userType === "legal" && (
            <div className="mb-4">
              <label className="block text-gray-700">
                <Key className="inline mr-2" size={16} />
                Matricule Number
              </label>
              <input
                type="text"
                name="matricule"
                value={formData.matricule}
                onChange={handleChange}
                placeholder="Enter your matricule number"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.matricule && (
                <p className="text-red-500 text-sm mt-1">{errors.matricule}</p>
              )}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to="/create-account" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
