const express = require("express");
const router = express.Router();

router.post("/checkout", async (req, res) =>{
    console.log(req.body)
    const items = req.body.items
    let lineItems = [];
    items.forEach((item)=>{
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        modeL: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

module.exports = router;