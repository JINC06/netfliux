import User from '../schemas/user';
import jwt from 'jsonwebtoken';

const secret = 'SECRET_KEY';
const prefixToken = 'JWT';

export const verifyToken = (token) => {
    const [prefix,payload] = token.split(' ');

    let user = null;
    if(!payload){
        throw new Error('No token provided');
    }

    if(prefix !== prefixToken){
        throw new Error('Invalid header Format');
    }

    jwt.verify(payload, secret, (err,data) => {

        if(err){
            throw new Error('Invalid Token');
        }else{
            console.log('Llegue aquí', data)
            user = User.findOne({'_id': data.id})
                /*.then(res=> {
                    console.log(res);
                    resolve(res);
                })
                .catch(err=>{
                    console.log(err);
                    reject(err);
                });*/

            ///return user;
        }
    });

    if(!user){
        throw new Error('User doesnt exist in database');
    }

    return user;
};