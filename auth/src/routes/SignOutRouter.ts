import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/users/signout', async (req: Request, res: Response) => {
    res.send('Hi There');
});

export { router as SignOutRouter };