const { gql } = require('apollo-server-express');
// Построение схемы с помощью GraphQl
const typeDefs = gql `
type Post {
    id: ID
    title: String
    description: String
}

type Query {
    hello: String
    getAllPosts: [Post]
    getPost(id: ID): Post
}

input PostInput {
    title: String
    description: String
}

type Mutation {
    createPost(post: PostInput): Post
    deletePost(id: ID): String
    updatePost(post: PostInput): Post
}

`;

module.exports = typeDefs;