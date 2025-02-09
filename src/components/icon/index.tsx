import { FC, ReactNode } from "react";

interface IIconProps {
  title?: string;
  icon: ReactNode;
}

export const Icon: FC<IIconProps> = ({ title, icon }) => {
  return (
    <div
      className="w-9 h-9 flex items-center justify-center text-sm border-2 border-lightgray rounded-full transition-all hover:text-orange-500 hover:border-orange-500"
      title={title}
    >
      {icon}
    </div>
  );
};
