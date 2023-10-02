// server.js
const express = require('express');
const stripe = require('stripe')('sk_test_51NwhZLSG2DdjK2ieCeLaRfwQSNHHM95Cnb1Lr9VMdLNvpmLeZ1kifO4rQL6QT3dRYu2Y31rNiWebcsxy74ntZsqP00lXnPmRL9'); // Replace with your Stripe Secret Key
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/payment', async (req, res) => {
  const { payment_method, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects the amount in cents
      currency: 'usd',
      payment_method,
      confirm: true,
    });

    res.json({ success: true, message: 'Payment successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Payment failed' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${'http://localhost:3001'}`);
});
