import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    const { clientName, clientEmail, clientPhone, projectTitle, message } = req.body;

    await sendgrid.send({
      to: "contactme@daverichardson.ca", // Your email where you'll receive emails
      from: "info@viralvantage.ca", // your website email address here
      subject: `[Lead from ViralVantage website] : ${projectTitle}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>Viral Vantage</title>
        <meta name="description" content="Viral Vantage: A Social Media Marketing Agency">
        <meta name="author" content="Viral Vantage Agency">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
        </div>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
        <h3>You've got a new mail from ${clientName}, their email is: ️${clientEmail} </h3>
        <p>You can phone them at: ${clientPhone}</p>
        <div style="font-size: 16px;">
        <p>Message:</p>
        <p>${req.body.message}</p>
        <br>
        </div>              
        </div>
      </body>
      </html>`,
    })

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default sendEmail;