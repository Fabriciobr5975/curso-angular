const express = require("express");
const cors = require("cors");
const multipart = require("connect-multiparty");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

const multipartMiddleware = multipart({ uploadDir: "./uploads" });

app.post("/upload", multipartMiddleware, (req, resp) => {
  const files = req.files;
  console.log(files);
  resp.json({ message: files });
});

app.get("/downloadExcel", (req, resp) => {
  resp.download("./uploads/report.xlsx");
});

app.get("/downloadPDF", (req, resp) => {
  resp.download("./uploads/report.pdf");
});

app.use((err, req, resp, next) => resp.json({ error: err.message }));

app.listen(8000, () => console.log("Servidor porta 8000"));
