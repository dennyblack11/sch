import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Get in Touch
            </h1>

            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contact@edumanage.com</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Admiralty Way, Lekki Phase 1, Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7277083770874!2d3.4532183!3d6.4280842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4d01e0202e80c346!2sAdmiralty%20Way%2C%20Lekki%20Phase%201%2C%20Lagos!5e0!3m2!1sen!2sng!4v1709913579834!5m2!1sen!2sng"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
