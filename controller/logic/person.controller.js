/** Permite recibir la informacion que viene de los request y enviarla a los dto */

/** Dto */
const PersonDto = require("../../model/dto/person.dto");

exports.createPerson = (req, res, next) => {

    let per = {
        document: req.body.document ,
        name: req.body.name ,
        lastname: req.body.lastname ,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age, 
        address: req.body.address ,
        profession: req.body.profession,
        marital_status: req.body.marital_status,
        blood_type: req.body.blood_type
    };

    PersonDto.create(per).then( data => {
        console.log(data)
        res.status(201).json({
            info: data
        })
    }).catch( err => {
        return res.status(400).json({
            error: err
        })
    });
};

exports.updatePerson = (req, res, next) => {

    let per = {
        document: req.body.document ,
        name: req.body.name ,
        lastname: req.body.lastname ,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age, 
        address: req.body.address ,
        profession: req.body.profession,
        marital_status: req.body.marital_status,
        blood_type: req.body.blood_type
    };

    PersonDto.update( req.body.id, per ).then( data => {
        res.status(201).json({
            info: data
        })
    }).catch( err => {
        return res.status(400).json({
            error: err
        })    
    })
};

exports.getAll = (req, res, next) => {

    PersonDto.getAll().then(data => {
        return res.status(201).json({
            info: data 
        })
    }).catch(err => {
        return res.status(400).json({
            error: err
        })
    });
};

exports.getByDocument = (req, res, next) => {

    PersonDto.getByDocument(req.params.document).then(data => {
        return res.status(201).json({
            info: data 
        })
    }).catch(err => {
        return res.status(400).json({
            error: err
        })
    })
};


exports.deletePerson = (req, res, next) => {

    PersonDto.delete( req.params.id ).then( data => {
        res.status(204).json();
    }).catch( err => {
        return res.status(400).json({
            error: err
        })
    })
};