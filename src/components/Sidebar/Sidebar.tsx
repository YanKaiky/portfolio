import { ToggleButton } from './ToggleButton/ToggleButton';
import { Links } from './Links/Links';
import './sidebar.scss';
import { useState } from 'react';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  
  const variants = {
    open:
    closed:
  }
  
  return (
    <div className='sidebar'>
      <div className="bg">
        <Links />
      </div>

      <ToggleButton setOpen={setOpen} />
    </div>
  );
};
