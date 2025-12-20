// components/Footer.tsx
import React from "react";

const socialIcons = [
  { name: "Facebook", src: "/images/icons/fb.png", href: "#" },
  { name: "Instagram", src: "/images/icons/insta.png", href: "#" },
  { name: "LinkedIn", src: "/images/icons/linkedin.png", href: "#" },
  { name: "Twitter", src: "/images/icons/twitter.png", href: "#" },
  { name: "YouTube", src: "/images/icons/youtube.png", href: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-blue-900 text-white">
      {/* Top Footer */}
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between">
        {/* Navigation */}
        <ul className="flex flex-wrap gap-6 text-sm">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">Services</li>
          <li className="cursor-pointer hover:underline">Projects</li>
          <li className="cursor-pointer hover:underline">Testimonials</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              href={icon.href}
              aria-label={icon.name}
              className="transition hover:opacity-80"
            >
              <img
                src={icon.src}
                alt={icon.name}
                className="h-5 w-5 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl justify-center px-6 py-4 text-xs text-white/80">
          © 2025 Real Trust. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
