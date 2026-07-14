const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api', (req, res) => {
    res.json({ message: "Hello from Backend Server 🚀" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
