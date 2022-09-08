import { getInitials } from '../utils/helpers';
import { colors } from '../utils/data';

const Avatar = ({ text, border }) => {
  const initials = getInitials(text);

  const style = `flex justify-center items-center w-8 h-8 rounded-full  ${
    colors[Math.floor(Math.random() * colors.length)]
  }  text-white text-sm  ${border && ' rounded-full ring-2 ring-white'}`;

  return <div className={style}>{initials}</div>;
};

export default Avatar;
