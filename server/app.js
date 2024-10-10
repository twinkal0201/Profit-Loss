const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Transaction=require("./Schema");
const app = express();



// Middleware

app.use(cors());
app.use(bodyParser.json());

// MongoDB connecna akshttion
mongoose.connect("mongodb+srv://tinkal23031701040:23031701040@twin.zmbir.mongodb.net/transactions", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));


app.get('/transactions', async (req, res) => {
    try {
        const result = await Transaction.find();
        res.send(result);
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.post('/transactions/add',async(req,res)=>{
    const newEntry=new Transaction ({...req.body});
    const result= await newEntry.save();
    res.send(result);
});

app.get('/transactions/profit-loss/date-wise', async (req, res) => {
    const { startDate, endDate } = req.query;

    try {
        const transactions = await Transaction.find({
            date: {
                $gte: new Date(startDate), // Greater than or equal to start date
                $lte: new Date(endDate)    // Less than or equal to end date
            }
        });

        const totalSales = transactions.reduce((acc, transaction) => acc + (transaction.sale || 0), 0);
        const totalExpenses = transactions.reduce((acc, transaction) => acc + (transaction.expense || 0), 0);
        const profitLoss = totalSales - totalExpenses;

        res.json({
            totalSales,
            totalExpenses,
            profitLoss,
            transactions, // You can also send the transactions if needed
        });
    } catch (error) {
        console.error("Error calculating profit and loss:", error);
        res.status(500).send("Internal Server Error");
    }
});


// Get profit/loss for a specific date
app.get('/transactions/profit-loss/date/:date', async (req, res) => {
    const { date } = req.params;

    try {
        // Parse the date from the request, ensuring it's a valid date
        const parsedDate = new Date(date);
        if (isNaN(parsedDate)) {
            return res.status(400).json({ message: 'Invalid date format' });
        }

        // Query the database for the transaction
        const transaction = await Transaction.findOne({ date: parsedDate });

        if (transaction) {
            res.json({
                date: { value: transaction.date.toISOString().split('T')[0] }, 
                sale: transaction.sale,
                expense: transaction.expense,
            });
        } else {
            res.status(404).json({ message: 'No data found for this date' });
        }
    } catch (error) {
        console.error("Error fetching transaction for date:", error);
        res.status(500).send("Internal Server Error");
    }
});
app.listen(5001, () => {
    console.log("sever connected on port 5001");
});

 
// // Routes
// // const transactionsRouter = require('./routes/transactions');
// // app.use('/api/transactions', transactionsRouter);
// app.post("/transictions",async(req,res)=>{
//     const product=new Transaction ({...req.body});
//     const result= await product.save();
//     res.send(result);

// Start server






// Create a new grocery item
// router.post('/grocery-items', async (req, res) => {
//     const { userId, name, price, quantity } = req.body;

//     try { v
//         const newItem = new GroceryItem({ userId, name, price, quantity });
//         await newItem.save();
//         res.status(201).json(newItem);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Get all grocery items for a user
// router.get('/grocery-items/:userId', async (req, res) => {
//     try {
//         const items = await GroceryItem.find({ userId: req.params.userId });
//         res.json(items);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Update a grocery item
// router.put('/grocery-items/:id', async (req, res) => {
//     try {
//         const item = await GroceryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json(item);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Delete a grocery item
// router.delete('/grocery-items/:id', async (req, res) => {
//     try {
//         await GroceryItem.findByIdAndDelete(req.params.id);
//         res.status(204).send();
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// module.exports = router;
