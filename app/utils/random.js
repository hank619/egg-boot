/*
 * @Author: Hong.Zhang
 * @Date: 2024-01-12 15:16:50
 * @Description:
 */
const generateRandomString = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  for (let i = 0; i < 6; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
};

module.exports = {
  generateRandomString,
};
