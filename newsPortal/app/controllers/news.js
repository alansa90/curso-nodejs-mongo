module.exports.news = function (application, req, res) {
  const connection = application.config.dbConnection()
  const newsModel = new application.app.models.NewsDAO(connection)

  newsModel.getNews((err, result) => {
    res.render('news/news', { news: result })
  })
}

module.exports.notice = function (application, req, res) {

  const { idNews } = req.query

  const connection = application.config.dbConnection()
  const newsModel = new application.app.models.NewsDAO(connection)
  
  newsModel.getNotice(idNews, (err, result) => {
    res.render('news/notice', { notice: result })
  })
}