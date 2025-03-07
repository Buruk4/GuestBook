// src/Pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl text-blue-600">Introduction</h2>
        <p className="text-lg text-gray-700">
          Welcome to GuestBookApp! We value your privacy and are committed to
          protecting your personal information. This privacy policy explains how
          we collect, use, and protect your information when you use our app.
        </p>

        <h2 className="text-2xl text-blue-600">Information We Collect</h2>
        <p className="text-lg text-gray-700">
          We collect personal information that you provide when registering for
          an account, including your name, email address, and messages you post.
          We may also collect information about your usage of the app through
          cookies or analytics tools.
        </p>

        <h2 className="text-2xl text-blue-600">How We Use Your Information</h2>
        <p className="text-lg text-gray-700">
          Your personal information is used to improve the app’s functionality,
          ensure smooth operation, and enhance your experience. We may also use
          your information for communication purposes or to respond to
          inquiries.
        </p>

        <h2 className="text-2xl text-blue-600">Data Security</h2>
        <p className="text-lg text-gray-700">
          We implement security measures to protect your personal data. However,
          no method of transmitting data over the internet is 100% secure. We
          cannot guarantee complete security of your data, but we strive to keep
          it safe.
        </p>

        <h2 className="text-2xl text-blue-600">Your Rights</h2>
        <p className="text-lg text-gray-700">
          You have the right to access, correct, and delete your personal
          information. If you wish to exercise these rights, please contact us
          at support@guestbookapp.com.
        </p>

        <h2 className="text-2xl text-blue-600">
          Changes to This Privacy Policy
        </h2>
        <p className="text-lg text-gray-700">
          We may update this Privacy Policy from time to time. We will notify
          users of any significant changes by posting the revised policy on this
          page.
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

export default PrivacyPolicy;
