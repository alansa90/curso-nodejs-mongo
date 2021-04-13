module.exports.addNews = function (application, req, res) {
  res.render('admin/addNews', { validation: {}, notice: {} })
}

module.exports.save = function (application, err, req, res) {
  const news = req.body
  const { errors } = err
  if (errors.length !== 0) {
    res.render('admin/addNews', { validation: errors, notice: news })
    return
  }

  const connection = application.config.dbConnection()
  const newsModel = new application.app.models.NewsDAO(connection)

  newsModel.saveNews(news, (err, result) => {
    res.redirect('/news')
  })
}