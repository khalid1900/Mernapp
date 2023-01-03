const mongoose=require('mongoose')
const Schema = mongoose.Schema;

let conversionSchema = new Schema({
  
  conversion:{type:Number, required: true},
});
const Conversion=mongoose.model('Conversion',conversionSchema );



let data=Conversion({
    conversion:80
});
// const result3=data.save()


module.exports = Conversion;
