/* eslint-disable no-unused-vars */
import express from 'express'
import { userController } from '../controllers/user.controller'

const router = express.Router()

router.post('/create-user', userController.createUser)
router.get('/', userController.getAllUsers)
router.get(
  '/:id',
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  // (req: Request, res: Response, next: NextFunction) => {
  //   const id = req.params.id
  //   req.body.id = id
  //   console.log(req.body)
  //   console.log(id)
  //   next()
  // },
  userController.getSingleUser,
)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoutes = router
