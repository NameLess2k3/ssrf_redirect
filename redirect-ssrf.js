const express = require('express');
const app = express();

let reqCounter = 0;

app.get('/', (req, res) => {
    if (reqCounter === 0) {
        reqCounter += 1;
        res.send('an innocent site uwu');
    } else {
        reqCounter -= 1;
        res.redirect('http://localhost:1337/flag');
    }
});

const PORT = 4444;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
});
