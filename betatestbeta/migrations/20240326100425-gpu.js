module.exports = {
  async up(db, client) {
    return db.collection('gpu').insertMany([{ 
      brend: 'amd',
      name: 'rx 550',
      memory: '1',
      period: '3.4'
    },
    {
      brend: 'amd',
      name: 'rx 560',
      memory: '2',
      period: '3.7'
    },
    {
      brend: 'amd',
      name: 'rx 570',
      memory: '4',
      period: '4.1'
    },
    {
      brend: 'amd',
      name: 'rx 580',
      memory: '8',
      period: '4.6'
    },
    {
      brend: 'nvidia',
      name: 'gtx 1050',
      memory: '2',
      period: '2.8'
    },
    {
      brend: 'nvidia',
      name: 'gtx 1060',
      memory: '3',
      period: '3.5'
    },
    {
      brend: 'nvidia',
      name: 'gtx 1070',
      memory: '4',
      period: '3.9'
    },
    {
      brend: 'nvidia',
      name: 'gtx 1080',
      memory: '8',
      period: '4.5'
    }
  ])
  },

  async down(db) {
    return db.collection('gpu').updateMany([])
  },
};
