import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Terms of Service</h1>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl text-blue-600">Introduction</h2>
        <p className="text-lg text-gray-700">
          By using GuestBookApp, you agree to the following terms and
          conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl text-blue-600">Account Registration</h2>
        <p className="text-lg text-gray-700">
          You must create an account to use the services offered by
          GuestBookApp. You are responsible for maintaining the confidentiality
          of your account information.
        </p>

        <h2 className="text-2xl text-blue-600">User Responsibilities</h2>
        <p className="text-lg text-gray-700">
          By using GuestBookApp, you agree to follow our community guidelines
          and not post any harmful, offensive, or illegal content. We reserve
          the right to remove any content that violates these guidelines.
        </p>

        <h2 className="text-2xl text-blue-600">Privacy and Data</h2>
        <p className="text-lg text-gray-700">
          We value your privacy and strive to protect your personal information.
          Please refer to our Privacy Policy for more details.
        </p>

        <h2 className="text-2xl text-blue-600">Limitation of Liability</h2>
        <p className="text-lg text-gray-700">
          GuestBookApp is not responsible for any damages arising from the use
          or inability to use our services. We do our best to ensure the app’s
          functionality, but cannot guarantee uninterrupted access.
        </p>

        <h2 className="text-2xl text-blue-600">Modifications</h2>
        <p className="text-lg text-gray-700">
          We reserve the right to modify these Terms of Service at any time.
          Changes will be posted on this page with an updated date. Continued
          use of the app after changes will constitute your acceptance of the
          updated terms.
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

export default TermsOfService;
