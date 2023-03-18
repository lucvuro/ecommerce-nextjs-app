const removeStuffsNotNumber = (value: string) => {
  return value.replace(/\D+/g, '');
};
export default removeStuffsNotNumber;
