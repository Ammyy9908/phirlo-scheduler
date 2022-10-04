//  class DateIST extends Date {
//     constructor(params) {
//         super(params)
//         console.log(this)
//         console.log(this.toString())
//         console.log(this.toLocaleString())
//         console.log(this.toISOString())
//     }

//     toISOString() {
//         var date = new Date(this)
//         date.setHours(date.getHours() + 5)
//         date.setMinutes(date.getMinutes() + 30)
//         return date.toISOString();
//     }
// }

// module.exports = DateIST;

const moment = require('moment');

const date = new Date();
const dateIST = moment('2022-10-03T07:15:00+00:00').utcOffset("+06:30").format();
console.log(dateIST);
