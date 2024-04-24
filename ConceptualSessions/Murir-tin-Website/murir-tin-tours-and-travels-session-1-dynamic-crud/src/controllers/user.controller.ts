/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userServices } from '../services/user.service'

// data = {
//   statusCode: 200,
//   status: 'Success',
//   data: {},
// } //for reducing messy function
type TSuccessResponse<T> = {
  statusCode: number
  message: 'Success' | 'failed' | 'error'
  data?: T | T[] | null //data cannot be any
}

const sendResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
  res.status(201).json({
    status: data.statusCode,
    message: data.message,
    data: data.data,
  })
}
const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const result = await userServices.createUser(userData)
    // res.status(201).json({
    //   status: 'success',
    //   message: 'User created successfully',
    //   data: result,
    // })
    sendResponse(res, {
      statusCode: 201,
      message: 'Success',
      data: result,
    })
  } catch (error: any) {
    // console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers()
    res.status(200).json({
      status: 'success',
      message: 'User fetched successfully',
      data: result,
    })
  } catch (error: any) {
    // console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await userServices.getSingleUser(id)
    // res.status(200).json({
    //   status: 'success',
    //   message: 'Single User fetched successfully',
    //   data: result,
    // })
    sendResponse(res, {
      statusCode: 201,
      message: 'Success',
      data: result,
    })
  } catch (error: any) {
    // console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}
const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const id = req.params.id
    const result = await userServices.updateUser(id, userData)
    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      data: result,
    })
  } catch (error: any) {
    // console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await userServices.deleteUser(id)
    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
