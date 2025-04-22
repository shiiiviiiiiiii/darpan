import { Users, Award, Info } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const aboutImages = [
  "/images/IMG_8834.jpg",
  "/images/IMG_8816.jpg",
  "/images/IMG_8801.jpg",
  "/images/DSCF8510.JPG",
  "/images/DSCF8521.JPG"
];

const AboutTNT = () => (
  <div className="max-w-6xl mx-auto px-4 py-20 bg-background">
    <h2 className="font-montserrat text-5xl sm:text-6xl font-bold text-funky-orange mb-12 text-center">
      About TNT
    </h2>

    <div className="lg:flex gap-12 items-center">
      <div className="flex-1 mb-12 lg:mb-0">
        <div className="relative w-full flex justify-center items-center">
          <Carousel className="w-full max-w-[600px] mx-auto">
            <CarouselContent>
              {aboutImages.map((img, idx) => (
                <CarouselItem
                  key={img}
                  className="flex justify-center items-center"
                >
                  <img
                    src={img}
                    className="rounded-xl shadow-lg border-4 border-funky-orange w-80 h-96 object-cover object-center"
                    alt={`TNT Performance ${idx + 1}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Position arrows properly with more space around them */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-4">
              <CarouselPrevious />
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-4">
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-6 pl-8"> {/* Added left padding to make space for arrows */}
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
