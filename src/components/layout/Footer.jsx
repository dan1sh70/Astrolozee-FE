import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#e6bf9c] text-black py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Brand */}
        <div>
          <img 
            src="./logo.png" 
            alt="Astrology Wheel" 
            className="w-20 mb-4"
          />
          <h2 className="font-bold text-lg">Astrolozee</h2>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Policy Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Policy Info</h3>
          <ul className="space-y-2">
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/cookies" className="hover:underline">Cookies</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="/help" className="hover:underline">Help</a></li>
            <li><a href="/support" className="hover:underline">Support Services</a></li>
            <li><a href="/opensource" className="hover:underline">Open Source</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black mt-8 pt-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p className="text-sm">
          © All Rights Are Belongs To Astrolozee.com
        </p>
        <div className="flex gap-4 mt-4 md:mt-0 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
