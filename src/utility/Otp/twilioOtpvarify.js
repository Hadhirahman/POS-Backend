const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_AUTH;
const client = require('twilio')(accountSid, authToken);

function varfyotp(phoneNumber, otp) {
      try {
            client.verify.v2.services(process.env.TWILIO_SERVICE_SID)
                  .verificationChecks
                  .create({ to: `+91${phoneNumber}`, code: otp })
      .then(verification_check => console.log(verification_check.status))
            .catch((error) => console.log('error', error))

}catch {
      console.log('error from twilio', error);
}
      }

      module.exports=varfyotp