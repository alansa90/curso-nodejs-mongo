module.exports = (application) => {
  
  application.get('/news', (req, res) => {
    application.app.controllers.news.news(application, req, res)    
  })

  application.get('/notice', (req, res) => {
    application.app.controllers.news.notice(application, req, res)
  })

}
