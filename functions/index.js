const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();
sgMail.setApiKey("YOUR_SENDGRID_API_KEY"); // Replace with your API key

exports.notifyAdminOnValueChange = functions.database.ref("/yourKeyPath").onUpdate(async (change, context) => {
    const newValue = change.after.val();

    if (newValue === 100) {
        const msg = {
            to: "rushmistemiyla2003@gmail.com",  // Replace with admin email
            from: "westabin414@gmail.com",
            subject: "Alert: Key Value Reached 100",
            text: "The key in Firebase Realtime Database has reached a value of 100.",
        };

        try {
            await sgMail.send(msg);
            console.log("Email sent to admin.");
        } catch (error) {
            console.error("Error sending email:", error);
        }
    }
});