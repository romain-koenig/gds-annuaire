import {
  handleGetIndex,
} from '../handlers/index'

export default (app) => {
  /* GET home page. */
  app.get('/', handleGetIndex)
}