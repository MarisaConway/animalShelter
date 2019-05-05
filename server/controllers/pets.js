const mongoose = require('mongoose'),
            Pet = mongoose.model("Pet");


class Pets {
    getAll(req, res) {
        Pet.find({}, (err,pets) => {
            if(err) {console.log(err);}
            res.json({status: 'ok', pets: pets});
        });
    }
    getOne(req, res) {
        Pet.findOne({_id: req.params._id}, (err, pet) => {
            if(err){
                console.log(err);
            }
            res.json({status: 'ok', pet: pet});
        })
    }
    create(req, res) {
        let a = new Pet(req.body);
        a.save(err => {
            if(err) {
                res.json({status: "not ok", errors: err});
            }
            else{
                res.json({status: "ok"});
            }
        });
    }
    update(req, res) {
        Pet.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true, context: 'query'},err => {
            if(err) {
                res.json({status: "not ok", errors: err});
            }
            else {
                res.json({status: "ok"});
            }
        });
    }
    delete(req, res) {
        Pet.findOneAndDelete({_id: req.params._id}, err => {
            if(err) {console.log(err);}
            res.json({status: 'ok'});
        })
    }

}

module.exports = new Pets();