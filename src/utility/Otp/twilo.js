// utility/twilioUtility.js
const twilio = require('twilio');

const accountSid = 'ACcee707d8bdb803d27f310e9a2fbf4a35';
const authToken = 'd0657d3f00a762d06d61a13fcd5b39e6';
const client = twilio(accountSid, authToken);
const twilioPhoneNumber = '+13613101752';

const sendOTPViaTwilio = async (contact, otp) => {
    try {
        await client.messages.create({
            body: `Your OTP is: ${otp}`,
            from: +13613101752,
            to: contact
        });
        console.log(`OTP sent successfully to ${contact}`);
        return true;
    } catch (error) {
        console.error('Error sending OTP:', error);
        return false;
    }
};

module.exports = { sendOTPViaTwilio };
