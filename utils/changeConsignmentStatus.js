const axios  =  require("axios");

async function updateConsignment(token,id,status,points,order_id){
    try {
        const r = await axios.post(
          'https://api.phirlo.in/graphql',
          {
            query: `mutation updateConsignmentStatus($consignmentId:String!,$status:String!,$ ) {
                updateConsignmentStatus(consignmentId:$consignmentId,status:$status,points:$points){
                    
                    success
    
                  }
              }
              
              `,
              variables: {
                
                consignmentId:id,
                status:status,
                points:points,
                order_id:order_id
            }
          },

          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'JWT ' + token,
            },
          },
        )
        console.log('Potential User Response=>', r.data.data)
        const errors = r.data.errors
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


module.exports = updateConsignment;