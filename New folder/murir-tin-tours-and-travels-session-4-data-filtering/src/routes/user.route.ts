import express from 'express'
import { userController } from '../controllers/user.controller'
import { checkAuth } from '../middlewares/checkAuth'
// import User from '../models/user.model'
// import catchAsyncFunction from '../utils/catchAsync'

const router = express.Router()

router.post(
  '/create-user',
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  checkAuth('admin'),
  userController.createUser,
)
router.get(
  '/',
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  checkAuth('user'),
  userController.getAllUsers,
)
router.get('/:id', userController.getSingleUser)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoutes = router
