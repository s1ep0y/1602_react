const express = require("express");
const router = new express.Router();
const Order = require("../models/order");
const transporter = require("../emailSend/emailSend");

const axios = require("axios");

router.post("/order", async (req, res) => {
    const order = new Order(req.body);
    order.items = JSON.parse(req.body.items);
    try {
        let checkoutItems = [];

        let description = JSON.stringify(order.items, (key, items) => {
            let lines = "";

            items.forEach(item => {
                lines +=
                    " " +
                    item.product.name +
                    " – Размер: " +
                    item.size +
                    ", Количество: " +
                    item.qty +
                    " | ";

                checkoutItems.push({
                    description: item.product.name,
                    quantity: item.qty,
                    amount: {
                        currency: "RUB",
                        value: item.product.sale === 0 ?
                            item.product.price * item.qty : item.product.sale * item.qty
                    },
                    vat_code: 1
                });
            });

            return lines;
        });

        const idempotence = `f${(~~(Math.random() * 1e8)).toString(16)}`;

        const yandexPayment = {
            amount: {
                currency: "RUB",
                value: order.totalPrice
            },
            payment_method_data: {
                type: "bank_card"
            },
            receipt: {
                email: order.buyerEmail,
                tax_system_code: 2,
                items: checkoutItems
            },
            capture: true,
            confirmation: {
                type: "redirect",
                return_url: "http://1602.ru/"
            },
            description: `ID заказа: ${order._id} | Ключ в платеже: ${idempotence}`
        }

        const shopId = '643396';
        const shopPass = 'live_OjpB1CHfXEQnxymVhV4_C0PIFRkYyYePSpMlQTRoWYw';

        axios.post(
                'https://payment.yandex.net/api/v3/payments',
                yandexPayment, 
                {
                    auth: {
                        // 'username': '643396',
                        'username': shopId,

                        'password': shopPass
                    },
                    headers: {
                        "Content-Type": "application/json",
                        "Idempotence-Key": idempotence
                    }
                }
            ).then(r => {
                // console.log(r);
                res.status(201).send(r.data);
                order.save()
                // transporter.sendMail({
                //     from: '16store02@gmail.com',
                //     to: order.buyerEmail,
                //     subject: `Ваш заказ № ${order._id} на сайте 1602 успешно оформлен`,
                //     text: `Ваш заказ № ${order._id} на сайте 1602 успешно оформлен и принят в работу`,
                //     html: `<p>Ваш заказ № ${order._id} на сайте 1602 успешно оформлен и принят в работу</p><p>${description}</p>`
                // }, function (error, info) {
                //     if (error) {
                //         console.log(error);
                //     } else {
                //         console.log('Email sent: ' + info.response);
                //     }}
                // );
                transporter.sendMail({
                    from: '16store02@gmail.com',
                    to: '16store02@gmail.com',
                    subject: `Ваш заказ № ${order._id} на сайте 1602 успешно оформлен`,
                    text: `Ваш заказ № ${order._id} на сайте 1602 успешно оформлен и принят в работу`,
                    html: `<p>Ваш заказ № ${order._id} на сайте 1602 успешно оформлен и принят в работу</p><p>${description}</p>`
                }, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }}
                );
            })
            .catch(e => {
                console.log(e)
                res.status(201).send(
                    e.data
                )
            })
            
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

//PART BELOW DOESNT ORK

// router.get('/order', async (req, res) => {
//     console.log('get try')
//     try {
//         const order = await Order.findAll({})
//         console.log(order)
//         res.send(order)
//     } catch (e) {
//         res.status(500).send()
//     }
// })


// router.get('/order/:id', async (req, res) =>{
//     const _id = req.params.id

//     try{
//         const order = await Order.findById(_id)
//         if(!order){
//             return res.status(404).send
//         }
//         res.send(order)
//     }catch(e){
//         res.status(500).send()
//     }
// })

module.exports = router;