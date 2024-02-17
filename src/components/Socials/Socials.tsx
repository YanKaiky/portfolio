import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, } from 'react-icons/fa';
import { IconSocialMedia } from './IconSocial/IconSocial';
import { HiOutlineMail } from "react-icons/hi";
import './socials.scss';

export const Socials = () => {
  return (
    <div className='socials'>
      <IconSocialMedia title='LinkedIn' link='https://www.linkedin.com/in/yankaiky/' icon={<FaLinkedin />} />
      <IconSocialMedia title='Instagram' link='https://www.instagram.com/yank.a.s.12/' icon={<FaInstagram />} />
      <IconSocialMedia title='Whatsapp' link='https://wa.me/5547999556723' icon={<FaWhatsapp />} />
      <IconSocialMedia title='GitHub' link='https://github.com/YanKaiky' icon={<FaGithub />} />
      <IconSocialMedia title='Email' link='mailto:yankaikys@gmail.com' icon={<HiOutlineMail />} />
    </div>
  );
};
