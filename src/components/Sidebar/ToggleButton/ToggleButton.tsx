import { FC } from "react";

interface IToggleButtonProps {
  setOpen: (val: boolean) => void;
}

export const ToggleButton: FC<IToggleButtonProps> = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen}>
      button
    </button>
  );
};
