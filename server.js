const express = require('express');
const app = express();

app.get('/', (req, res) => {
    var user = req.query.user
    var password = req.query.password
    if (user == "admin" && password == "admin123") {
        res.send(true)
    } else {
        res.send(false)
    }
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
