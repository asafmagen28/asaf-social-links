import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  TwitterIcon
} from 'lucide-react';

const SocialLinksPage = () => {
  const links = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/asaf_magen1/',
      icon: Instagram,
      gradient: 'from-purple-400 via-pink-500 to-orange-500'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/asafmagen1',
      icon: TwitterIcon,
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100003754281846',
      icon: Facebook,
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/asaf-magen-597738135/',
      icon: Linkedin,
      gradient: 'from-blue-700 to-blue-800'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/972552274663',
      icon: MessageCircle,
      gradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-teal-50 flex flex-col items-center p-8">
      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500" />
      
      {/* Profile Section */}
      <div className="relative mb-16 text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 rounded-full blur-lg opacity-30 animate-pulse" />
          <div className="relative w-32 h-32 rounded-full bg-white shadow-2xl mb-6 mx-auto overflow-hidden border-4 border-white">
            <img
              src="/images/profile.jpeg"
              alt="Asaf Magen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent mb-3">
          Asaf Magen
        </h1>
      </div>

      {/* Links Section */}
      <div className="w-full max-w-md space-y-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className={`
              bg-gradient-to-r ${link.gradient}
              p-[1px] rounded-2xl
              transform transition-all duration-300
              hover:scale-105 hover:shadow-lg
            `}>
              <div className="bg-white rounded-2xl p-4 flex items-center justify-between
                             transition-all duration-300 group-hover:bg-opacity-90">
                <span className="font-medium bg-gradient-to-r from-gray-800 to-gray-600 
                               bg-clip-text text-transparent group-hover:from-white group-hover:to-white">
                  {link.name}
                </span>
                <link.icon className="w-5 h-5 text-gray-600 group-hover:text-white 
                                    transition-colors duration-300" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Contact Button */}
      <a href="mailto:asafmagen28@gmail.com" 
         className="mt-12 px-8 py-3 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 
                   text-white font-medium shadow-lg transform transition-all duration-300 
                   hover:scale-105 hover:shadow-xl flex items-center space-x-2">
        <Mail className="w-5 h-5" />
        <span>צור קשר</span>
      </a>

      {/* Footer */}
      <div className="mt-16 text-gray-500 text-sm">
        <span>© {new Date().getFullYear()} Asaf Magen</span>
      </div>
    </div>
  );
};

export default SocialLinksPage;