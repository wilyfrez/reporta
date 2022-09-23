import { EMAIL_REGEX } from './data';

export const formatDateForInput = (date) => {
  if (date) {
    return new Date(date).toISOString().split('T')[0];
  }
  return '';
};

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
  const { name, email, phone, country, address } = formData;
  let result = {
    status: false,
    message: 'Oops! Form validation failed.',
  };

  if (!name || !email || !phone || !country || !address) {
    result = {
      status: false,
      message: 'Complete the form.',
    };
  } else if (!EMAIL_REGEX.test(email)) {
    result = {
      status: false,
      message: 'Enter a valid email',
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

export const validateAccountLoginForm = (formData) => {
  const { email, password } = formData;

  let result = {
    status: false,
    message: 'Oops! Form validation failed.',
  };

  if (!password || !email) {
    result = {
      status: false,
      message: 'Complete the form.',
    };
  } else if (!EMAIL_REGEX.test(email)) {
    result = {
      status: false,
      message: 'Enter a valid email',
    };
  } else {
    result = {
      status: true,
      message: 'Validation passed',
    };
  }
  return result;
};

export const validateStaffAccountRegistrationForm = (formData) => {
  const { first_name, last_name, phone, email } = formData;
  let result = {
    status: false,
    message: 'Oops! Form validation failed.',
  };

  if (!first_name || !last_name || !phone || !email) {
    result = {
      status: false,
      message: 'Complete all required field.',
    };
  } else if (!EMAIL_REGEX.test(email)) {
    result = {
      status: false,
      message: 'Enter a valid email',
    };
  } else {
    result = {
      status: true,
      message: 'Validation passed',
    };
  }
  return result;
};

export const validateDepartmentCreationForm = (formData) => {
  const { name } = formData;
  let result = {
    status: false,
    message: 'Oops! Form validation failed.',
  };

  if (!name) {
    result = {
      status: false,
      message: 'Complete all required field.',
    };
  } else {
    result = {
      status: true,
      message: 'Validation passed',
    };
  }
  return result;
};

export const validateRequestCreationForm = (formData) => {
  const { title } = formData;
  let result = {
    status: false,
    message: 'Oops! Form validation failed.',
  };

  if (!title) {
    result = {
      status: false,
      message: 'Complete all required field.',
    };
  } else {
    result = {
      status: true,
      message: 'Validation passed',
    };
  }
  return result;
};

export const getBirthday = (date) =>
  date &&
  `${date.getDate()} ${date.toLocaleString('default', {
    month: 'short',
  })}`;

export const formatDate = (date) => (
  <span>
    {date &&
      `${date.getDate()} ${date.toLocaleString('default', {
        month: 'short',
      })}, ${date.getFullYear()}`}
  </span>
);
