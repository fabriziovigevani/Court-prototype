const { 
  GraphQLObjectType,
  GraphQLInt, 
  GraphQLString, 
  GraphQLBoolean, 
  GraphQLList,
  GraphQLSchema 
} = require('graphql')

const axios = require('axios')

const SPACEX_ENDPOINT = 'https://api.spacexdata.com/v3/launches'

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
     flight_number: { type: GraphQLInt },
     mission_name: { type: GraphQLString },
     launch_year: { type: GraphQLString },
     launch_date_local: { type: GraphQLString },
     launch_success: { type: GraphQLBoolean },
     rocket: { type: RocketType },
  })
})

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  })
})

// RootQueryType
const RootQueryType =  new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      args: {
        offset: { type: GraphQLInt },
        limit: { type: GraphQLInt }
      },
      resolve(parent, args) {
        const limit = args.limit || 10
        const from = args.offset * limit
        const to = from + limit
        return axios.get(SPACEX_ENDPOINT)
          .then(res => res.data.slice(from, to))
      }
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios.get(`${SPACEX_ENDPOINT}/${args.flight_number}`)
          .then(res => res.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQueryType
})