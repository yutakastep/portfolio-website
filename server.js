const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.post("/contact", (req, res) => {
    console.log(req.body);

    res.json({
        success: true
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});