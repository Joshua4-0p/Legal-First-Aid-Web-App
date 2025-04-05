import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Upload, EyeOff, Eye } from "lucide-react";

const CreateAccountForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "normal_user", // "normal_user" or "lawyer"
    profilePicture: null,
    matricule: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Regex for password: Minimum 8 characters, at least one uppercase letter and one special character.
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePicture") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters, include 1 uppercase letter and 1 special character.";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (formData.userType === "lawyer") {
      if (!formData.matricule.trim()) {
        newErrors.matricule = "Matricule number is required.";
      }
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const url =
          "https://rrn24.techchantier.com/Legal_First_Aid/public/api/register";

        // Create FormData with correct field names
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.fullName);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("password", formData.password);
        formDataToSend.append(
          "password_confirmation",
          formData.confirmPassword
        );
        formDataToSend.append("role", formData.userType);

        // Add conditional fields
        if (formData.userType === "lawyer") {
          formDataToSend.append("matricule", formData.matricule);
        }
        if (formData.profilePicture) {
          formDataToSend.append("image", formData.profilePicture);
        }

        // Remove Content-Type header - browser will set it automatically with boundary
        const response = await fetch(url, {
          method: "POST",
          body: formDataToSend, // FormData handles headers automatically
        });

        const result = await response.json();

        // Debugging logs (moved after result is defined)
        console.log("Registration response:", result);

        if (response.ok) {
          // After login/signup:
          localStorage.setItem("user", JSON.stringify(result.user)); // Stores the entire user object
          localStorage.setItem("token", result.token);

          alert("Account created successfully!");
          navigate("/home");
          // Reset form
          setFormData({
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            userType: "normal_user",
            profilePicture: null,
            matricule: "",
          });
          setErrors({});
        } else {
          alert(result.message || "Registration failed!");
        }
      } catch (error) {
        console.error("Registration error:", error);
        alert("An error occurred during registration.");
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700">
              <User className="inline mr-2" size={16} />
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>
          {/* Email */}
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
          {/* Password */}
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
          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700">
              <Lock className="inline mr-2" size={16} />
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          {/* Upload Profile Picture */}
          <div className="mb-4">
            <label className="block text-gray-700">
              <Upload className="inline mr-2" size={16} />
              Upload Profile Picture
            </label>
            <input
              type="file"
              name="profilePicture"
              onChange={handleChange}
              accept="image/*"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          {/* User Type Selection */}
          <div className="mb-4">
            <label className="block text-gray-700">User Type</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="normal_user">Normal User</option>
              <option value="lawyer">lawyer Expert</option>
            </select>
          </div>
          {/* Conditional Fields for lawyer Expert */}
          {formData.userType === "lawyer" && (
            <div className="mb-4">
              <label className="block text-gray-700">Matricule Number</label>
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
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full p-2 rounded-md text-white font-medium ${
              isLoading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAccountForm;
