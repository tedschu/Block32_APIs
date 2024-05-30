const express = require("express");

const app = express();
app.use(express.json());

const baseQuery = `/api/`;

app.get(baseQuery, (req, res) => {
  res.json({
    success: true,
  });
});

app.use(baseQuery + "flavors", require("./flavors"));

app.listen(8080, () => {
  console.log("app is running at port 8080.");
});
