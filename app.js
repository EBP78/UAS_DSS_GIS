const express = require("express");
const app = express();
const topsis = require("./routes/topsis");
const port = process.env.PORT || 5000;

// parse body
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.listen(port);

app.use("/topsis", topsis);
