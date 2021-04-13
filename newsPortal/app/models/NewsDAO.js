function NewsDAO (connection) {
  this._connection = connection
}

NewsDAO.prototype.getNews = function (callback) {
  this._connection.query('select * from news order by creationDate desc', callback)
}  

NewsDAO.prototype.getNotice = function (idNews, callback) {
  this._connection.query(`select * from news where idNews = ${idNews}`, callback)
}

NewsDAO.prototype.saveNews = function (news, callback) {
  this._connection.query('insert into news set ? ', news, callback)
}

NewsDAO.prototype.getFiveLastNews = function (callback) {
  this._connection.query('select * from news order by creationDate desc limit 5', callback)
}

module.exports =  function () {
  return NewsDAO
}
