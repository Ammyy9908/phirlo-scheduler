const axios = require('axios');

const phirlo_address = {
    "name": "Rohan",
    "phone":"919041333444",
    "address":"f-301,1-1 3rd Floor, CH Prem,Himmat Singh Marg, opposite Portside Cafe, Nai Basti, Lado Sarai, New Delhi, India-110030"
}






async function sendDeliveryPartner(consignment){
    console.log(consignment)
    destination_start_time = new Date(new Date(consignment.slot["end"]).getTime()+2*60*60*1000)
    destination_end_time = new Date(new Date(consignment.slot["end"]).getTime()+3*60*60*1000)
    try{
        const r = await axios.post(`https://robotapitest-in.borzodelivery.com/api/business/1.2/create-order`,{

            "matter": "Clothes",
            "total_weight_kg":1,
            "vehicle_type_id":8,
            "points":[
    {"address":consignment["address"],
    "contact_person":{"phone":consignment["mobile"]},
     "required_start_datetime":consignment.slot["start"],
     "required_finish_datetime":consignment.slot["end"],
    },
    {"address":phirlo_address["address"],
    "contact_person":{"phone":phirlo_address["phone"]},
     "required_start_datetime":destination_start_time,
     "required_finish_datetime":destination_end_time,
    }
    ]
        },
        {
            headers:{
                "X-DV-Auth-Token":"8352C1E976EC2A14ABB75D157F457BCE14E94749"
            }
        });

        console.log(r.data)


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