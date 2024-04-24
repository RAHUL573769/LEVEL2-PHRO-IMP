export type TError = {
  message: string
  err: string
  statusCose: number
  status: string
  // stack: string

  issues: TErrorIssues[]
}

export type TErrorIssues = {
  path: string
  message: string
}
