import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/run", async (req, res) => {
  const { script, language, versionIndex } = req.body;

  const response = await fetch("https://api.jdoodle.com/v1/execute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clientId: "c3bd2061fd1568b7a3b8e8d2511e8311",
      clientSecret: "f507aa388abfc407320479f7e061c970ea5b91a048278ad155653101a87176f3",
      script,
      language,
      versionIndex
    })
  });

  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
