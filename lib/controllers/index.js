import {
    apiUtils,
    formatterUtils,
} from '../services'

export const getUsersList = async () => {
  try {
    const { data } = await apiUtils.gds.get('/members/?per_page=4&type=alphabetical')

    return data.map((user) => formatterUtils.formatUser(user))
      
  } catch (error) {
    console.log('ERROR IN LIB/CONTROLLER/INDEX.JS => getUserList', error)
  }
}

export const getCategoriesList = async () => {
  try {
    const { data } = await apiUtils.gds.get('/xprofile/fields/12?per_page=100')

    let options = data[0].options
    // console.log(`OPTIONS : ${JSON.stringify(options)}`)
    return options.map((category) => formatterUtils.formatCategory(category))
  } catch (error) {
    console.log('ERROR IN LIB/CONTROLLER/INDEX.JS => getCategoriesList', error)
  }
}

export const getTradesList = async () => {
  try {
    const { data } = await apiUtils.gds.get('/xprofile/fields/13?per_page=100')

    let options = data[0].options
    return options.map((trade) => formatterUtils.formatTrade(trade))

  } catch (error) {
    console.log('ERROR IN LIB/CONTROLLER/INDEX.JS => getCategoriesList', error)
  }
}