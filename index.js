const express = require('express')
const schedule = require('node-cron')
const consignments = require('./data/consignments')
const app = express()
const sendDeliveryPartner = require('./utils/sendDeliveryPartner')
const dailyAlert = require('./utils/sendDailyAlert')
const port = process.env.PORT || 5000

schedule.schedule('0 0 11 * * *', async function(){
  
    
    // const consignments_data = consignments;
    // console.log(consignments_data)
    // const today = new Date()
    // const todays_consignment = consignments_data.filter(consignment => {
    //     const date = new Date(consignment.slot['start'])
    //     console.log(date)
    //     console.log(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`)
    //     console.log(`${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`)
    //     return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    // })
    // todays_consignment.forEach((consignment)=>{
    //     sendDeliveryPartner(consignment);
    // })
    await dailyAlert();
})


app.listen(port, () => console.log(`Server running on port ${port}`))