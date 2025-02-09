import { FC, ReactNode } from "react";

interface ISocialIconProps {
  title: string;
  link: string;
  icon: ReactNode;
}

export const SocialIcon: FC<ISocialIconProps> = ({ title, link, icon }) => {
  return (
    <a
      href={link}
      title={title}
      target="_blank"
      className="icon"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
};
