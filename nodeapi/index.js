const express = require('express'),
    app = express(),
    errorHandler = require('./handlers/error'),
    userRoutes = require('./routes/users');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 8000;

//user routes
app.use('/api', userRoutes);

//when wrong request is performed
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//error handler middleware
app.use(errorHandler);

app.listen(PORT, function () {
    console.log(`Server is starting on port ${PORT}`);
});
