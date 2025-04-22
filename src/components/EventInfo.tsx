
import { CalendarDays, MapPin } from "lucide-react";

const EventInfo = () => (
  <div className="max-w-5xl mx-auto px-4 py-20 bg-background">
    <h2 className="font-montserrat text-5xl sm:text-6xl font-bold text-funky-purple mb-12 text-center">
      About DARPAN
    </h2>
    
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-funky-orange/30 animate-pulse"></div>
      <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-funky-purple/30 animate-pulse"></div>
      
      <div className="relative z-10 bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-funky-purple/20 via-funky-orange/20 to-funky-yellow/20"></div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/5 relative">
            <div className="sticky top-24 text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-funky-purple rounded-full blur-xl opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=340&q=80"
                  alt="DARPAN Event"
                  className="w-64 h-64 rounded-full object-cover border-4 border-funky-purple relative z-10"
                />
              </div>
              
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center justify-center gap-3 bg-card/50 border border-white/10 rounded-full py-3 px-5">
                  <CalendarDays className="w-5 h-5 text-funky-orange" />
                  <span className="text-white font-poppins">April 24, 2025</span>
                </div>
                
                <div className="flex items-center justify-center gap-3 bg-card/50 border border-white/10 rounded-full py-3 px-5">
                  <MapPin className="w-5 h-5 text-funky-orange" />
                  <span className="text-white font-poppins">K-Lawns</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-card/50 border border-white/10 rounded-full py-3 px-5">
                  <span className="w-5 h-5 text-funky-orange font-bold flex items-center justify-center">⏰</span>
                  <span className="text-white font-poppins">5:30 pm onwards</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h3 className="font-poppins text-3xl font-bold text-white mb-6 leading-tight">
              Darpan is TNT&apos;s 13th original nukkad natak extravaganza.
            </h3>
            
            <p className="text-white/70 font-poppins text-lg mb-8 leading-relaxed">
              Come witness our newest, most powerful nukkad natak yet—packed with satire, laughter, drama, music, and the raw spirit of street theatre. This isn&apos;t just an event, it&apos;s a celebration of expression, of youth, and of unfiltered stories that matter!
            </p>
            
            <div className="bg-funky-purple/10 p-6 rounded-xl border-l-4 border-funky-purple mb-8">
              <h4 className="text-white font-poppins font-semibold text-xl mb-2">Event Details:</h4>
              <ul className="text-white/70 font-poppins space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-funky-orange"></span>
                  Venue: K-Lawns, Thapar Institute
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-funky-yellow"></span>
                  Date: April 24, 2025
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-funky-green"></span>
                  Time: 5:30 pm onwards
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-funky-purple"></span>
                  Open to all! Witness street magic live.
                </li>
              </ul>
            </div>
            
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-funky-purple to-funky-orange text-white font-poppins font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-funky-purple/30 hover:scale-105 transition transform text-lg"
            >
              Reserve Your Spot &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="text-center mt-12 font-poppins text-white/70">
      Don&apos;t miss the energy and magic of DARPAN—the nukkad natak event you can&apos;t miss!
    </div>
  </div>
);

export default EventInfo;
