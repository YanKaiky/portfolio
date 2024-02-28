import { FC, ReactNode } from 'react';
import './icon.scss';

interface IIconProps {
  title?: string;
  icon: ReactNode;
}

export const Icon: FC<IIconProps> = ({ title, icon }) => {
  return (
    <div className='icon' title={title}>
      {icon}
    </div>
  )
}
