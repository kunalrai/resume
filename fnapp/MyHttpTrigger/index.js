// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     const name = (req.query.name || (req.body && req.body.name));
//     const responseMessage = name
//         ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//         : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: responseMessage
//     };
// }

const twilio = require('twilio');

module.exports = async function (context, req) {
    context.log('Twillo JavaScript HTTP trigger function processed a request.');

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = new twilio(accountSid, authToken);

    const message = await client.messages.create({
        body: req.body.message,
        from: 'whatsapp:+14155238886', // Twilio WhatsApp sandbox number
        to: 'whatsapp:' +919911566229 // Replace with the user's WhatsApp number
    });

    context.res = {
        status: 200,
        body: 'Message sent successfully!'
    };
};
