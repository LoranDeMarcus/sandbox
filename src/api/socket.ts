import io from 'socket.io-client'
import { host, port } from '../utils/constants'

const socket = io(`${host}:${port}`)

export default socket
