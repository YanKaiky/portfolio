import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, } from 'react-icons/fa';
import { SocialIcon } from './SocialIcon/SocialIcon';
import { HiOutlineMail } from "react-icons/hi";
import './socials.scss';

export const Socials = () => {
  return (
    <div className='socials'>
      <SocialIcon title='LinkedIn' link='https://www.linkedin.com/in/yankaiky/' icon={<FaLinkedin />} />
      <SocialIcon title='Instagram' link='https://www.instagram.com/yank.a.s.12/' icon={<FaInstagram />} />
      <SocialIcon title='Whatsapp' link='https://wa.me/5547999556723' icon={<FaWhatsapp />} />
      <SocialIcon title='GitHub' link='https://github.com/YanKaiky' icon={<FaGithub />} />
      <SocialIcon title='Email' link='mailto:yankaikys@gmail.com' icon={<HiOutlineMail />} />
    </div>
  );
};
