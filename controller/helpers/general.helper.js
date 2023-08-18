/** Packages  */
const CryptoJS = require("crypto-js");

const config = require("config");

//metodo de cifrado de informacion
/** Encrypt password */

exports.EncryptPassword = (password) =>{
    let secretKey = config.get("secretKeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
};