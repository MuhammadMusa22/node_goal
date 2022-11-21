const express = require('express');
const userRouter = require('./routes/user');
const orderRouter = require('./routes/order');
const shopRouter = require('./routes/shop');
var PORT = process.env.PORT || 4000;

const app = express();


app.use(express.json());


app.use('/api', userRouter);
app.use('/api', orderRouter);
app.use('/api', shopRouter);

app.use(function (err, req, res, next) {
    res.status(err.status || 500).send(err)
});


app.listen(PORT, () => {
    console.log("Server is Listening on port :", PORT);
});





