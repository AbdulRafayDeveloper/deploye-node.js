const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/get', (req, res) => {
    res.send('Ci CD - Deployed on AWS Successfully 1');
});

app.get('/api/test-api', (req, res) => {
    res.send({ messg: 'Ci CD - New Deployed on AWS Successfully 2' });
});

app.get('/api/run-new-test', (req, res) => {
    res.send({ messg: 'Ci CD - New Deployed on AWS Successfully 3' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
