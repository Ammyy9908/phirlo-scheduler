const axios = require('axios');
const DateIST = require('./date');
const moment = require('moment');
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
        const r = await axios.post(`https://robot-in.borzodelivery.com/api/business/1.2/create-order`,{

            "matter": "Clothes",
            "total_weight_kg":1,
            "vehicle_type_id":8,
            "points":[
    {"address":consignment["address"],
    "contact_person":{"phone":consignment["mobile"]},
     "required_start_datetime":moment(consignment.scheduleDate).utcOffset("+05:30").format(),
     "required_finish_datetime":moment(consignment.scheduleDate).utcOffset("+06:30").format(),
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
                "X-DV-Auth-Token":"B7F446872C414F06397D782E6B56E6407BCF81F9"
            }
        });

        console.log(r.data)
        const {is_successful,order_id} = r.data;
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