module.exports = {
  async up(db, client) {
    return db.collection('cpu').insertMany([{ 
      brend: 'amd',
      name: 'Ryzen 3',
      core: '4',
      period: '3.4'
    },
    {
      brend: 'amd',
      name: 'Ryzen 5',
      core: '8',
      period: '3.7'
    },
    {
      brend: 'amd',
      name: 'Ryzen 7',
      core: '16',
      period: '4.1'
    },
    {
      brend: 'amd',
      name: 'Ryzen 9',
      core: '32',
      period: '4.6'
    },
    {
      brend: 'intel',
      name: 'core i3',
      core: '4',
      period: '2.8'
    },
    {
      brend: 'intel',
      name: 'core i5',
      core: '6',
      period: '3.5'
    },
    {
      brend: 'intel',
      name: 'core i7',
      core: '12',
      period: '3.9'
    },
    {
      brend: 'intel',
      name: 'core i9',
      core: '24',
      period: '4.5'
    }
  ])
  },

  async down(db) {
    return db.collection('cpu').updateMany([])
  },
};
