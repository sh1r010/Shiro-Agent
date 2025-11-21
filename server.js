const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { analyzTechnicalSEO } = require("./Agent/Shiro-Scan-Core");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🚀 Shiro Agent работает!",
    version: "1.0",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Shiro Agent запущен на http://localhost:${PORT}`);
});

app.post('/analyze', async (req,res) => {
  const {url} = req.body
  console.log('✅ Роут /analyze вызван!', req.body);
  const result = await analyzTechnicalSEO(url)

  return res.json(result)
})



