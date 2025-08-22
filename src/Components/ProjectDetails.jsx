import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const ProjectDetails = ({
  closeModal,
  title,
  description,
  subDescription,
  tags,
  image,
  href,
}) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center w-full min-h-screen p-2 sm:p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-200">
        <div
          className="relative w-full max-w-sm sm:max-w-xl lg:max-w-2xl max-h-[90vh] min-h-[50vh] my-4 sm:my-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl modal-enter-active overflow-y-auto no-scrollbar"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 z-20 p-2 rounded-full 
             bg-black/50 hover:bg-black/70 backdrop-blur-sm 
             border border-white/20 hover:border-white/40 
             transition-all duration-200 hover:scale-110 group"
            aria-label="Close modal"
          >
            <IoClose className="w-5 h-5 text-white/80 group-hover:text-white" />
          </button>

          <div className="relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
            <img
              src={image}
              alt={title}
              className="w-full h-48 sm:h-64 lg:h-[40vh] object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

         
          <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
           
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                {title}
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>

          
            <div className="space-y-2 sm:space-y-3">
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {description}
              </p>
              {subDescription.map((item, index) => (
                <p
                  key={index}
                  className="text-slate-400 leading-relaxed text-sm sm:text-base"
                >
                  • {item}
                </p>
              ))}
            </div>

          
            <div className="flex flex-col gap-4 pt-3 sm:pt-4 border-t border-white/10">
              
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                {tags.map((tag) => (
                  <div key={tag.id} className="group relative tag-hover">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 p-1.5 sm:p-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg sm:rounded-xl transition-all duration-200">
                      <img
                        src={tag.path}
                        alt={tag.name}
                        className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-200"
                      />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap pointer-events-none z-20">
                      {tag.name}
                    </div>
                  </div>
                ))}
              </div>

            
              <div className="flex justify-center sm:justify-end">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg sm:rounded-xl transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 group text-sm sm:text-base"
                >
                  View Project
                  <RiExternalLinkLine className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
