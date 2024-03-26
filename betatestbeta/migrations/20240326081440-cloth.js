const { faker } = require('@faker-js/faker')

module.exports = {
  async up(db, client) {
    return db.collection('cloth').insertMany([{ test: 'test' }])
  },

  async down(db) {
    return db.collection('cloth').updateMany([])
  },
};
