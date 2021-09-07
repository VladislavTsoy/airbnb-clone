import React from 'react';

// utils
import { footerLinks } from '../../utils/constants';
 
const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 fap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      {footerLinks.map(option => {
        return (
          <div 
            key={option.title}
            className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">{option.title}</h5>
            {option.links.map(link => (
              <p 
                key={link.title}
                className="cursor-pointer">
                {link.title}
              </p>
            ))}
          </div>
        )
      })}
    </div>
  );
};

export default Footer;