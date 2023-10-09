// /* eslint-disable */
// import { ApolloServer, gql } from "apollo-server";

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => "Hellooo, welcome to your Graphql server",
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });
// server.listen().then(({ url }) => console.log(`Server ready at ${url}`));


// const express = require('express');
// const {ApolloServer, gql} = require('apollo-aerver-express');

// const typeDefs = gql`
// type Query{
//   hello: String
// }

// `;

// const resolvers = {
//   Query:{
//     hello: ()=>{
//       return 'Hello world';
//     },
//   },
// };
// async function startServer() {
//   const app = express()
//   const apolloServer = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });
//   await apolloServer.start
//   apolloServer.applyMiddleware({ app: app});
// app.use((req, res) =>{
//   res.send('Hello')
// });


//   app.listen(4000, () => console.log('Server is running on port 4000'))

// }

// startServer();

// mongodb+srv://Cooper2:<password>@cluster0.vaax4wm.mongodb.net/?retryWrites=true&w=majority


