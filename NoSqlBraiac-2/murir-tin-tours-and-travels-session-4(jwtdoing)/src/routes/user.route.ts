/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import express, { Request, Response } from 'express'
import { userController } from '../controllers/user.controller'
import User from '../models/user.model'
import catchAsyncFunction from '../utils/catchAsync'
import { NextFunction } from 'express'
import { USER_ROLE } from '../constants/users.constants'
import { checkAuth } from '../middlewares/auth'
// import { checkAuth } from '../middlewares/auth'
// import { checkAuth } from '../middlewares/auth'

const router = express.Router()
router.post(
  '/create-user',
  // checkAuth(USER_ROLE.admin, USER_ROLE.user),
  userController.createUser,
)
router.get(
  '/',
  checkAuth(USER_ROLE.admin, USER_ROLE.user),
  userController.getAllUsers,
)
router.get('/:id', userController.getSingleUser)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoutes = router
