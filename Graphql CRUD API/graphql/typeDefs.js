const {gql}= require ('apollo-server');

module.exports=gql `
type Recipe{
name: String
description: String
createdAt: String
thumbsUp: Int
thumsDown: Int
}

input RecipeInput {
    name: String
    description: String
}

input updateRecipeInput{
name: String


}


type Query{
    recipe(ID:ID!):Recipe!
    getRecipe(amount:Int):[Recipe]
}



type Mutation{
createRecipe(recipeInput: RecipeInput): Recipe!
deleteRecipe(ID:ID!): Boolean
updateRecipe(ID:ID!, updaterecipeInput: updateRecipeInput): Boolean
}

`