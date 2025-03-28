const express = require('express');
const compression = require('compression');

const app = express();

// 啟用Gzip壓縮
app.use(compression());

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});