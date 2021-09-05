import React from 'react';
 
const Footer = () => {

  const options = [
    {
      title: "About",
      links: [
        {
          title: "How Airbnb works",
          url: ""
        },
        {
          title: "Newsroom",
          url: ""
        },
        {
          title: "Investors",
          url: ""
        },
        {
          title: "Airbnb Plus",
          url: ""
        },
        {
          title: "Airbnb Luxe",
          url: ""
        },
      ]
    }, {
      title: "Community",
      links: [
        {
          title: "Accessibility",
          url: ""
        },
        {
          title: "This is not a real site",
          url: ""
        },
        {
          title: "This is an awesome clone",
          url: ""
        },
        {
          title: "Referalls accepted",
          url: ""
        },
      ]
    }, {
      title: "Host",
      links: [
        {
          title: "Vlads Next App",
          url: ""
        },
        {
          title: "Presents",
          url: ""
        },
      ]
    }, {
      title: "Support",
      links: [
        {
          title: "Help Center",
          url: ""
        },
        {
          title: "Trust & Safety",
          url: ""
        },
        {
          title: "Say Hello",
          url: ""
        },
        {
          title: "Easter Eggs",
          url: ""
        },
        {
          title: "Buy Bitcoin (Not financial advice)",
          url: ""
        },
      ]
    }, 
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 fap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      {options.map(option => {
        return (
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">{option.title}</h5>
            {option.links.map(link => (
              <p className="cursor-pointer">{link.title}</p>
            ))}
          </div>
        )
      })}
    </div>
  );
};

export default Footer;