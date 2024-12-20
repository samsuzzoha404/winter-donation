import { Heart, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import FaceBookIcon from "../../assets/icons/facebook.svg";
import XIcon from "../../assets/icons/x.svg";
const FooterLink = ({ text }) => (
  <li>
    <Link to="/" className="text-gray-300 hover:text-white transition-colors">
      {text}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <HeartHandshake className="h-7 w-7 pt-1 text-secondary" />
              <span className="font-bold text-xl">Harmony for Humanity</span>
            </div>
            <p className="text-sm text-gray-300">
              Bringing warmth to those in need across the Bangladesh.
            </p>
            <ul className="flex items-center gap-4">
              <li>
                <Link to="/">
                  <img src={FaceBookIcon} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={XIcon} alt="" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink text="About Us" />
              <FooterLink text="How It Works" />
              <FooterLink text="Impact Stories" />
              <FooterLink text="Join As Volunteer" />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <FooterLink text="support@humanity.org" />
              <FooterLink text="+60XXXXXXXXXX" />
              <FooterLink text="Kuala Lumpur, Malaysia" />
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-inherit border border-secondary px-4 py-2 rounded-lg"
              />
              <button className="bg-secondary hover:bg-secondary-dark px-4 py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>© 2024 Harmony for Humanity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
