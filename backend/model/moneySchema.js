const mongoose=require('mongoose')
const Schema = mongoose.Schema;

let moneySchema = new Schema({
    usd:{type:Number,require:true },
    inr: {type: Number, require:true },
    sender_name: {type: String, required: true},
    receiver_name: {type: String, required: true, },
    purpose:{type:String, required: true}, 
});
const Money=mongoose.model('Money', moneySchema);

module.exports = Money;
