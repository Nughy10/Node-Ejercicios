const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const characterSchema = new Schema({
    name: {type: String, required: true, trim: true},
    race: {type: Schema.Types.ObjectId, required: true, ref: 'race'},
    weapon: {type: String, required: false, trim: true}, //Si lo pongo entre corchetes, sería un array de armas
    image: {type: String, required: false, trim: true}
},
{
    timestamps:true
})

const Character = mongoose.model('character', characterSchema);
module.exports = Character;