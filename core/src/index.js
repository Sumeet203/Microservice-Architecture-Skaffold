import express from  "express"
const app = express();

const PORT = 3000;

app.get("/api/core", (req, res) => {
    res.json({
        service: "core",
        message: "Hello from Core Scaffolddddddd!"
    });
});

app.listen(PORT, () => {
    console.log(`Core service running on port ${PORT}`);
});