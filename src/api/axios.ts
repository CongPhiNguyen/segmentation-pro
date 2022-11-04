/*eslint-disable */
import axios from "axios"
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*"
axios.defaults.headers.post["Access-Control-Allow-Credentials"] = true
axios.defaults.withCredentials = true
const config: any = {
  withCredentials: true,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
}

const post = async (path: any, data: any) => {
  return await axios.post(path, data, config)
}

const get = async (path: any) => {
  return await axios.get(path, config)
}

const deleteAxios = async (path: any) => {
  return await axios.delete(path, config)
}

// const getFix = async (path: any, params: any) => {
//   return await axios.get(path, { params: params, config: config })
// }

export { post, get, deleteAxios }
