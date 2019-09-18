const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
  sgMail.send({
    to:email,
    from: 'avinashkumar_arvind@srmuniv.edu.in',
    subject: 'Welcome to the community',
    text: `Welcome to the Community,${name}. Let us know how you feel about the platform`,
    //html:
  })
}

const sendCancelationEmail = (email,name)=>{
  sgMail.send({
    to : email,
    from: 'avinashkumar_arvind@srmuniv.edu.in',
    subject: `GoodBye ${name}`,
    text: `GoodBye ${name}. We hope to see you again.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
