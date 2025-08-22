import React, { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import ProjectDetails from "./ProjectDetails";
// title , description , subDescription, href , logo , image , tags
const Project = ({
  title,
  description,
  subDescription,
  href,
  logo,
  image,
  tags,
}) => {
  const [ishidden, setIshidden] = useState(false);

  return (
    <>
      <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl"> {title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => {
              return <span key={tag.id}>{tag.name}</span>;
            })}
          </div>
        </div>
        <button
          onClick={() => setIshidden(!ishidden)}
          className=" flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <LuArrowUpRight className="w-5" />
        </button>
      </div>
      <div className=" bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"></div>
      {ishidden && (
        <ProjectDetails
          logo={logo}
          image={image}
          title={title}
          description={description}
          subDescription={subDescription}
          href={href}
          closeModal={() => setIshidden(!ishidden)}
          tags={tags}
        />
      )}
    </>
  );
};

export default Project;
