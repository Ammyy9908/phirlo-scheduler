const  axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

async function getAdminToken(){

  console.log("Getting Admin Token");
    console.log(process.env.ADMIN_USERNAME);
    console.log(process.env.ADMIN_PASSWORD);
  
    try {
        const r = await axios.post(
          'https://api.phirlo.in/graphql',
          {
            query: `mutation tokenAuth($email: String!, $password: String!) {
                tokenAuth(email: $email, password: $password) {
                   token
                  }
              }
              
              `,
              variables: {
                    email:process.env.ADMIN_USERNAME,
                    password:process.env.ADMIN_PASSWORD
            }
          },

          {
            headers: {
              'Content-Type': 'application/json',
              
            },
          },
        )
        
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


module.exports = getAdminToken;