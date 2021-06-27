import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("<h2> Hi there!  =^_^= <h2>")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
