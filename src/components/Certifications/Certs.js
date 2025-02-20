import React from "react";
import GoogleCert from "../../photos/googleCert.png";
import MicrosoftCert from "../../photos/MicrosoftITCert.png";

function Certs() {
  return (
    <div className="p-8 bg-white text-blue-400 font-sans">
      <div className="pr-4">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-customColor leading-tight mb-10 text-center">
          Certifications
        </h1>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Google Certification */}
          <div className="flex flex-col bg-gray-50 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src={GoogleCert}
              alt="Google Cybersecurity Professional Certification"
              className="w-2/3 lg:w-1/2 h-auto rounded-lg shadow-xl mb-6 self-center"
            />
            <div>
              <h3 className="text-3xl font-semibold mb-2">
                Google Cybersecurity Professional Certificate
              </h3>
              <h4 className="text-2xl text-gray-600 mb-4">Google • Dec 2024</h4>
              <p className="text-black leading-relaxed tracking-wide">
                I completed the Google Cybersecurity Professional Certificate,
                where I gained foundational skills in cybersecurity, including
                threat analysis, risk management, network security, and incident
                response. The program provided hands-on experience with essential
                tools like Linux, SQL, and Python, along with practical knowledge
                of security best practices and compliance frameworks.
                <br />
                <br />
                This certification has equipped me with the skills needed to
                protect systems and data, analyze security risks, and respond to
                cybersecurity threats effectively.
              </p>
            </div>
          </div>

          {/* Microsoft Certification */}
          <div className="flex flex-col bg-gray-50 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src={MicrosoftCert}
              alt="Microsoft IT Support Specialist Professional Certificate"
              className="w-2/3 lg:w-1/2 h-auto rounded-lg shadow-xl mb-6 self-center"
            />
            <div>
              <h3 className="text-3xl font-semibold mb-2">
                Microsoft IT Support Specialist Professional Certificate
              </h3>
              <h4 className="text-2xl text-gray-600 mb-4">Microsoft • Feb 2025</h4>
              <p className="text-black leading-relaxed tracking-wide">
                I completed the Microsoft IT Support Specialist Professional Certificate,
                where I developed key skills in IT support, including troubleshooting,
                system administration, networking, and security. The program covered essential
                topics such as Windows operating systems, Active Directory, Azure fundamentals,
                and Microsoft 365 support.
                <br />
                <br />
                This certification provided hands-on experience in diagnosing and resolving
                technical issues, managing hardware and software, and supporting cloud services,
                preparing me to handle a wide range of IT support tasks in professional environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certs;
