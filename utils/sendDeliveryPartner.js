const axios = require('axios');
const dotenv = require("dotenv")
const moment = require('moment');

dotenv.config();
const phirlo_address = {
    "name": "Rohan",
    "phone":"919041333444",
    "address":"f-301,1-1 3rd Floor, CH Prem,Himmat Singh Marg, opposite Portside Cafe, Nai Basti, Lado Sarai, New Delhi, India-110030"
}






async function sendDeliveryPartner(consignment){
   
    destination_start_time = moment(consignment.scheduleDate).add(2,'hour').utcOffset("+05:30").format()
    destination_end_time = moment(consignment.scheduleDate).add(3,'hour').utcOffset("+05:30").format()
    
   
    const source_start = moment(consignment.scheduleDate).utcOffset("+05:30").format()
    const source_end = moment(consignment.scheduleDate).utcOffset("+05:30").add(1,'hour').format()
    

    try{
        const r = await axios.post(`${process.env.BORZO_DEV_BASEURL}/create-order`,{

            "matter": "Clothes",
            "total_weight_kg":1,
            "vehicle_type_id":8,
            "points":[
    {"address":consignment["address"],
    "contact_person":{"phone":consignment["mobile"]},
     "required_start_datetime":source_start,
     "required_finish_datetime":source_end,
    },
    {
        "address":phirlo_address["address"],
    "contact_person":{"phone":phirlo_address["phone"]},
        "required_start_datetime":destination_start_time,
        "required_finish_datetime":destination_end_time,
    }   
    ]
        },
        {
            headers:{
                "X-DV-Auth-Token":process.env.BORZO_DEVELOPMENT_KEY
            }
        });

        console.log(r.data)
        const {is_successful} = r.data;
        const {order_id} = r.data.order;
        if(is_successful){
            return order_id;
        }
        else{
            return false;
        }


    }

    catch(e){
        if(e.response && e.response.data){
            console.log(e.response.data)
            const {parameter_errors} =e.response.data;
            console.log(parameter_errors.points)
        }
    }
}

module.exports = sendDeliveryPartner;