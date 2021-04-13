const { check, validationResult } = require('express-validator')

module.exports = (application) => {

  application.get('/addNews', (req, res) => {
    application.app.controllers.admin.addNews(application, req, res)
  })

  application.post('/news/save', [ 
    check('title', 'title is required').notEmpty(),    
    check('resume', 'resume is required').notEmpty(),
    check('resume', 'resume must contain between 10 and 100 characters').isLength(10, 100),
    check('author', 'Author is required').notEmpty(),
    check('dateNews', 'Date is required').notEmpty().isDate({ format: 'YYYY-MM-DD'})
  ], (req, res) => {
    const errors = validationResult(req)
    application.app.controllers.admin.save(application, errors, req, res)
  })
    
}