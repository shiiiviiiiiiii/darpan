
import { useState } from "react";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About TNT", href: "#about" },
  { name: "Achievements", href: "#achievements" },
  { name: "Gallery", href: "#gallery" },
  { name: "Darpan", href: "#darpan" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-background/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src="/lovable-uploads/c331078d-4fb2-4580-becd-1575d85f9051.png"
            alt="TNT Logo"
            className="w-12 h-12 rounded-lg object-contain bg-black"
            style={{ backgroundColor: "black" }}
          />
          <span className="font-montserrat text-2xl md:text-3xl tracking-wider font-bold text-white">TNT</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-poppins text-white/80 hover:text-funky-orange transition-colors duration-200 px-2"
            >
              {item.name}
            </a>
          ))}
          
          <a 
            href="#contact" 
            className="bg-funky-orange hover:bg-funky-orange/90 text-white font-poppins px-6 py-2 rounded-full text-sm transition-all"
          >
            Get in Touch
          </a>
        </div>
        
        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu size={28} />
        </button>
      </nav>
      
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md px-6 py-4 animate-fade-in border-t border-white/10">
          <ul className="flex flex-col gap-4 font-poppins">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-white/80 hover:text-funky-orange"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#contact" 
                onClick={() => setMobileOpen(false)}
                className="block py-2 mt-2 bg-funky-orange text-white text-center rounded-full"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
