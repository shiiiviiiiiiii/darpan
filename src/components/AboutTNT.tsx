
import { Users, Award, Info } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const aboutImages = [
  "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800&q=80"
];

const AboutTNT = () => (
  <div className="max-w-6xl mx-auto px-4 py-20 bg-background">
    <h2 className="font-montserrat text-5xl sm:text-6xl font-bold text-funky-orange mb-12 text-center">
      About TNT
    </h2>

    <div className="lg:flex gap-12 items-center">
      <div className="flex-1 mb-12 lg:mb-0">
        <div className="relative w-full flex justify-center items-center">
          <Carousel className="w-full max-w-[240px] mx-auto">
            <CarouselContent>
              {aboutImages.map((img, idx) => (
                <CarouselItem
                  key={img}
                  className="flex justify-center items-center"
                >
                  <img
                    src={img}
                    className="rounded-xl shadow-lg border-4 border-funky-orange w-40 h-52 object-cover object-center"
                    alt={`TNT Performance ${idx + 1}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <div className="bg-funky-purple/10 p-6 rounded-2xl shadow-lg border-l-4 border-funky-purple transform hover:scale-105 transition-transform duration-300">
          <Users className="text-funky-purple bg-funky-purple/10 rounded-full w-12 h-12 p-2 shadow-lg mb-4" />
          <h3 className="font-poppins text-2xl font-bold text-white mb-2">
            Natak Comes Alive
          </h3>
          <p className="font-poppins text-white/70">
            A quirky crew of storytellers, actors, and creators—at Thapar and beyond. We're the heart of street theatrical expression on campus!
          </p>
        </div>
        <div className="bg-funky-orange/10 p-6 rounded-2xl shadow-lg border-l-4 border-funky-orange transform hover:scale-105 transition-transform duration-300">
          <Award className="text-funky-orange bg-funky-orange/10 rounded-full w-12 h-12 p-2 shadow-lg mb-4" />
          <h3 className="font-poppins text-2xl font-bold text-white mb-2">
            Passion Unleashed
          </h3>
          <p className="font-poppins text-white/70">
            From annual nukkads to wild rehearsals—TNT's stage is the campus ground! We push boundaries and create unforgettable street theatre.
          </p>
        </div>
        <div className="bg-funky-green/10 p-6 rounded-2xl shadow-lg border-l-4 border-funky-green transform hover:scale-105 transition-transform duration-300">
          <Info className="text-funky-green bg-funky-green/10 rounded-full w-12 h-12 p-2 shadow-lg mb-4" />
          <h3 className="font-poppins text-2xl font-bold text-white mb-2">
            Join the Madness
          </h3>
          <p className="font-poppins text-white/70">
            Confidence. Laughter. Big wins. Make friends for life at TNT! We're always looking for fresh talent to join our family of natak artists.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutTNT;
