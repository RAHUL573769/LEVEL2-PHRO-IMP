export type userRole = 'user' | 'admin'
export type userStatus = 'active' | 'inactive'
interface IUser {
  name: string
  age: number
  email: string
  password: string
  passwordChangedAt: Date
  photo: string
  role: userRole

  userStatus: userStatus
}

export { IUser }
