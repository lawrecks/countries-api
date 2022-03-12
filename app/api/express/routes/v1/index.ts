import { Router } from 'express';
import login from '../../controllers';
import { validateLogin } from '../../validators/auth.validators';

const router = Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .json({
      status: 'success',
      code: 200,
      message: 'Welcome to countries API!',
    });
});

router.post('/login', validateLogin, login);

export default router;
