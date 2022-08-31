export const getInitials = (fullname) => {
  let initials = fullname.split(' ');

  if (initials.length > 1) {
    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
  } else {
    initials = fullname.substring(0, 2);
  }

  return initials.toUpperCase();
};
