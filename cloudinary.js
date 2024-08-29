const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dn57ghnhq", // silahkan pakai menggunakan cloud name kalian
  api_key: "818813897112648", // silahkan pakai menggunakan api key kalian
  api_secret: "lCJVnrP_sie0QLssJnNz1E5-apU", // silahkan pakai menggunakan api secret kalian
});

module.exports = cloudinary;