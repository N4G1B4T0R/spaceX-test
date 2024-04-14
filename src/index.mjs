import express from 'express';
import cors from 'cors';
import { createHandler } from 'graphql-http/lib/use/express';
import expressPlayground from 'graphql-playground-middleware-express';
import schema from './schema.mjs';

const graphQLPlayground = expressPlayground.default

const app = express();

app.use(cors())
app.all('/graphql', createHandler({ schema }));
app.get('/playground', graphQLPlayground({ endpoint: '/graphql' }))

app.listen({ port: 4000 });
console.log('Listening to port 4000');