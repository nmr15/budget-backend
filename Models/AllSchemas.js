const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
    }
  }
);

const BudgetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    expenses: [{
      name: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      }
    }]
  }
);

const UserModel = mongoose.model('User', UserSchema);
const BudgetModel = mongoose.model('Budget', BudgetSchema);
module.exports = { UserModel, BudgetModel };