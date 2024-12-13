// server.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500", // 특정 출처만 허용
    methods: ["OPTIONS", "POST", "GET", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(express.text());

// 초기 데이터
let data = { message: "여러분 화이팅!" };

app.get("/message", (req, res) => {
  res.json(data); // JSON.string을 지우고 json
});

app.post("/message", (req, res) => {
  data.message = req.body;
  res.send(`받은 POST 데이터: ${res.body}`);
});

app.put("/message", (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

app.delete("/message", (req, res) => {
  data = {};
  res.send("데이터가 삭제되었습니다.");
});

// server 대신 app
app.listen(3000, () => {
  // 서버 실행 시킬 때 listen, 3000번 포트로 열어주기
  console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
