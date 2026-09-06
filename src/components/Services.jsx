import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { FaCamera, FaImages, FaMicrophone, FaBuilding } from "react-icons/fa6";
import { LuScissors, LuClapperboard } from "react-icons/lu";
import Autoplay from 'embla-carousel-autoplay';


const Services
  = ({ services }) => {
    const servicesIcon = [
      { icon: <FaCamera size={50} color="#e50914" />, name: "Photography" },
      { icon: <FaImages size={50} color="#4caf50" />, name: "Photoshoot" },
      { icon: <LuScissors size={50} color="#2196f3" />, name: "Editing" },
      { icon: <LuClapperboard size={50} color="#ff9800" />, name: "Reel" },
      { icon: <FaMicrophone size={50} color="#9c27b0" />, name: "Podcast" },
      { icon: <FaBuilding size={50} color="#607d8b" />, name: "Studio" }
    ]

  return (
    <div
      ref={services}
      className="min-h-screen bg-zinc-800 rounded-xl container mx-auto p-5 opacity-80"
    >
      <div className="flex justify-center items-center text-white text-4xl mb-8">
        Services
      </div>
      <div className="flex justify-center items-left text-white text-xl mb-8">
        At The WedGlow Studio, every detail is crafted to create an experience as beautiful as the final result.
        From luxury studio rentals and bespoke portfolio shoots to wedding photography, bridal & non-bridal makeup,
        and professional makeup education, we offer thoughtfully curated services that celebrate beauty, individuality,
        and timeless moments all under one roof.
      </div>


      <div className="mt-16 flex flex-col items-center">
        {/* <div className="text-gray-300 text-2xl mb-5">Skill Icons</div> */}
        <Carousel className="w-full mx-auto" opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}>
          <CarouselContent className='-ml-1'>
            {servicesIcon.map((item, idx) => (
              <CarouselItem key={idx} className="pl-1 md:basis-1/2 lg:basis-1/5">
                <Card className="bg-zinc-900 flex flex-col items-center p-6 rounded-xl shadow-lg justify-center h-96">
                  <CardContent className="flex flex-col items-center h-full justify-center">
                    <div className="flex flex-col items-center">
                      {item.icon}
                      <span className="mt-2 text-gray-200 text-lg">{item.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full shadow-md" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full shadow-md" />
        </Carousel>
      </div>
    </div>
  );
};

export default Services
