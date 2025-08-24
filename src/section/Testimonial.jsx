import React from "react";
import { twMerge } from "tailwind-merge";
import { Marquee } from "../Components/Marquee";
import { reviews } from "../Constants";

const firstRow = reviews.slice(0, Math.floor(reviews.length / 3));
const secondRow = reviews.slice(Math.floor(reviews.length / 3), Math.floor((reviews.length * 2) / 3));
const thirdRow = reviews.slice(Math.floor((reviews.length * 2) / 3));

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "group relative h-full cursor-pointer overflow-hidden rounded-2xl border p-4 transition-all duration-300 ease-in-out",
      
        "w-48 sm:w-56 md:w-64 lg:w-72",
      
        "border-gray-200/20 bg-gradient-to-br from-white/5 via-white/10 to-transparent backdrop-blur-sm",
       
        "hover:border-indigo-400/60",
        "hover:shadow-lg hover:shadow-indigo-500/10",
        
        "border-gray-700/30 dark:bg-gradient-to-br dark:from-gray-800/50 via-gray-900/30 dark:to-transparent",
        "hover:border-indigo-400/50 "
      )}
    >      
      <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
      
        <div className="relative">
          <img 
            className={twMerge(
              "rounded-xl bg-white/20 backdrop-blur-sm",
              "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 p-2"
            )}
            alt={name || "Technology"} 
            src={img} 
          />
        </div>
     
        <div className="flex flex-col items-center text-center space-y-1">
          <figcaption className={twMerge(
            "font-semibold text-gray-900 dark:text-white",
            "text-sm sm:text-base md:text-lg"
          )}>
            {name}
          </figcaption>
          
          {username && (
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              @{username}
            </p>
          )}
        </div>
      </div>
      
     
      {body && (
        <blockquote className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center line-clamp-3">
          {body}
        </blockquote>
      )}
    </figure>
  );
};

export function Testimonial() {
  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20">
    
      <div className="items-start px-4 sm:px-6 md:px-8 lg:px-12">
       
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className={twMerge(
            "font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",
            "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
            "mb-3 sm:mb-4"
          )}>
            Technologies I Work With
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the cutting-edge technologies and frameworks that power my development journey
          </p>
        </div>
        
      
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
       
          <Marquee pauseOnHover className="[--duration:25s] mb-4 sm:mb-6 md:mb-8">
            {firstRow.map((review, index) => (
              <ReviewCard key={review.username || index} {...review} />
            ))}
          </Marquee>
          
     
          <Marquee reverse pauseOnHover className="[--duration:20s] mb-4 sm:mb-6 md:mb-8">
            {secondRow.map((review, index) => (
              <ReviewCard key={review.username || index} {...review} />
            ))}
          </Marquee>
          
          
          <Marquee pauseOnHover className="[--duration:15s]">
            {thirdRow.map((review, index) => (
              <ReviewCard key={review.username || index} {...review} />
            ))}
          </Marquee>
          
         
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-primary via-primary/80 to-transparent z-10" />
          
     
          <div className="pointer-events-none absolute inset-x-0 top-0 h-8 sm:h-12 md:h-16 bg-gradient-to-b from-primary to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 sm:h-12 md:h-16 bg-gradient-to-t from-primary to-transparent z-10" />
        </div>
        
       
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}