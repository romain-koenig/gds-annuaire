import {
    apiUtils,
    formatterUtils,
} from '../services'

export const showHomePage = async () => {
    try {
        const { data } = await apiUtils.gds.get('/members/?per_page=50&type=alphabetical')
    
        // console.log('RESULTS', data)
        return data.map((user) => formatterUtils.formatUser(user))
        
      } catch (error) {
        console.log('ERROR IN LIB\CONTROLLER\INDEX.JS', error)
      }
}