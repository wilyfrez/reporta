import { EMAIL_REGEX } from './data';

export const getInitials = (fullname) => {
  let initials = fullname.split(' ');

  if (initials.length > 1) {
    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
  } else {
    initials = fullname.substring(0, 2);
  }

  return initials.toUpperCase();
};

export const validateAccountRegistrationForm = (formData) => {
  const { name, email, phone, country, address, password, confirm_password } =
    formData;
  let result = {
    status: false,
    message: 'Oops! Form validation failed.',
  };

  if (
    !name ||
    !email ||
    !phone ||
    !country ||
    !address ||
    !password ||
    !confirm_password
  ) {
    result = {
      status: false,
      message: 'Complete the form.',
    };
  } else if (!EMAIL_REGEX.test(email)) {
    result = {
      status: false,
      message: 'Enter a valid email',
    };
  } else if (password.length < 8) {
    result = {
      status: false,
      message: 'Password should be at least 8 characters',
    };
  } else if (password !== confirm_password) {
    result = {
      status: false,
      message: 'Both password must match',
    };
  } else {
    result = {
      status: true,
      message: 'Validation passed',
    };
  }
  return result;
};
export const validateAccountActivationForm = (formData) => {
  const { email, password, confirm_password } = formData;
  let result = {
    status: false,
    message: 'Oops! Form validation failed.',
  };

  if (!password || !confirm_password) {
    result = {
      status: false,
      message: 'Complete the form.',
    };
  } else if (password.length < 8) {
    result = {
      status: false,
      message: 'Password should be at least 8 characters',
    };
  } else if (password !== confirm_password) {
    result = {
      status: false,
      message: 'Both password must match',
    };
  } else {
    result = {
      status: true,
      message: 'Validation passed',
    };
  }
  return result;
};
