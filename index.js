const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/get', (req, res) => {
    res.send('Deployed on AWS Successfully!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
