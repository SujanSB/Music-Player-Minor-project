const mongoose = require('mongoose');
// userpost schema
const userpostScheama = new mongoose.Schema(
    {
        // uploaded post
    
        ogname:{
          type:String,
          default:"Timi ra ma"

        },
        user:{
          type:mongoose.Schema.Types.ObjectId,
          required: true
        },
        postImage:{
          type:String,
          default:"Shiva Shambhu"

        },
        postSrc:{
          type:String,
          default:"Timi ra ma"

        }
    },

    
)

module.exports = mongoose.model('Post', userpostScheama);
