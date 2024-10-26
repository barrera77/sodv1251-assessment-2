const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

// Serve static assets in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/public")));
  app.use("/src", express.static(path.join(__dirname, "../frontend/src")));
  app.use(
    "/components",
    express.static(path.join(__dirname, "../frontend/src/components"))
  );
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../frontend", "public", "index.html")
    );
  });
}

//listen  on port 5000
app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on http://localhost:5000")
);
