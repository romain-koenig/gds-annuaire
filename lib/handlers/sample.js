import {
    showSamplePage,
} from '../controllers/sample'
import errorHandler from '../errors/handler'

export const handleGetSample = async (req, res) => {
    try {

        let sample = await showSamplePage()

        res.render('sample', {
            title: 'Hello sample!',
            data: sample
        })
    } catch (error) {
        errorHandler(req, res, error)
    }
}