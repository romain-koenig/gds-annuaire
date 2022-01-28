import {
  handleGetSample,
} from '../handlers/sample'

export default (app) => {
  /* GET sample page. */
  app.get('/sample', handleGetSample)
}