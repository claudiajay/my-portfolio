import { EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'Data Analysis', 'Data Engineering', 'Consulting'].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-cyan-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:claudiajoppa@gmail.com" className="hover:text-cyan-400 transition-colors">
                  claudiajoppa@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <CodeBracketIcon className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://github.com/claudiajay" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  github.com/claudiajay
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-xl font-bold text-white mr-2">ctrl.claudia</span>
            <span className="text-cyan-400">•</span>
            <span className="text-sm ml-2">Tech Enthusiast</span>
          </div>
          
          <div className="text-sm">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;