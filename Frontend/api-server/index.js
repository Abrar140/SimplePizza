const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const data= require("./pizza.json")

app.get("/api/pizza", (req, res)=>{
    res.json(data.pizza)
})
let cart=[];
let feedback=[];
app.post("/api/cart", (req,res)=>{
    cart=req.body;
    setTimeout(()=>res.status(201).send(),20)
})
app.get("/api/cart", (req,res)=>res.send(cart))


app.post("/api/feedback", (req,res)=>{
    console.log(req.body)
    feedback.req.body;

    setTimeout(()=>res.status(201).send(),20)
})
app.get("/api/feedback", (req,res)=>res.send(feedback))


let favourite=[];
app.post("/api/favourite", (req,res)=>{
    favourite=req.body;
    setTimeout(()=>res.status(201).send(),20)
})
app.get("/api/favourite", (req,res)=>res.send(favourite))







// const users = {
//   "a@g.com": {
//     firstName: "M",
//     lastName: "Abrar",
//     email: "a@g.com",
//     password: "123",
//   },
//   "a2@g.com": {
//     firstName: "Afzal",
//     lastName: "Gillani",
//     email: "a2@g.com",
//     password: "asd",
//   },
// };
// let list=[];

// app.get("/api/employee", (req, res)=>{
// let employees = [
//   {
//     id: 1,
//     name: "John Doe",
//     department: "Engineering",
//     phoneNumber: "0300-1234567",
//     salary: 75000,
//     incrementedSalary: 82500
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     department: "Management",
//     phoneNumber: "0321-9876543",
//     salary: 90000,
//     incrementedSalary: 90000   // no increment
//   },
//   {
//     id: 3,
//     name: "Ali Khan",
//     department: "Work",
//     phoneNumber: "0345-6789123",
//     salary: 45000,
//     incrementedSalary: 49500
//   },
//   {
//     id: 4,
//     name: "Sara Ahmed",
//     department: "Engineering",
//     phoneNumber: "0312-4567890",
//     salary: 80000,
//     incrementedSalary: 88000
//   },
//   {
//     id: 5,
//     name: "Michael Lee",
//     department: "Work",
//     phoneNumber: "0301-2345678",
//     salary: 40000,
//     incrementedSalary: 40000   // no increment
//   },
//   {
//     id: 6,
//     name: "Emily Davis",
//     department: "Management",
//     phoneNumber: "0333-7654321",
//     salary: 95000,
//     incrementedSalary: 104500
//   },
//   {
//     id: 7,
//     name: "Ahmed Raza",
//     department: "Engineering",
//     phoneNumber: "0346-2345678",
//     salary: 70000,
//     incrementedSalary: 77000
//   },
//   {
//     id: 8,
//     name: "Sophia Khan",
//     department: "Work",
//     phoneNumber: "0307-9871234",
//     salary: 42000,
//     incrementedSalary: 42000   // no increment
//   },
//   {
//     id: 9,
//     name: "David Johnson",
//     department: "Engineering",
//     phoneNumber: "0342-6781234",
//     salary: 85000,
//     incrementedSalary: 93500
//   },
//   {
//     id: 10,
//     name: "Fatima Noor",
//     department: "Management",
//     phoneNumber: "0315-9988776",
//     salary: 88000,
//     incrementedSalary: 88000   // no increment
//   },
//   {
//     id: 11,
//     name: "Omar Farooq",
//     department: "Work",
//     phoneNumber: "0328-8899776",
//     salary: 46000,
//     incrementedSalary: 50600
//   },
//   {
//     id: 12,
//     name: "Linda Brown",
//     department: "Engineering",
//     phoneNumber: "0311-2233445",
//     salary: 79000,
//     incrementedSalary: 79000   // no increment
//   },
//   {
//     id: 13,
//     name: "Hassan Ali",
//     department: "Management",
//     phoneNumber: "0309-4455667",
//     salary: 93000,
//     incrementedSalary: 102300
//   },
//   {
//     id: 14,
//     name: "Maryam Iqbal",
//     department: "Work",
//     phoneNumber: "0331-1122334",
//     salary: 47000,
//     incrementedSalary: 51700
//   },
//   {
//     id: 15,
//     name: "Chris Evans",
//     department: "Engineering",
//     phoneNumber: "0341-5566778",
//     salary: 82000,
//     incrementedSalary: 90200
//   },
//   {
//     id: 16,
//     name: "Ayesha Siddiqui",
//     department: "Management",
//     phoneNumber: "0305-6677889",
//     salary: 91000,
//     incrementedSalary: 91000   // no increment
//   },
//   {
//     id: 17,
//     name: "Zain Malik",
//     department: "Work",
//     phoneNumber: "0344-7788990",
//     salary: 44000,
//     incrementedSalary: 44000   // no increment
//   },
//   {
//     id: 18,
//     name: "George Wilson",
//     department: "Engineering",
//     phoneNumber: "0319-3344556",
//     salary: 86000,
//     incrementedSalary: 94600
//   },
//   {
//     id: 19,
//     name: "Hira Fatima",
//     department: "Management",
//     phoneNumber: "0320-2233114",
//     salary: 94000,
//     incrementedSalary: 103400
//   },
//   {
//     id: 20,
//     name: "Imran Shah",
//     department: "Work",
//     phoneNumber: "0335-8899001",
//     salary: 48000,
//     incrementedSalary: 48000   // no increment
//   }
// ];

//   res.send(employees)

// })

// app.post("/api/sign-in", (req, res) => {
//   const user = users[req.body.email];
//   if (user && user.password === req.body.password) {
//     res.status(200).send({
//       userId: user.userId,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       email: user.email,
//     });
//   } else {
//     res.status(401).send("Invalid user credentials.");
//   }
// });



app.listen(8081, () => console.log("API Server listening on port 8081!"));