const express = require('express');
const app = express();
const { sequelize } = require('./models');

app.use(express.json());
app.use('/', require('./routes'));


app.listen(8000, async (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server running on port 8000");
    await sequelize.authenticate();
    console.log("Database connected");
})
