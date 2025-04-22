
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Images } from "lucide-react";
import { useState } from "react";

// Extended gallery with more images
const galleryImages = [
  "/images/DSCF8518.JPG",
  "/images/IMG_4579.jpg",
  "/images/IMG_4623.jpg",
  "/images/IMG_6614.jpg",
  "/images/IMG_8771.jpg",
  "/images/IMG_4626.jpg",
  "/images/IMG_7176.jpg",
  "/images/IMG_8777.jpg",
  "/images/IMG_8787.jpg",
  "/images/IMG_8816.jpg",
  "/images/IMG_8804.jpg",
  "/images/IMG_6614.jpg",
  "/images/IMG_8816.jpg",
  "/images/IMG_8834.jpg",
  
];

const Gallery = () => {
  // For infinite effect, repeat the images multiple times
  const [images] = useState([
    ...galleryImages, 
    ...galleryImages
  ]);

  return (
    <div className="py-20 bg-background overflow-hidden">
      <h2 className="font-montserrat text-5xl sm:text-6xl font-bold text-funky-green mb-12 text-center flex justify-center items-center gap-3">
        <Images className="w-10 h-10 text-funky-green" />
        Gallery
      </h2>
      
      <div className="mb-12">
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((src, idx) => (
              <CarouselItem 
                key={idx} 
                className="pl-2 md:pl-4 basis-[280px] md:basis-[350px]"
              >
                <div className="overflow-hidden rounded-xl aspect-[4/3] bg-card border border-white/10">
                  <img
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      
      <p className="mt-8 text-center text-white/70 font-poppins">
        Infinite memories. Scroll to explore TNT adventures!
      </p>
    </div>
  );
};

export default Gallery;
