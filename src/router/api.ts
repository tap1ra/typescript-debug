import express from 'express';
import ApiController from '../controller/ApiController';

const router = express.Router();

router.use(async (req, res, next) => {
  const controller = new ApiController();
  const result = await controller.get();
  res.send(result);
  return;
});
export default router;
