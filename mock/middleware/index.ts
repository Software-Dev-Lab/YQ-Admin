/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description:
 */
import type { IReq } from '../interface/index'

export const setToken = function (name: string): string {
  return `token_${name}_token`
}

export const checkToken = function (req: IReq): string {
  const token = req.headers['assets-token']
  console.log(token)
  const match = token.match(/^token_([\w]+)_token/)
  const userName = match ? match[1] : ''
  return userName
}

export const responseData = (code: number, message: string, data?: any) => {
  return {
    code: code,
    message: message,
    data: data,
  }
}
