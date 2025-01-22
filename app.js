const express = require('express')
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const app = express()
const port = 3000
const mongourl = "mongodb://localhost:27017";
mongoose
    .connect(mongourl)
    .then(()=>{
        app.listen(port,()=>{
            console.log("server is running on port 3000")
        })
    })
    const expenseSchema = new mongoose.Schema({
        id: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        amount: { type: Number, required: true },
      });
      const expenseModel = mongoose.model("expense-tracker", expenseSchema); //collection name,schema name
      app.use(express.json());
      app.post("/api/expenses", async (req, res) => {
        const { title, amount } = req.body;
        const expense = new expenseModel({ id: uuidv4(), title, amount });
        const savedExpense = await expense.save();
        res.status(200).json(savedExpense);
      });
      
