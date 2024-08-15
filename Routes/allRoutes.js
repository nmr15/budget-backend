const express = require("express");
let allRouter = express.Router();
const { UserModel, BudgetModel } = require("../Models/AllSchemas");

// Get all data
allRouter.get("/getBudgets", async(req,res) =>
{
  try
  {
    const budgetData = await BudgetModel.find();
    res.send(budgetData);
  }
  catch(error)
  {
    res.status(500).send(error);
  }
  
});

allRouter.post("/addBudget", async(req, res) =>
{
  const { name, username, budget, expenses } = req.body;

  try
  {
    item = new BudgetModel({ name, username, budget, expenses});
    let newItem = await item.save();
  }
  catch(error)
  {
    console.error(error);
  }
});