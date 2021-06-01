import { ApolloServer } from 'apollo-server-micro'
import Cors from 'cors'

import { typeDefs } from './schema'
import { resolvers } from './resolvers'

const server = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false
  }
}

const graphql = server.createHandler({ path: '/api' })

const cors = Cors({
  methods: ['GET', 'HEAD', 'POST'],
})

const middleware = (req, res, callback) => new Promise((resolve, reject) => {
  callback(req, res, (result) => {
    if (result instanceof Error) return reject(result)
    return resolve(result)
  })
})

const handler = async (req, res) => {
  await middleware(req, res, cors)
  return graphql(req, res)
}

export default handler
