
const app = require("./app");
const port = process.env.PORT || 3000

// const morgan = require("morgan");
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
