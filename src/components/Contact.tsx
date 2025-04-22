
import { Phone, Mail, Home } from "lucide-react";

const contacts = [
  {
    icon: <Phone size={24} className="text-white"/>,
    label: "Phone",
    text: "+91 8521528744",
    color: "bg-funky-orange",
  },
  {
    icon: <Mail size={24} className="text-white"/>,
    label: "Email",
    text: "thaparnautankiteam@thapar.edu",
    color: "bg-funky-purple",
  },
  {
    icon: <Home size={24} className="text-white"/>,
    label: "Campus",
    text: "Thapar Institute of Engineering and Technology, Patiala.",
    color: "bg-funky-green",
  },
];

const Contact = () => (
  <div className="max-w-6xl mx-auto px-4 py-20 bg-background">
    <h2 className="font-montserrat text-5xl sm:text-6xl font-bold text-funky-blue mb-12 text-center">
      Get in Touch
    </h2>
    
    <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 text-center">
      {contacts.map((c) => (
        <div 
          key={c.label} 
          className="flex-1 flex flex-col items-center bg-card border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className={`${c.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
            {c.icon}
          </div>
          <div className="text-2xl font-semibold text-white font-poppins mb-3">{c.label}</div>
          <div className="text-lg text-white/70 font-poppins">{c.text}</div>
        </div>
      ))}
    </div>
    
    <div className="mt-16 max-w-2xl mx-auto">
      <div className="bg-card p-8 rounded-2xl border border-white/10 shadow-lg">
        <h3 className="text-2xl font-bold text-white mb-6 font-poppins text-center">Drop us a message</h3>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-white/70 mb-2 font-poppins text-sm">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white font-poppins focus:outline-none focus:ring-2 focus:ring-funky-orange/50"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white/70 mb-2 font-poppins text-sm">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white font-poppins focus:outline-none focus:ring-2 focus:ring-funky-orange/50"
                placeholder="johndoe@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-white/70 mb-2 font-poppins text-sm">Your Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white font-poppins focus:outline-none focus:ring-2 focus:ring-funky-orange/50"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-gradient-to-r from-funky-orange to-funky-purple text-white font-poppins font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-funky-purple/30 hover:scale-105 transition transform"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <div className="mt-8 text-center text-white/50 font-poppins text-sm">
      Follow us on social media for updates and behind the scenes!
    </div>
  </div>
);

export default Contact;
