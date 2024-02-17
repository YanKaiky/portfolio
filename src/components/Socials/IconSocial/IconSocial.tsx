import { FC, ReactNode } from 'react';
import './icon.social.scss';

interface IIconSocialMediaProps {
  title: string;
  link: string
  icon: ReactNode,
}

export const IconSocialMedia: FC<IIconSocialMediaProps> = ({ title, link, icon }) => {
  return (
    <a href={link} title={title} target='_blank' className='icon' rel="noreferrer">{icon}</a>
  )
}
