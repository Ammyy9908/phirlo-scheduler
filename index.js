const express = require('express')
const schedule = require('node-cron')
const app = express()
const getAdminToken = require('./utils/getToken')
const sendDeliveryPartner = require('./utils/sendDeliveryPartner')
const dailyAlert = require('./utils/sendDailyAlert')
const port = process.env.PORT || 5000
const getConsignmentsDetails = require('./utils/fetchConsignments')
const moment = require('moment')
const updateConsignmentStatus = require('./utils/changeConsignmentStatus')

console.log(`System Current Time & Date is ${new Date()}`)


const formatDate = (date)=>{
    let correct_date = moment(date).utcOffset("+05:30").format()
    console.log(correct_date)
    return correct_date;
}

schedule.schedule('0 9 * * *', async function(){
  let token = await getAdminToken();
 
    
    if(token.tokenAuth.token){
        
        const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
        console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
    if(consignments_data){
        console.log("Inside Consignments Data")
        const today = new Date()
        
        const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
            let isTodayDate = formatDate(c.scheduleDate)
            return (c.scheduleDate && 
            new Date(isTodayDate).getHours()==today.getHours()+1 &&
            new Date(isTodayDate).getDate()==today.getDate() &&
            new Date(isTodayDate).getMonth()==today.getMonth()
            && new Date(isTodayDate).getFullYear()==today.getFullYear())

        
        
        });
        console.log('Todays Consignments',todays_consignment)

        todays_consignment.forEach((consignment)=>{
            sendDeliveryPartner(consignment);
        })
    
    }

    
   
   
    //await dailyAlert('11 AM');
    }
})

schedule.schedule('0 10 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
      if(consignments_data){
          console.log("Inside Consignments Data")
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          console.log('Todays Consignments',todays_consignment)
  
          todays_consignment.forEach((consignment)=>{
              sendDeliveryPartner(consignment);
          })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })


  schedule.schedule('0 11 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          console.log("Inside Consignments Data")
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          console.log('Todays Consignments',todays_consignment)
  
          todays_consignment.forEach((consignment)=>{
              sendDeliveryPartner(consignment);
          })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })

  schedule.schedule('0 12 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          console.log("Inside Consignments Data")
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          console.log('Todays Consignments',todays_consignment)
  
          todays_consignment.forEach((consignment)=>{
              sendDeliveryPartner(consignment);
          })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })



  schedule.schedule('0 13 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          console.log("Inside Consignments Data")
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          console.log('Todays Consignments',todays_consignment)
  
          todays_consignment.forEach((consignment)=>{
              sendDeliveryPartner(consignment);
          })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })


  schedule.schedule('0 14 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          console.log("Inside Consignments Data")
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          console.log('Todays Consignments',todays_consignment)
  
          todays_consignment.forEach((consignment)=>{
              sendDeliveryPartner(consignment);
          })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })


  schedule.schedule('0 15 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          console.log("Inside Consignments Data")
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          console.log('Todays Consignments',todays_consignment)
  
          todays_consignment.forEach((consignment)=>{
              sendDeliveryPartner(consignment);
          })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })


  schedule.schedule('0 16 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          console.log("Inside Consignments Data")
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          console.log('Todays Consignments',todays_consignment)
  
          todays_consignment.forEach((consignment)=>{
              sendDeliveryPartner(consignment);
          })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })

  schedule.schedule('0 17 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          console.log("Inside Consignments Data")
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          console.log('Todays Consignments',todays_consignment)
  
          todays_consignment.forEach((consignment)=>{
              sendDeliveryPartner(consignment);
          })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })


  schedule.schedule('0 18 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          console.log("Inside Consignments Data")
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          console.log('Todays Consignments',todays_consignment)
  
          todays_consignment.forEach((consignment)=>{
              sendDeliveryPartner(consignment);
          })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })


  schedule.schedule('0 19 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          console.log("Inside Consignments Data")
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          console.log('Todays Consignments',todays_consignment)
  
          todays_consignment.forEach((consignment)=>{
              sendDeliveryPartner(consignment);
          })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })


  schedule.schedule('0 20 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          console.log("Inside Consignments Data")
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          console.log('Todays Consignments',todays_consignment)
  
          todays_consignment.forEach(async (consignment)=>{
              const order_id = sendDeliveryPartner(consignment);
              await updateConsignmentStatus(token.tokenAuth.token,"Courier Assigned",consignment.consignmentId,order_id)
          })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })

app.listen(port, () => console.log(`Server running on port ${port}`))