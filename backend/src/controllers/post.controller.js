const Post = require("../models/post.model");

exports.createPostController = async (req, res) => {
  try{

    let post = req.body;
    const { _id } = req.user;
    // console.log(_id)
    // console.log(post)
   
    post = {...post, user:_id}
    
  }catch{

  }

  
};
