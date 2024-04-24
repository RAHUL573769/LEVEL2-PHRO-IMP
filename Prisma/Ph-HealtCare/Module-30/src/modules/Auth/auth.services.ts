import { UserStatus } from "@prisma/client";

import bcrypt from "bcrypt";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { prisma } from "../../helpers/prismaHelpers";
import { generateToken, verifyToken } from "../../helpers/jwtHelpers";
import config from "../../config";
import { emailSender } from "./emailSendeer";

// const generateToken=(payload:any,secret:string,expiresIn:string)=>{
//   var token = jwt.sign(
//     { email: userData.email, role: userData.role },
//     "privateKey",
//     {
//       expiresIn: "60m"
//     }
//   );
// }

// const generateToken = (payload: any, secret: string, expiresIn: string) => {
//   var token = jwt.sign(payload, secret, {
//     expiresIn: expiresIn
//   });
//   return token;
// };
const loginUser = async (payload: { email: string; password: string }) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
      status: UserStatus.ACTIVE
    }
  });
  // console.log(payload.password, userData.password);
  const isPasswordCorrect: boolean = await bcrypt.compare(
    payload.password,
    userData.password
  );
  // console.log(isPasswordCorrect);
  if (!isPasswordCorrect) {
    throw new Error("Password Incorrect");
  }

  // var token = jwt.sign(
  //   { email: userData.email, role: userData.role },
  //   "privateKey",
  //   {
  //     expiresIn: "60m"
  //   }
  // );
  var token = generateToken(
    { email: userData.email, role: userData.role },
    "abcd",
    "20m"
  );
  // const refreshToken = jwt.sign(
  //   { email: userData.email, role: userData.role },
  //   "abcd",
  //   {
  //     expiresIn: "60m"
  //   }
  // );
  const refreshToken = generateToken(
    { email: userData.email, role: userData.role },
    "abcdefgh",
    "50m"
  );
  // return userData;
  return {
    refreshToken,
    token,
    needsPasswordChange: userData.needsPasswordChange
  };
};

const refreshToken = async (token: string) => {
  // console.log("Refresh Token", token);
  let decodedData;
  // const decodedData = jwt.verify(token, "abcdefgh");
  try {
    const decodedData = verifyToken(token, "abcdefgh");
    // const decodedData = jwt.verify(token, "abcdefgh") as JwtPayload;
    const userData = await prisma.user.findUniqueOrThrow({
      where: {
        email: decodedData.email,
        status: UserStatus.ACTIVE
      }
    });
    // console.log(userData);
    var accessToken = generateToken(
      { email: userData.email, role: userData.role },
      "abcd",
      "20m"
    );

    return accessToken;
    // console.log("DecodedData", decodedData?.email);
    // const email:string=req.user
  } catch (error) {
    throw new Error("You are not Authorized");
  }
};

const changePassword = async (user, payload) => {
  const userData = await prisma.user.findFirstOrThrow({
    where: {
      email: user.email
    }
  });

  const isPasswordCorrect: boolean = await bcrypt.compare(
    payload.oldPassword,
    userData.password
  );
  console.log(isPasswordCorrect);
  if (!isPasswordCorrect) {
    throw new Error("Password Incorrect");
  }
  const hashedPassword: string = await bcrypt.hash(payload.newPassword, 12);
  console.log("Hashed Password", hashedPassword);

  await prisma.user.update({
    where: {
      email: userData.email,
      status: UserStatus.ACTIVE
    },
    data: {
      password: hashedPassword,
      needsPasswordChange: false
    }
  });

  return {
    message: "Password Change Done"
  };
};
const forgotPassword = async (payload: { email: string }) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
      status: UserStatus.ACTIVE
    }
  });

  const resetPasswordToken = generateToken(
    { email: payload.email, role: userData.role },
    config.resetpasswordtoken as string,
    config.resetpasswordtokentime as string
  );

  //https://localost:3000/restpass?email=fhim@gmail.com&token=fbsgsgbrf

  const restPasswordLink =
    config.resetPasswordLink +
    `?email=${userData.email}&token=${resetPasswordToken}`;

  await emailSender(
    userData.email,
    `<div>  
  
  <p>
  
  Dear User

  </p>
  <p>
  Your Password Reset Link</p>

    <a href=${restPasswordLink}>
    <button>Reset Password</button></a>
  </div>`
  );
  console.log("ResetPasswordLink", restPasswordLink);
  console.log("ResetPasswordToken", resetPasswordToken);
  console.log(payload.email);
};
export const AuthServices = {
  loginUser,
  refreshToken,
  changePassword,
  forgotPassword
};
