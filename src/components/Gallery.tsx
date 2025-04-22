
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
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1497449493050-aad1e7cad165?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518128714653-2db184cd1fba?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
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
