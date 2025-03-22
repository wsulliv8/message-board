const express = require("express");
const path = require("path");
const app = express();
const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");

const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newRouter);
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log("Server running...");
});
