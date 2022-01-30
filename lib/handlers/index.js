import {
    getUsersList,
    getCategoriesList,
    getTradesList,
} from '../controllers/index'
import errorHandler from '../errors/handler'

export const handleGetIndex = async (req, res) => {
    try {

        let users = await getUsersList()
        let categories = await getCategoriesList()
        let trades = await getTradesList()

        res.render('index', {
            title: 'Hello!',
            users: users,
            categories: categories,
            trades: trades,
        })
    } catch (error) {
        errorHandler(req, res, error)
    }
}