var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '16store02@gmail.com',
        pass: 'KyHGg51f5'
    }
});





module.exports = transporter