const { Client } = require("twilio/lib/base/BaseTwilio");



const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_AUTH; // changed authId to authToken
const serviceSid =process.env.TWILIO_SERVICE_SID;
// const countryCode = "+91"; // changed to string
const client = require("twilio")(accountSid, authToken); // corrected Twilio initialization



function sentOtp(phoneNumber){
    try{
        client.verify.v2
            .services(serviceSid)
            .verifications.create({to:`+91${phoneNumber}`,channel:"sms"})
            .then((verification)=>console.log(verification.status))
            .catch((error)=>console.log('error',error))
    }catch{
        console.log('error from twilio',error);
    }
}

module.exports=sentOtp