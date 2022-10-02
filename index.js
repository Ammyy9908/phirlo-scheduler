const express = require('express')
const schedule = require('node-cron')
const consignments = require('./data/consignments')
const app = express()
const sendDeliveryPartner = require('./utils/sendDeliveryPartner')
const dailyAlert = require('./utils/sendDailyAlert')
const port = process.env.PORT || 5000

schedule.schedule('0 11 * * *', async function(){
  
    console.log('11')
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
    await dailyAlert('11 AM');
})

schedule.schedule('0 12 * * *', async function(){
  
    console.log('12')
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
    await dailyAlert('12 PM');
})

schedule.schedule('0 13 * * *', async function(){
  
    console.log('1')
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
    await dailyAlert('1 PM');
})

schedule.schedule('0 14 * * *', async function(){
  
    console.log('14')
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
    await dailyAlert('2 PM');
})

schedule.schedule('0 15 * * *', async function(){
  
    console.log('15')
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
    await dailyAlert('3 PM');
})

schedule.schedule('0 16 * * *', async function(){
  
    console.log('16')
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
    await dailyAlert('4 PM');
})

schedule.schedule('0 17 * * *', async function(){
  
    console.log('17')
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
    await dailyAlert('5 PM');
})

schedule.schedule('0 18 * * *', async function(){
  
    console.log('18')
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
    await dailyAlert('6 PM');
})

schedule.schedule('0 19 * * *', async function(){
  
    console.log('19')
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
    await dailyAlert('7 pm');
})

schedule.schedule('0 20 * * *', async function(){
  
    console.log('20')
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
    await dailyAlert('8 PM');
})


app.listen(port, () => console.log(`Server running on port ${port}`))