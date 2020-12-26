const comment = require("../models/comment");

exports.Postcomment=async (req, res) => {
    try {
          const newComment = new comment({ ...req.body });
         
          const response = await newComment.save();
          res.send({ response: response, message: "comment is saved" });
    } catch (error) {
          res.status(404).send({ message: "can not save it" },error);
    }
};

//GET all publication
exports.GetAllComment=async (req, res) => {
    try {
          const result = await comment.find()
          res.send({ response: result, message: "getting comment successfully" });
    } catch (error) {
          res.status(400).send({ message: "can not get comment" });
    }
};


//delete one publication by id
exports.DeleteOnecomment=async (req, res) => {
      
    try {
          const result = await publication.deleteOne({ _id: req.params.id })
          result.n
                ? res.send({ message: "comment deleted" })
                : res.send({ message:"there is no comment with this id"});
    } catch (error) {
          res.status(400).send({ message: "there is no comment with this id" });
    }
};

