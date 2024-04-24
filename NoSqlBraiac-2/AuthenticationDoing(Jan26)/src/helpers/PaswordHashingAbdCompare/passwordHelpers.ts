import bcrypt from 'bcrypt'

export const hashPassword = async (
  password: string,
  hashRounds: number,
): Promise<string> => {
  const passwordHashing = await bcrypt.hash(password, hashRounds)
  return passwordHashing
}

export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  const isCorrectPassword = await bcrypt.compare(password, hashedPassword)
  return isCorrectPassword
}

// const isCorrectPasword = await bcrypt.compare(password, hashedPassword)
// console.log('Is paasword matched', isCorrectPasword)
