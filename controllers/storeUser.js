const User = require("../models/User.js");

module.exports = (req, res) => {
  User.create({
    ...req.body,
    grade: "아메바",
    admin: true,
  } , (error, user) => {
    if (error) {
      console.log("create error!" + error);
      return res.redirect("/auth/register");
    }
    res.redirect("/");
  });
};
