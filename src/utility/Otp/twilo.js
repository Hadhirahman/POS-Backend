const { Client } = require("twilio/lib/base/BaseTwilio");



const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_AUTH; // changed authId to authToken
const serviceSid =process.env.TWILIO_SERVICE_SID;
// const countryCode = "+91"; // changed to string
const client = require("twilio")(accountSid, authToken); // corrected Twilio initialization



function sentOtp(phoneNumber,res){
    try{
        client.verify.v2
            .services(serviceSid)
            .verifications
            .create({ to: `+91${phoneNumber}`, channel: "sms" })
            .then((verification) => {
                console.log("OTP sent successfully", verification.status);
                if (verification.status === "pending") {
                    res.json({ status: 200, message: 'OTP sent successfully' });
                } else {
                    res.json({ status: 404, message: "OTP not sent" });
                }
            })
            .catch((error) => {
                console.error('Error sending OTP:', error);
                res.status(500).json({ status: 500, message: 'Failed to send OTP' });
            });
    } catch (error) {
        console.error('Error from Twilio:', error);
        res.status(500).json({ status: 500, message: 'Failed to send OTP' });
    }
}

module.exports=sentOtp