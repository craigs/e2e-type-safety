import {getUser} from './getUser'
import {getUsers} from './getUsers'

export const resolvers = {
  Query: {
    getUsers,
    getUser
  }
}
