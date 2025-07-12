import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 pt-24 pb-12">
      <div className="container-padding">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-16">
            {/* Left: Logo & Info */}
            <div className="flex-1 min-w-[220px]">
              <div className="font-bold text-2xl tracking-widest mb-4 text-white">EBLON DYNAMICS</div>
              <div className="text-neutral-400 text-base mb-8 max-w-xs leading-relaxed">
                Leading Syrian manufacturer of precision heavy machinery parts, committed to world-class quality and engineering excellence since 2005.
              </div>
              <div className="text-neutral-500 text-sm mb-2">C. Damascus, Syria</div>
              <div className="text-neutral-500 text-sm mb-2">info@eblondynamics.com</div>
              <div className="text-neutral-500 text-sm">© {currentYear} Eblon Dynamics</div>
            </div>
            {/* Right: Links */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <div className="text-neutral-400 font-semibold mb-4 tracking-wider text-xs">SITEMAP</div>
                <ul className="space-y-3">
                  <li><Link to="/" className="text-neutral-300 hover:text-purple-300 transition-colors duration-200 text-sm">Home</Link></li>
                  <li><Link to="/about" className="text-neutral-300 hover:text-purple-300 transition-colors duration-200 text-sm">About</Link></li>
                  <li><Link to="/products" className="text-neutral-300 hover:text-purple-300 transition-colors duration-200 text-sm">Products</Link></li>
                  <li><Link to="/industries" className="text-neutral-300 hover:text-purple-300 transition-colors duration-200 text-sm">Industries</Link></li>
                  <li><Link to="/quality" className="text-neutral-300 hover:text-purple-300 transition-colors duration-200 text-sm">Quality</Link></li>
                  <li><Link to="/innovation" className="text-neutral-300 hover:text-purple-300 transition-colors duration-200 text-sm">Innovation</Link></li>
                  <li><Link to="/news" className="text-neutral-300 hover:text-purple-300 transition-colors duration-200 text-sm">News</Link></li>
                  <li><Link to="/contact" className="text-neutral-300 hover:text-purple-300 transition-colors duration-200 text-sm">Contact</Link></li>
                </ul>
              </div>
              <div>
                <div className="text-neutral-400 font-semibold mb-4 tracking-wider text-xs">LEGAL</div>
                <ul className="space-y-3">
                  <li><Link to="/privacy" className="text-neutral-300 hover:text-purple-300 transition-colors duration-200 text-sm">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-neutral-300 hover:text-purple-300 transition-colors duration-200 text-sm">Terms of Service</Link></li>
                </ul>
              </div>
              <div className="hidden md:block">
                <div className="text-neutral-400 font-semibold mb-4 tracking-wider text-xs">PORTAL</div>
                <ul className="space-y-3">
                  <li><Link to="/login" className="text-neutral-300 hover:text-purple-300 transition-colors duration-200 text-sm">User Login</Link></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="border-t border-dotted border-neutral-800 mt-16 mb-8" />
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-xs text-neutral-600">
            <div>© {currentYear} Eblon Dynamics. All rights reserved.</div>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-neutral-300 hover:text-purple-300 transition-colors duration-200">Privacy</Link>
              <Link to="/terms" className="text-neutral-300 hover:text-purple-300 transition-colors duration-200">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Add this to index.css or a global CSS file:
// .footer-link { @apply text-neutral-300 hover:text-white border-b border-dotted border-neutral-700 hover:border-neutral-400 transition-colors duration-200; } 