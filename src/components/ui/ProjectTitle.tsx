import { ProjectName } from "../../types";

const ProjectTitle = ({
  title,
  link,
}: {
  title: ProjectName;
  link?: string;
}) => {
  const TitleContent = (
    <h3 className="text-primary border-primary w-full rounded-full border-[3px] text-center text-lg font-bold max-md:[text-shadow:_1px_2px_4px_rgb(0_0_0_/_0.8)]">
      {title}
      {link && <img src="/icons/link.svg" className="ml-[10px] inline" />}
    </h3>
  );

  return link ? (
    <a className="w-full cursor-pointer" href={link} target="_blank">
      {TitleContent}
    </a>
  ) : (
    TitleContent
  );
};

export default ProjectTitle;
