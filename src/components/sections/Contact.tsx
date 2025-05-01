import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'm just an email away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                    <EnvelopeIcon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <a 
                      href="mailto:claudiajoppa.com" 
                      className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
                    >
                      claudiajoppa@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                    <PhoneIcon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <a 
                      href="tel:+1234567890" 
                      className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
                    >
                      +233 55 810 2718
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                    <MapPinIcon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">Accra, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                  <a 
                    key={platform}
                    href="#"
                    className="flex items-center px-4 py-2 bg-gray-100 hover:bg-cyan-50 text-gray-700 hover:text-cyan-600 rounded-lg transition-colors border border-gray-200"
                  >
                    <span className="mr-2">{platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-400 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-400 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-400 transition-all"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center w-full px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors shadow-sm"
              >
                <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};