export const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const validateName = (inputName) => {
  const trimmedString = inputName.trim();

  if (trimmedString === "") {
    return false;
  } else {
    const capitalizedString = trimmedString
      .split(" ")
      .map((word) => capitalizeFirstLetter(word))
      .join(" ");

    return capitalizedString;
  }
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
