import { NextApiRequest, NextApiResponse } from 'next';
import { Twilio } from "twilio";

export default function sendMessage(req: NextApiRequest, res: NextApiResponse) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
    const myNumber = process.env.MY_NUMBER;
    const { message } = req.body;
  // console.log(phone, message);

  if (accountSid && authToken && myNumber && twilioNumber) {

    const client = new Twilio(accountSid, authToken);
    
    
        client.messages
        .create({
            from: twilioNumber,
            to: myNumber,
            body: message,
        })
        .then(() =>
        res.json({
            success: true,
        })
        )
        .catch((error) => {
        console.log(error);
        res.json({
            success: false,
        });
        })
    
    } else {
        console.error(
        "You are missing one of the variables you need to send a message"
        );
    }
}
