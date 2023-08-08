const generateRandomId = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
};

const generateUniqueIDWithTime = (length) => {
  const timestamp = Date.now().toString(); // Get the current timestamp
  const randomId = generateRandomId(length);
  const newID = `${randomId}-${timestamp}`;

  return newID;
};

export { generateUniqueIDWithTime };
