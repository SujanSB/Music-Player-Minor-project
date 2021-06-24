const mongoose = require("mongoose")

const HomeSchema= new mongoose.Schema({
    // music based on category
    // -genre wise
    // -artist wise
    // -on the home page with pop up model user have to select the type of music he want to listen
    // then he will choose at least 3 type(by fav artist,by his moood and by gerne ) 
    // default 
    // (top 10 of today)
    // 10 category to show(at lest one should be play)
    // at the time special vanera 
    // 

    
})

module.exports = mongoose.model("Home", homeSchema);
