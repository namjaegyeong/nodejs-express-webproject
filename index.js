const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("hello web!");
});

app.listen(port, () => {
    console.log(`웹 서버를 열었습니다. ${port}`)
});