import nodemailder from 'nodemailer';

const html = ({ url, text }) => {
    return `
          <section style="font-family: Arial, sans-serif;">
              <div style="max-width: 700px; margin: auto; border: 2px solid #ddd; padding: 50px 20px; font-size: 110%;">
                  <h2 style="text-align: center; text-transform: capitalize; color: teal;">Welcome to Cloud Image</h2>
                  <p style="line-height: 1.5;">Congratulations! You're almost set to start using Cloud Image.</p>
                  <p style="line-height: 1.5;">Just click on the button below to validate your email address.</p>
  
                  <a href="${url}" style="display: inline-block; padding: 10px 20px; background-color: teal; color: white; text-decoration: none; border-radius: 5px;">${text}</a>
  
                  <p style="line-height: 1.5;">Or copy the link below and paste it into your browser:</p>
  
                  <div style="margin-top: 20px; padding: 10px; background-color: #f4f4f4;">${url}</div></div>
              </div>
          </section>
      `
  }  

const sendEmail = async ({ to, url, text }) => {
    const transporter = nodemailder.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'Cloud Image - Verify Your Email Address',
        html: html({ url, text }),
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
};

export default sendEmail;