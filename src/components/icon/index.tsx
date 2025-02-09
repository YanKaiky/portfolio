import { FC, ReactNode } from "react";

interface IIconProps {
  title?: string;
  icon: ReactNode;
}

export const Icon: FC<IIconProps> = ({ title, icon }) => {
  return (
    <div className="icon" title={title}>
      {icon}
    </div>
  );
};
