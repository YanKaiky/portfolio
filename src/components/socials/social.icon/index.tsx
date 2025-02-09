import { FC, ReactNode } from "react";

interface ISocialIconProps {
  title: string;
  link: string;
  icon: ReactNode;
}

export const SocialIcon: FC<ISocialIconProps> = ({ title, link, icon }) => {
  return (
    <div className="w-9 h-9 flex items-center justify-center text-sm border-2 border-lightgray rounded-full transition-all hover:text-orange-500 hover:border-orange-500">
      <a href={link} title={title} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </div>
  );
};
