const os = require("os");

// log which operating system is running this code
console.log("\n os.platform():", os.platform());
// alternative option
console.log("\n os.type(): ", os.type());

// log information about the user
console.log("\n os.userInfo(): ", os.userInfo());

// log the first cpu
console.log("\n os.cpus()[0]:", os.cpus()[0]);

// log information about the network interface
console.log("\n os.networkInterfaces(): ", os.networkInterfaces());

// save these values as variables
const currentWifiIP = os.networkInterfaces()["Wi-Fi"][0].address;
console.log("\ncurrentWifiIP: ", currentWifiIP);

const currentOperatingSystem = os.platform();
console.log("currentOperatingSystem: ", currentOperatingSystem);

const currentUser = os.userInfo().username;
console.log("currentUser: ", currentUser);
