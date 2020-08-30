import cors from 'cors';
import express from 'express';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from '../swaggerConfig.json';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.listen(3333);