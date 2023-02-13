const express = require('express');
const userRouter = require('./routes/user');
// const orderRouter = require('./routes/order');
// const shopRouter = require('./routes/shop');
var PORT = process.env.PORT || 4000;

const app = express();


app.use(express.json());


app.use('/api', userRouter); //         /api
// app.use('/api', orderRouter); //        /api/users/orders
// app.use('/api', shopRouter);  //        /api/users/shops

// app.use(function (err, req, res, next) {
//     res.status(err.status || 500).send(err)
// });


app.use((err, req, res, next) => {
    // for now log the error and return 500; need to handle it differently in future
    if (res.headersSent) {
      return next(err);
    }
    console.log(err.message);
    return res.status(err.status || err.code || 500).send({
      code: err.status || err.code || 500,
      success: false,
      message: err.message,
    });
  });

app.listen(PORT, () => {
    console.log("Server is Listening on port :", PORT);
});





