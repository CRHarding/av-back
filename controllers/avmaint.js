const Avmaint = require('../models').Avmaint;

const getAll = (req, res) => {
    console.log(Avmaint);
    Avmaint.findAll()
    .then(avmaints => {
        console.log(avmaints)
//      use the below line res.json(cities) to make your data work like an
//      API built like project 2 except changing the way it works in
//      you controller. This allows you to control the format of the API
        res.status(200).json(avmaints)
//      res.json(avmaints);
    })
    .catch(err => {
        console.log(err)
//      res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const create = (req, res) => {
  Avmaint.create(req.body)
  .then(newAircraft => {
    res.status(200).json(newAircraft)
  })
  .catch(err => console.error(err));
}

const update = (req, res) => {
  Avmaint.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    Avmaint.findByPk(req.params.id)
      .then(aircraft => res.status(200).json(aircraft))
      .catch(err => console.error(err))
  }).catch(err => console.error(err))
}
// const getAvmaintById = (req, res) => {
//     let sort = 'DESC';
//     if(req.query.sorted === 'asc')
//         sort = 'ASC';

//     Avmaint.findById(req.params.avmaint, {
//         include: [
//             {
//                 model: Avmaint,
//                 attributes: ['id', 'acmodel', 'engmodel', 'ttaf', 'ttsn', 'smoh', 'annualinsp', 'awdirectives', 'damagehist'],

//             }
//         ],
//         order: [
//             [{model: Avmaint}, 'createdAt', sort]
//         ]
//     })
//     .then(foundAvmaint => {
//         if(foundAvmaint === null){
//             res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Avmaint Id')
//         }else{
//             res.status(constants.SUCCESS).json(foundAvmaint)
//         }
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }

module.exports = {
    getAll,
    create,
    update
}
