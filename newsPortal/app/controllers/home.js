module.exports.index = function (application, req, res) {

    var connection = application.config.dbConnection()
    const newsModel = new application.app.models.NewsDAO(connection)

    newsModel.getFiveLastNews(function (error, result) {
        res.render('home/index', { news: result })
    })
}