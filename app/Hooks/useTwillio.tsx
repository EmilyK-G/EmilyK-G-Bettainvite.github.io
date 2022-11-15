import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const myNumber = process.env.MY_NUMBER;


const useTwillio = (myMessage : string) => {

    if (accountSid && authToken && myNumber && twilioNumber) {
        const client = new Twilio(accountSid, authToken);
        
        const sendConfirmation = ()=>{
            client.messages
          .create({
            from: twilioNumber,
            to: myNumber,
            body: myMessage,
          })
          .then((message) => console.log(message.sid));
        }

        return { sendConfirmation }
      } else {
        console.error(
          "You are missing one of the variables you need to send a message"
        );
      }
}

export default useTwillio