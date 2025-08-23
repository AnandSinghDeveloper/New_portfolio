import React, { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  logo,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        className="flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-10 space-y-6 sm:space-y-0 px-4 sm:px-6"
      >
        <div className="w-full sm:w-auto">
          <p className="text-xl sm:text-2xl font-semibold">{title}</p>
          <div className="flex flex-wrap gap-2 sm:gap-5 mt-2 text-sand text-sm sm:text-base">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 bg-neutral-800 rounded-md"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(!isHidden)}
          className="flex items-center gap-1 text-sm sm:text-base cursor-pointer hover:bg-neutral-800 px-3 py-2 rounded-md transition-all duration-300"
        >
          Read More
          <LuArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-6 sm:mt-12 h-[1px] w-full"></div>
      {isHidden && (
        <ProjectDetails
          logo={logo}
          image={image}
          title={title}
          description={description}
          subDescription={subDescription}
          href={href}
          closeModal={() => setIsHidden(!isHidden)}
          tags={tags}
        />
      )}
    </>
  );
};

export default Project;
