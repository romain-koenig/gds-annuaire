import {
    showHomePage,
} from '../controllers/index'
import errorHandler from '../errors/handler'

export const handleGetIndex = async (req, res) => {
    try {

        let index = await showHomePage()

        res.render('index', {
            title: 'Hello!',
            data: index
        })
    } catch (error) {
        errorHandler(req, res, error)
    }
}