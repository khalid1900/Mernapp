const mongoose=require('mongoose')
const Schema = mongoose.Schema;

let purposeSchema = new Schema({
  
  purposes:{type:Array, required: true},
});
const Purpose=mongoose.model('Purpose',purposeSchema );



let result1=Purpose({
    purposes:["loan","gift","Emi","deposite"]
});
// const result2=result1.save()


module.exports = Purpose;
