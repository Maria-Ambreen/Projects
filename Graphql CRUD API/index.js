const { ApolloServer} = require ('apollo-server');
const mongoose= require ('mongoose');

const MONGODB= 'mongodb+srv://mariaambreen:Pakistan99@cluster0.7ftzn45.mongodb.net/?retryWrites=true&w=majority';
//Apollo-server requires:
//TypeDefs: graphql type definitions
//resolvers: how do we resolve quaries/ mutations.

const typeDefs= require('./graphql/typeDefs');
const resolvers= require('./graphql/resolvers');

const server= new ApolloServer({
typeDefs,
resolvers,
context: ({ req }) => ({ req })}
);

mongoose.set('strictQuery', false);
mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connection successful');
    return server.listen({ port: 4000 });
  })
  .then(({ url }) => {
    console.log(`Server is running on ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });






