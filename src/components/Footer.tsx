
const Footer = () => (
  <footer className="w-full py-12 bg-card text-white border-t border-white/10">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col items-center">
        <div className="mb-8">
          <img
            src="/lovable-uploads/c331078d-4fb2-4580-becd-1575d85f9051.png"
            alt="TNT Footer Logo"
            className="bg-black w-16 h-16 rounded-lg object-contain mb-4 mx-auto"
            style={{ backgroundColor: "black" }}
          />
          <div className="font-montserrat text-2xl tracking-wider font-bold mb-2">
            Thapar Nautanki Team
          </div>
          <div className="text-sm text-white/60 font-poppins">
            Drama. Passion. Expression.
          </div>
        </div>
        
        <div className="w-full max-w-lg border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 font-poppins text-sm">
            <a href="#home" className="text-white/70 hover:text-funky-orange transition-colors">Home</a>
            <a href="#about" className="text-white/70 hover:text-funky-orange transition-colors">About</a>
            <a href="#achievements" className="text-white/70 hover:text-funky-orange transition-colors">Achievements</a>
            <a href="#gallery" className="text-white/70 hover:text-funky-orange transition-colors">Gallery</a>
            <a href="#darpan" className="text-white/70 hover:text-funky-orange transition-colors">Darpan</a>
            <a href="#contact" className="text-white/70 hover:text-funky-orange transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="text-sm text-white/50 font-poppins">
          &copy; {new Date().getFullYear()} TNT | Designed for DARPAN
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
