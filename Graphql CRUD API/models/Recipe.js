const{model, Schema}=require ('mongoose');

const recipeschema= new Schema({
name: String,
description: String,
createdAt: String,
thumbsUp: Number,
thumbsDown: Number

});

module.exports= model('Recipe', recipeschema);
