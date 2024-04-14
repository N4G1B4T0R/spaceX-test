import axios from 'axios';
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLList, GraphQLSchema } from 'graphql';

const PayloadType = new GraphQLObjectType({
    name: 'Payload',
    fields: () => ({
        docs:  { type: new GraphQLList(LaunchType) },
        totalDocs: { type: GraphQLInt },
        offset: { type: GraphQLInt },
        limit: { type: GraphQLInt },
        totalPages: { type: GraphQLInt },
        page: { type: GraphQLInt },
        pagingCounter: { type: GraphQLInt },
        hasPrevPage: { type: GraphQLBoolean },
        hasNextPage: { type: GraphQLBoolean },
        prevPage: { type: GraphQLInt },
        nextPage: { type: GraphQLInt },
    })
});

const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        details: { type: GraphQLString },
        date_utc: { type: GraphQLString },
        links: { type: LinksType },
        success: { type: GraphQLBoolean },
    })
});

const LinksType = new GraphQLObjectType({
    name: 'LinksType',
    fields: () => ({
        patch: { type: PatchType },
    })
});

const PatchType = new GraphQLObjectType({
    name: 'PatchType',
    fields: () => ({
        large: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: PayloadType,
            args: {
                limit: { type: GraphQLInt },
                offset: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios
                    .post(`https://api.spacexdata.com/v5/launches/query`, {
                        options: {
                            limit: args.limit,
                            offset: args.offset,
                            sort: {
                                name: "asc",
                            },
                        }
                    })
                    .then(res => res.data);
            }
        },
    }
});

export default new GraphQLSchema({ query: RootQuery });
