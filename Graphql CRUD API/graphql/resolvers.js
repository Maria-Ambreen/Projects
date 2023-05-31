const Recipe= require('../models/Recipe');

module.exports= {
 Query: {
    async recipe(_, {ID}) {
        return await Recipe.findById(ID)
  },
  async getRecipe(_, {amount}){
        return await Recipe.find().sort({createdAT: -1}).limit(amount)
  }
 },

 Mutation: {
      async createRecipe(_, {recipeInput: {name, description}}){
      const createdRecipe= new Recipe({
      name: name,
      description: description,
      createdAt: new Date().toISOString(),
      thumbsUp: 0,
      thumbsDown:0
      });

const res= await createdRecipe.save();    //MONGODB Saving
console.log(res._doc);

return {
    id: res.id,
    ...res._doc
}
 },
async deleteRecipe (_, {ID}){
const wasDeleted= (await Recipe. deleteOne({ _id: ID})).deletedCount;
return wasDeleted;      //1 if something is deleted, 0 id is not  deleted
},

async updateRecipe (_, {ID, recipeInput: {name, description}}){
    const wasUpdated= (await Recipe.updateOne({ _id: ID}, {name: name, description: description})).modifiedCount;
   return wasUpdated;    //1 if something is updated & 0 if nothing is updated
}

  
 }

}