
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Award } from "lucide-react";

const achievements = [
  {
    img: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=80",
    title: "Zeitgeist Winners - IIT Roorkee",
    desc: "Won for best nukkad natak in Zeitgeist fest of IIT Roorkee.",
    color: "bg-funky-purple",
  },
  {
    img: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=500&q=80",
    title: "TAMASHA - Theater show",
    desc: "Stage play where we performed 4 major plays.",
    color: "bg-funky-orange",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    title: "RASHMIRATHI",
    desc: "Performed the famous Rashmirathi in Thapar's annual cultural fest Saturnalia.",
    color: "bg-funky-green",
  },
];

const Achievements = () => (
  <div className="max-w-6xl mx-auto px-4 py-20 bg-background">
    <h2 className="font-montserrat text-5xl sm:text-6xl font-bold text-funky-yellow mb-12 text-center">
      Achievements
    </h2>
    
    <div className="relative">
      <Carousel className="relative">
        <CarouselContent className="flex flex-row gap-6 py-4">
          {achievements.map((ach, idx) => (
            <CarouselItem
              key={ach.title}
              className="basis-[290px] md:basis-[340px] flex-shrink-0 snap-center"
            >
              <div className="rounded-2xl overflow-hidden bg-card hover:scale-105 transition-transform duration-300 h-full flex flex-col border border-white/10">
                <div className="relative h-48">
                  <img
                    src={ach.img}
                    alt={ach.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 right-4 ${ach.color} rounded-full p-2`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-poppins text-xl font-bold text-white mb-3">
                    {ach.title}
                  </h3>
                  <p className="text-white/70 font-poppins">{ach.desc}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Arrow navigation always shown */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <CarouselPrevious />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
    
    <p className="mt-8 text-center text-white/70 font-poppins">
      Swipe to see more achievements
    </p>
  </div>
);

export default Achievements;
