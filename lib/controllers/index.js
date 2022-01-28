import {
    apiUtils,
} from '../services'

export const showHomePage = async () => {
    try {
        const { data } = await apiUtils.gds.get('/members/?per_page=100&type=alphabetical')
    
        console.log('RESULTS', data)
        return data
        
      } catch (error) {
        console.log('ERROR IN SHOWHOMEPAGE', error)
      }
}