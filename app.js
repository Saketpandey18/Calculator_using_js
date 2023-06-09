const express = require('express');
const app = express();
app.use(express.json());

app.get('/add', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    if(isNaN(a) || isNaN(b)){ //req.query.a ==null || req.query.a==undefined || req.query.a==""
        console.log("not a valid input");
        res.send({error:"Please provide valid input"});
        return
    }
    const sum=a+b;
    console.log(sum);
    res.send({ sum });
})

app.get('/sub', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if(isNaN(a) || isNaN(b)){
    console.log("not a valid input");
    res.send({error:"Please provide valid input"});
    return
  }
  const diff=a-b;
  console.log(diff)
  res.send({ diff });
});

app.get('/multiply', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if(isNaN(a)|| isNaN(b)){
    console.log("not a valid input");
    res.send({error:"Please provide valid input"});
    return
  }
  const multiply=a*b;
  console.log(multiply)
  res.send({ multiply });
});

app.get('/divide', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if(isNaN(a)|| isNaN(b)){
    console.log("not a valid input");
    res.send({error:"Please provide valid input"});
    return
  }
  const divide=a/b;
  console.log(divide)
  res.send({ divide });
});

app.get('/addList',(req,res) => {
  const num= req.query.Number;
  const numbers = num.split(",");
  console.log(numbers);
  let sum=0;
  for(let i=0;i<numbers.length; i++){
    sum+= Number(numbers[i]);
  }
  res.send({sum});
})

app.get('/multiplyList',(req,res) => {
  const num= req.query.Number;
  const numbers = num.split(",");
  console.log(numbers);
  let multiply=1;
  for(let i=0;i<numbers.length; i++){
    if(isNaN(numbers[i])){
      res.status(400).send({error:"Invalid input"})
      return
    }
    multiply*= Number(numbers[i]);
  }
  res.status(200).send({multiply});
})

app.listen(3002, () => {
  console.log("Listening on port 3002");
});


// To do app backend
// - /getToDoList
// - /deleteItem
// - /addItem
// - /updateItem