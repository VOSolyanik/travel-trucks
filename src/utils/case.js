export const camelToTitleCase = (str) => {
  return str
    .replace(/([A-Z])/g, ' $1') // Add space before uppercase letters
    .replace(/^./, match => match.toUpperCase()); // Capitalize the first letter
};

export const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};