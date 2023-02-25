const os = require("os");

// console.log(os);

// User Info

const user = os.userInfo();

const userOS = {
  arch: os.arch(),
  release: os.release(),
  type: os.type(),
  version: os.version(),
};

console.log(userOS);
