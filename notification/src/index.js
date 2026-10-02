const express = require("express");

const app = express();

const PORT = 3001;

app.get("/api/notifications", (req, res) => {
    res.json({
        service: "notification",
        message: "Hello from Notification Skaffold!"
    });
});x

app.listen(PORT, () => {
    console.log(`Notification service running on port ${PORT}`);
});