import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

// new Schema( { 'name' :...}, {'collection':...})

const UsersSchema = new Schema({
    'name': {
        type: String,
        required: true
    },
    'lastName': {
        type: String,
        required: true
    },
    'email': {
        type: String,
        required: true
    },
    'password': {
        type: String,
        required: true
    }
}, { 'collection': 'users', timestamps: true });

UsersSchema.pre('save', function(next) {
    var user = this;

    //SOLO MODIFICAMOS DE NUEVO LA CONTRASEÑA SI SE HA MOFIFICADO O ES NUEVA
    if(!user.isModified('password')) return next();
    
    //GENERAMOS SALT
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);
        //HASEAMOS LA CONTRASEÄ UTILIZANDPP EL SALT GENERADO
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) return next(err);
            //SOBREESCRIBIMOS CONTRASEÑA
            user.password = hash;
            next();
        });
    });
});

export default mongoose.model('users', UsersSchema);