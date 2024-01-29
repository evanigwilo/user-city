export const validateDate = (date: Date, years: number) => {
  // Get the value of the date input
  const inputDate = new Date(date);
  // Calculate the date [years] ago
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - years);

  // Check if the input date is greater than or equal to [years] ago
  if (inputDate < minDate) {
    // Date is valid ([years] or older)
    return true;
  } else {
    // Date is invalid (under [years] old)
    return false;
  }
};

//  random backdrops
export const flipRandomly = () => {
  const number = Math.floor(Math.random() * 100);
  return "flip-" + Math.floor(number * (12 / 100));
};
