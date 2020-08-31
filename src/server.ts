import cors from 'cors';
import express from 'express';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from '../swaggerConfig.json';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.listen(3333);