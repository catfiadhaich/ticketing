import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import { CurrentUserRouter } from './routes/CurrentUserRouter';
import { SignInRouter } from './routes/SignInRouter';
import { SignOutRouter } from './routes/SignOutRouter';
import { SignUpRouter } from './routes/SignUpRouter';
import { ErrorRouter } from './middleware/ErrorRouter';
import { NotFoundError } from './errors/NotFoundError';


const app = express();
app.use(json());

app.use(CurrentUserRouter);
app.use(SignInRouter);
app.use(SignOutRouter);
app.use(SignUpRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(ErrorRouter);

app.listen(3000, () => {
    console.log("The auth Service is listening on 3000");
});
