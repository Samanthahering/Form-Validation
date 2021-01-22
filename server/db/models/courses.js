const Sequelize = require('sequelize')
const db = require('../db')

const Courses = db.define('courses', {
    course1: {
        type: Sequelize.STRING
    },
    course2: {
        type: Sequelize.STRING
    },
    course3: {
        type: Sequelize.STRING
    },
  
})

module.exports = Courses