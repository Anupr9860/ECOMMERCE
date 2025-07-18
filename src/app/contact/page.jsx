"use client";
import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-700">Address:</p>
          <p className="text-gray-600">123 Main Street, Dummy City, 123456</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-700">Phone:</p>
          <p className="text-gray-600">+1 234 567 8901</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-700">Email:</p>
          <p className="text-gray-600">info@dummyemail.com</p>
          <p className="text-gray-600">support@dummyemail.com</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">We are available Mon-Fri, 9am-6pm.</p>
        </div>
      </div>
    </div>
  );
}