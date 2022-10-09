const express = require('express')
const schedule = require('node-cron')
const app = express()
const getAdminToken = require('./utils/getToken')
const sendDeliveryPartner = require('./utils/sendDeliveryPartner')
const port = process.env.PORT || 3000
const getConsignmentsDetails = require('./utils/fetchConsignments')
const moment = require('moment')
const updateConsignmentStatus = require('./utils/changeConsignmentStatus')

console.log(`System Current Time & Date is ${new Date()}`)


const formatDate = (date)=>{
    let correct_date = moment(date).utcOffset("+05:30").format()
    console.log(correct_date)
    return correct_date;
}

schedule.schedule('5 9 * * *', async function(){
  let token = await getAdminToken();
 
    
    if(token.tokenAuth.token){
        
        const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
    if(consignments_data){
        
        const today = new Date()
        
        const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
            let isTodayDate = formatDate(c.scheduleDate)
            return (c.scheduleDate &&  c.deliveryStatus==="PICKUP_REQUESTED" && 
            new Date(isTodayDate).getHours()==today.getHours()+1 &&
            new Date(isTodayDate).getDate()==today.getDate() &&
            new Date(isTodayDate).getMonth()==today.getMonth()
            && new Date(isTodayDate).getFullYear()==today.getFullYear())

        
        
        });
        

        todays_consignment.forEach(async (consignment)=>{
            const order_id = await sendDeliveryPartner(consignment);
            if(order_id){
                await updateConsignmentStatus(token.tokenAuth.token,"Courier Assigned",consignment.consignmentId,order_id)
            }
        })
    
    }

    
   
   
    //await dailyAlert('11 AM');
    }
})

schedule.schedule('5 10 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
      if(consignments_data){
          console.log(consignments_data.allConsignments.allConsignmentsDetails)
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate && c.deliveryStatus==="PICKUP_REQUESTED" && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())

          
          });
          
  
          todays_consignment.forEach(async (consignment)=>{
            const order_id = await sendDeliveryPartner(consignment);
            if(order_id){
                await updateConsignmentStatus(token.tokenAuth.token,"Courier Assigned",consignment.consignmentId,order_id)
            }
        })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })


  schedule.schedule('5 11 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate &&  c.deliveryStatus==="PICKUP_REQUESTED" && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          
  
          todays_consignment.forEach(async (consignment)=>{
            const order_id = await sendDeliveryPartner(consignment);
            if(order_id){
                await updateConsignmentStatus(token.tokenAuth.token,"Courier Assigned",consignment.consignmentId,order_id)
            }
        })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })

  schedule.schedule('5 12 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate &&  c.deliveryStatus==="PICKUP_REQUESTED" && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          
  
          todays_consignment.forEach(async (consignment)=>{
            const order_id = await sendDeliveryPartner(consignment);
            if(order_id){
                await updateConsignmentStatus(token.tokenAuth.token,"Courier Assigned",consignment.consignmentId,order_id)
            }
        })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })



  schedule.schedule('5 13 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate &&  c.deliveryStatus==="PICKUP_REQUESTED" && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          
  
          todays_consignment.forEach(async (consignment)=>{
            const order_id = await sendDeliveryPartner(consignment);
            if(order_id){
                await updateConsignmentStatus(token.tokenAuth.token,"Courier Assigned",consignment.consignmentId,order_id)
            }
        })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })


  schedule.schedule('5 14 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate &&  c.deliveryStatus==="PICKUP_REQUESTED" && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          
  
          todays_consignment.forEach(async (consignment)=>{
            const order_id = await sendDeliveryPartner(consignment);
            if(order_id){
                await updateConsignmentStatus(token.tokenAuth.token,"Courier Assigned",consignment.consignmentId,order_id)
            }
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
          
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate &&  c.deliveryStatus==="PICKUP_REQUESTED" && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
          });
          
  
          todays_consignment.forEach(async (consignment)=>{
            const order_id = await sendDeliveryPartner(consignment);
            if(order_id){
                await updateConsignmentStatus(token.tokenAuth.token,consignment.consignmentId,"Courier Assigned",order_id)
            }
        })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })


  schedule.schedule('5 16 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate &&  c.deliveryStatus==="PICKUP_REQUESTED" && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          
  
          todays_consignment.forEach(async (consignment)=>{
            const order_id = await sendDeliveryPartner(consignment);
            if(order_id){
                await updateConsignmentStatus(token.tokenAuth.token,"Courier Assigned",consignment.consignmentId,order_id)
            }
        })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })

  schedule.schedule('5 17 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate &&  c.deliveryStatus==="PICKUP_REQUESTED" && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          
  
          todays_consignment.forEach(async (consignment)=>{
            const order_id = await sendDeliveryPartner(consignment);
            if(order_id){
                await updateConsignmentStatus(token.tokenAuth.token,"Courier Assigned",consignment.consignmentId,order_id)
            }
        })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })


  schedule.schedule('5 18 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate &&  c.deliveryStatus==="PICKUP_REQUESTED" && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          
  
          todays_consignment.forEach(async (consignment)=>{
            const order_id = await sendDeliveryPartner(consignment);
            if(order_id){
                await updateConsignmentStatus(token.tokenAuth.token,"Courier Assigned",consignment.consignmentId,order_id)
            }
        })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })


  schedule.schedule('5 19 * * *', async function(){
    let token = await getAdminToken();
   
      
      if(token.tokenAuth.token){
          
          const consignments_data = await getConsignmentsDetails(token.tokenAuth.token);
          console.log('Cosignments',consignments_data.allConsignments.allConsignmentsDetails)
      if(consignments_data){
          
          const today = new Date()
          
          const todays_consignment = consignments_data.allConsignments.allConsignmentsDetails.filter((c)=>{
              let isTodayDate = formatDate(c.scheduleDate)
              return (c.scheduleDate &&  c.deliveryStatus==="PICKUP_REQUESTED" && 
              new Date(isTodayDate).getHours()==today.getHours()+1 &&
              new Date(isTodayDate).getDate()==today.getDate() &&
              new Date(isTodayDate).getMonth()==today.getMonth()
              && new Date(isTodayDate).getFullYear()==today.getFullYear())
  
          
          
          });
          
  
          todays_consignment.forEach(async (consignment)=>{
            const order_id = await sendDeliveryPartner(consignment);
            if(order_id){
                await updateConsignmentStatus(token.tokenAuth.token,"Courier Assigned",consignment.consignmentId,order_id)
            }
        })
      
      }
  
      
     
     
      //await dailyAlert('11 AM');
      }
  })


  app.get("/",(req,res)=>{
    console.log("Schedular is running")
  })


app.listen(port, () => console.log(`Server running on port ${port}`))