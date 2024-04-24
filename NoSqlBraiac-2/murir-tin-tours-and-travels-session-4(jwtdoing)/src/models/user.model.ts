import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces/user.interface'
import { ACCOUNT_STATUS, USER_ROLE } from '../constants/users.constants'
// import { Account_status, User_Role } from '../constants/users.constants'

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Please tell us your name'],
      unique: true,
    },
    age: {
      type: Number,
      required: [true, 'Please tell us your age'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Please tell us your email'],
      lowercase: true,
    },
    photo: String,
    role: {
      type: String,
      enum: Object.values(USER_ROLE),
      default: USER_ROLE.user,
    },
    password: {
      type: String,
      required: true,
      select: 0, //to hide password
    },
    passwordChangedAt: {
      type: Date,
      default: null, // Date.now is not given here
    },
    userStatus: {
      type: String,
      enum: Object.values(ACCOUNT_STATUS),
      // enum:['user',"admin"],
      default: ACCOUNT_STATUS.active,
    },
  },
  {
    timestamps: true,
  },
)

//Pre Hook for Query Middleware
// userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
//   this.find({ userStatus: { $eq: 'active' } })
//   next()
// })

// userSchema.pre("findOne", function (next) {
//     this.findOne({userStatus : { $eq : "active"}})
//     next()
// });

const User = model<IUser>('User', userSchema)

export default User
