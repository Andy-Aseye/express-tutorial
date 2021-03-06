const os = require('os')

//info about current user

const user = os.userInfo();
console.log(user);

//method returns the computer uptime

const uptime = os.uptime();
console.log(uptime);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
    platform: os.platform()
}

console.log(currentOS);