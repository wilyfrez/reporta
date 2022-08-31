import { getInitials } from '../utils/helpers';

const Avatar = ({ text }) => {
  const initials = getInitials(text);

  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-emerald-500',
    'bg-cyan-500',
    'bg-violet-500',
    'bg-purple-500',
    'bg-fuchsia-500',
    'bg-pink-500',
    'bg-neutral-500',
    'bg-rose-500',
    'bg-indigo-500',
    'bg-sky-500',
    'bg-teal-500',
    'bg-yellow-500',
    'bg-lime-500',
    'bg-zinc-500',
    'bg-orange-500',
    'bg-red-500',
    'bg-amber-500',
    'bg-stone-500',
    'bg-gray-500',
  ];

  const style = `flex justify-center items-center w-8 h-8 rounded-full ${
    colors[Math.floor(Math.random() * colors.length)]
  }  text-white font-medium`;

  return <div className={style}>{initials}</div>;
};

export default Avatar;
