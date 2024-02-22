import { Hono } from 'https://deno.land/x/hono@v4.0.0-rc.2/mod.ts';
import {
	cors,
	logger,
} from 'https://deno.land/x/hono@v4.0.0-rc.2/middleware.ts';

import auth from './routes/auth.routes.ts';

import roomsRoutes from './routes/rooms.routes.ts';

import './config/mongoose.ts';

const app = new Hono();

app.use(cors({ origin: '*' }));

const customLogger = (message: string, ...rest: string[]) => {
	console.log(message, ...rest);
};
app.use('*', logger(customLogger));

app.get('/', (c) => c.json('hello'));

app.route('/api/auth', auth);

app.route('/api/', roomsRoutes);

Deno.serve(app.fetch);

console.log('server on port:8000');
