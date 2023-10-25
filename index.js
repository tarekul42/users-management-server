const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Users management server is running")
})

app.listen(port)