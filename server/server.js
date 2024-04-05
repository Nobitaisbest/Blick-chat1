const express = require("express");
const cors = require("cors");
const app = express();
const port = 1818;
app.use(cors());
app.get("/api/home", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
