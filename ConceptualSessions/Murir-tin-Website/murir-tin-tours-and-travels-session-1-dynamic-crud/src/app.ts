import express, { Application, NextFunction, Request, Response } from 'express'
// import { userRoutes } from './routes/user.route'
import cors from 'cors'
import globalRouter from './routes'
// import { tourRoutes } from './routes/tour.route'
// import { reviewRoutes } from './routes/review.route'
// import { globalRouter } from './routes'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/', globalRouter)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to  Murir Tin Tours & Travels',
  })
})
//trying to catch not found route
app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: 'success',
    message: `Website Not Found for ${req.originalUrl}`,
  })
})
//trying to catch not found route

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode()
  const statusMessage = 'Failed'
  res.status(statusCode).json({
    status: statusMessage,
    message: 'Something went wrong',
  })
  next()
})

export default app
