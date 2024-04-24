/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express'
import { authController } from './auth.controller'
import { checkAuth } from '../middlewares/checkAuth'
import { USER_STATUS } from '../constants/user.constants'

const router = express.Router()

router.post('/login', authController.login)

router.post('/register', authController.register)
router.post(
  '/change-password',
  checkAuth(USER_STATUS.admin, USER_STATUS.user),
  authController.changePassword,
)

export const authRoutes = router
