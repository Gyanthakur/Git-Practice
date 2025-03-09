import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 border border-gray-300">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Terms & Conditions
        </h2>

        <div className="max-h-96 overflow-y-auto p-4 border rounded-md bg-gray-50 text-gray-700 text-sm leading-relaxed">
          <p>
            Welcome to Git Learning! By using our platform, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h3 className="font-semibold mt-4">1. Acceptance of Terms</h3>
          <p>
            By accessing or using our website, you accept these terms in full. If you do not agree, please do not use the platform.
          </p>

          <h3 className="font-semibold mt-4">2. User Responsibilities</h3>
          <p>
            You agree to use Git Learning responsibly and not engage in any activity that may harm the platform or its users.
          </p>

          <h3 className="font-semibold mt-4">3. Intellectual Property</h3>
          <p>
            All content on this platform, including text, code, and graphics, is owned by Git Learning and protected by copyright laws.
          </p>

          <h3 className="font-semibold mt-4">4. Limitation of Liability</h3>
          <p>
            We are not responsible for any direct, indirect, or incidental damages arising from the use of our platform.
          </p>

          <h3 className="font-semibold mt-4">5. Changes to Terms</h3>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the platform after changes means you accept the revised terms.
          </p>

          <h3 className="font-semibold mt-4">6. Contact Information</h3>
          <p>
            If you have any questions about these terms, you can contact us at <strong>support@gitlearning.com</strong>.
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Last Updated: March 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
