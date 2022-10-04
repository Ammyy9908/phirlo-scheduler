const axios  = require('axios');


async function getConsignmentsDetails(token){
    try {
        const r = await axios.post(
          `https://api.phirlo.in/graphql`,
          {
            query: `query allConsignments {
                allConsignments{
                  totalListed
                  totalTimesPointsCredited
                  totalPending
                  
                    allConsignmentsDetails{
                        name
                        consignmentId
                        id
                        mobile
                        points
                        deliveryStatus
                        consignmentName
                        noOfItems
                        dateOfPickup
                        dateOfPointsCredited
                        address
                        scheduleDate
                        email
                        userWallet{
                          totalCoins
                        }
                      }
                  }
              }
              
              `,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `jwt ${token}`,
            },
          },
        )
        const errors = r.data.errors
        console.log(errors)
        if (errors) {
          return false
        } else {
          return r.data.data
        }
      } catch (e) {
        console.log(e)
        if (e.response && e.response.data) {
          console.log(e.response.data)
          return false
        }
      }
    }


module.exports=getConsignmentsDetails;