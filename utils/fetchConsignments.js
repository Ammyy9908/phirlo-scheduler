const axios  = require('axios');


async function getConsignmentsDetails(){
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
                        points
                        deliveryStatus
                        consignmentName
                        noOfItems
                        dateOfPickup
                        dateOfPointsCredited
                        address
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
              'Authorization': `jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNiNzg2MzlAZ21haWwuY29tIiwiZXhwIjoxNjY0NjA5MzAwLCJvcmlnSWF0IjoxNjY0NjA5MDAwfQ.w4FUQfmzp4AGR-a95JRjyeu8jHL4TL9nnYgdfkikhck`,
            },
          },
        )
        const errors = r.data.errors
        console.log(errors)
        if (errors) {
          return false
        } else {
          console.log(r.data.data)
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