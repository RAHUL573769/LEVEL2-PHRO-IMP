import { UserStatus } from "@prisma/client";
import { generateToken, verifyToken } from "../helpers/jwtHelpers";
import { prisma } from "../helpers/prismaHelpers";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

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
    "5m"
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
    "5m"
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
      "5m"
    );

    return accessToken;
    // console.log("DecodedData", decodedData?.email);
    // const email:string=req.user
  } catch (error) {
    throw new Error("You are not Authorized");
  }
};
export const AuthServices = { loginUser, refreshToken };
