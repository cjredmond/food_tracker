import { Request, Router, Response } from 'express';
import { Auth, Database } from '../models';

async function testAuthRoute() {
    return await Auth.testAuth();
}

// -------------- ROUTES ------------- //
const router: Router = Router();

router.get('/test_auth', async (req: Request, res: Response) => {

    res.send(await testAuthRoute());
});

export const AuthController: Router = router;