const express = require('express')
const app = express()

let number = 0;
app.get('/',(req, res) => res.send('ワタル珈琲のプリンは美味しい!'))
app.get('/cat',(req, res) => res.send('脇町には猫が住む道がある！!'))
app.get('/hotspring',(req, res) => {
  console.log('=======');
  console.log(req);
  res.send('サウナと水風呂は！!')
})
app.get('/id-test/:id',(req, res) => {
  console.log(req.params);
  number=number +1;
  
  res.send(`${req.params.id}ようこそ！あなたは${number}人目のお客様です`);
})

app.use('/html', express.static('./html'));



app.listen(3000, () => console.log('example app listening on port 3000!'))
