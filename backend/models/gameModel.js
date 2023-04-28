const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
  {
    Name: String,
    Platform: String,
    Year_of_Release: Number,
    Genre: String,
    Publisher: String,
    NA_Sales: Number,
    EU_Sales: Number,
    JP_Sales: Number,
    Other_Sales: Number,
    Global_Sales: Number,
    Critic_Score: Number,
    Critic_Count: Number,
    User_Score: Number,
    User_Count: Number,
  },
  { collection: 'gamesData' },
)

module.exports = mongoose.model('gamesData', gameSchema)
