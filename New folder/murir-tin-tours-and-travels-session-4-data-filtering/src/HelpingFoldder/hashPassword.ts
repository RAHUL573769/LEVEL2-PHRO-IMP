import * as argon2 from 'argon2'

export const hashPassord = async (inputpassword: string) => {
  try {
    const hash = await argon2.hash(inputpassword)
    console.log(hash)
    return hash
  } catch (err) {
    //...
  }
}

export async function verifyPassword(
  hashedPassword: string,
  inputPassword: string,
): Promise<boolean> {
  try {
    const isPasswordValid = await argon2.verify(hashedPassword, inputPassword)
    return isPasswordValid
  } catch (error) {
    console.error(
      'Error verifying password d From hashing password Folder:',
      error,
    )
    throw error
  }
}
