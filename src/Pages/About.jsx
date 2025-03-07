// src/Pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      </header>

      <section className="space-y-6">
        <p className="text-lg text-gray-700">
          Welcome to GuestBookApp! We are a simple and easy-to-use platform for
          people to leave messages, share their stories, and read others’
          experiences.
        </p>

        <h2 className="text-2xl text-blue-600">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to create a space where people can connect through
          their thoughts, ideas, and experiences. Whether you’re sharing your
          story or simply reading others’, we aim to provide a platform where
          everyone is heard.
        </p>

        <h2 className="text-2xl text-blue-600">Our Team</h2>
        <p className="text-lg text-gray-700">
          GuestBookApp is built by a passionate team of developers, designers,
          and creators. We are committed to making the world a little more
          connected one message at a time.
        </p>
      </section>

      <footer className="text-center mt-8">
        <p className="text-gray-600">
          © 2025 GuestBookApp. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
