import {
  Shield,
  UserCheck,
  FileWarning,
  Lock,
  CreditCard,
  Copyright,
  XCircle,
  Scale,
  Bell,
  Phone,
} from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Terms and Conditions
            </h1>

            {/* Introduction */}
            <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start mb-6">
                <Shield className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Introduction
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Welcome to NEXT, a comprehensive school management platform.
                    These Terms and Conditions govern your access to and use of
                    NEXT's services, website, and applications (collectively,
                    the "Services").
                  </p>
                  <p className="text-gray-600">
                    By accessing or using the Services, you agree to be bound by
                    these Terms and Conditions. If you disagree with any part of
                    these terms, you may not access the Services.
                  </p>
                </div>
              </div>
            </section>

            {/* User Eligibility & Account Responsibilities */}
            <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start mb-6">
                <UserCheck className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    User Eligibility & Account Responsibilities
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-600">To use NEXT, you must be:</p>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>At least 18 years old or have parental consent</li>
                      <li>
                        Affiliated with a registered educational institution
                      </li>
                      <li>Capable of forming legally binding contracts</li>
                    </ul>
                    <p className="text-gray-600">
                      Account holders are responsible for:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>Maintaining account security</li>
                      <li>Providing accurate information</li>
                      <li>Reporting unauthorized access</li>
                      <li>All activities under their account</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Acceptable Use Policy */}
            <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start mb-6">
                <FileWarning className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Acceptable Use Policy
                  </h2>
                  <p className="text-gray-600 mb-4">Users agree not to:</p>
                  <ul className="list-disc list-inside text-gray-600 ml-4 mb-4">
                    <li>Share account credentials</li>
                    <li>Upload malicious content</li>
                    <li>Attempt unauthorized access</li>
                    <li>Interfere with platform operations</li>
                    <li>Violate intellectual property rights</li>
                    <li>Share confidential information</li>
                  </ul>
                  <p className="text-gray-600">
                    Violation of these policies may result in immediate account
                    suspension or termination.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy & Data Protection */}
            <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start mb-6">
                <Lock className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Privacy & Data Protection
                  </h2>
                  <p className="text-gray-600 mb-4">
                    NEXT is committed to protecting your privacy and handling
                    your data in accordance with applicable laws and
                    regulations. Our data practices include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    <li>Secure data storage and transmission</li>
                    <li>Regular security audits</li>
                    <li>Limited data retention periods</li>
                    <li>User data access controls</li>
                    <li>Third-party data handling oversight</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payments & Subscriptions */}
            <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start mb-6">
                <CreditCard className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Payments & Subscriptions
                  </h2>
                  <p className="text-gray-600 mb-4">Payment terms:</p>
                  <ul className="list-disc list-inside text-gray-600 ml-4 mb-4">
                    <li>Subscription fees are billed in advance</li>
                    <li>Refunds are processed within 30 days</li>
                    <li>Price changes require 30-day notice</li>
                    <li>Late payments may restrict access</li>
                  </ul>
                  <p className="text-gray-600">
                    Detailed pricing information is available on our pricing
                    page.
                  </p>
                </div>
              </div>
            </section>

            {/* Intellectual Property Rights */}
            <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start mb-6">
                <Copyright className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Intellectual Property Rights
                  </h2>
                  <p className="text-gray-600 mb-4">
                    All platform content, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    <li>Software code and architecture</li>
                    <li>User interface designs</li>
                    <li>Documentation and training materials</li>
                    <li>Logos and branding elements</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Are protected by copyright and other intellectual property
                    laws. Users retain rights to their uploaded content while
                    granting NEXT necessary licenses to provide services.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination & Account Suspension */}
            <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start mb-6">
                <XCircle className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Termination & Account Suspension
                  </h2>
                  <p className="text-gray-600 mb-4">
                    NEXT reserves the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    <li>Suspend accounts for policy violations</li>
                    <li>Terminate services with notice</li>
                    <li>Remove inappropriate content</li>
                    <li>Restrict access to specific features</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Liability & Disclaimers */}
            <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start mb-6">
                <Scale className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Liability & Disclaimers
                  </h2>
                  <p className="text-gray-600 mb-4">
                    NEXT provides services "as is" and disclaims:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    <li>Responsibility for service interruptions</li>
                    <li>Data loss not caused by negligence</li>
                    <li>Third-party content accuracy</li>
                    <li>Fitness for specific purposes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Amendments & Updates */}
            <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start mb-6">
                <Bell className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Amendments & Updates
                  </h2>
                  <p className="text-gray-600 mb-4">
                    NEXT may modify these terms:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    <li>With 30 days notice for material changes</li>
                    <li>Immediately for minor updates</li>
                    <li>Through platform notifications</li>
                    <li>While maintaining change history</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-start mb-6">
                <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 mb-4">
                    For legal inquiries or support:
                  </p>
                  <ul className="list-none text-gray-600">
                    <li className="mb-2">Email: legal@next-edu.com</li>
                    <li className="mb-2">Phone: +1 (555) 123-4567</li>
                    <li className="mb-2">
                      Address: 123 Education Street, Suite 100
                    </li>
                    <li>New York, NY 10001, United States</li>
                  </ul>
                </div>
              </div>
            </section>

            <p className="text-sm text-gray-500 mt-8 text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
