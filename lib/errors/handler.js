export default (req, res, error) => {

  res.render('error', {
      error: error,
      message: error.message,
  })
}
