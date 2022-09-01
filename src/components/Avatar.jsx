import { getInitials } from '../utils/helpers';
import { colors } from '../utils/data';

const Avatar = ({ text }) => {
  const initials = getInitials(text);

  const style = `flex justify-center items-center w-8 h-8 rounded-full ${
    colors[Math.floor(Math.random() * colors.length)]
  }  text-white font-medium`;

  return <div className={style}>{initials}</div>;
};

export default Avatar;
