"use client";

import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

export default function Registration() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors: any = {};

    if (!form.username) newErrors.username = "Username is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!form.agree) newErrors.agree = "You must accept terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  //   const handleSubmit = async () => {
  //     if (!validate()) return;

  //     try {
  //       setLoading(true);

  //       const res = await fetch(
  //         "https://project-epoverse-backend.onrender.com/api/auth/register",
  //         {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //             username: form.username,
  //             email: form.email,
  //             password: form.password,
  //           }),
  //         }
  //       );

  //       const data = await res.json();

  //       if (!res.ok) {
  //         alert(data.message || "Registration failed");
  //         return;
  //       }

  //       alert("Registration successful!");
  //       router.push("/");
  //     } catch (err) {
  //       alert("Something went wrong");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Registration</h2>

      {/* Facebook */}
      <button className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 rounded mb-3">
        <FaFacebookF />
        Connect with Facebook
      </button>

      {/* Google */}
      <button className="flex items-center justify-center gap-2 w-full bg-gray-100 py-2 rounded mb-4 border">
        <FcGoogle size={20} />
        Connect with Google
      </button>

      <p className="text-base text- mb-6 underline decoration-indigo-500/30 font-semibold text-gray-400 cursor-pointer">
        Or login with email
      </p>

      {/* Inputs */}
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            name="username"
            placeholder="User name"
            value={form.username}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mb-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mb-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mb-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Conform Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mb-3"
          />
        </div>
      </form>

      <label className="flex items-center gap-2 text-sm mb-4">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
        />
        I agree to Terms & Conditions
      </label>

      <button
        disabled={loading}
        className="w-full bg-red-500 text-white py-2 rounded"
      >
        {loading ? "Registering..." : "Registration"}
      </button>
    </div>
  );
}
