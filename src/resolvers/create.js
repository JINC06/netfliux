import jwt from 'jsonwebtoken';
import User from '../schemas/user';
import bcrypt from 'bcrypt';

const expiresIn = '1d';
const secret = 'SECRET_KEY';

export const createToken = (email, password) => {
    // Si vienen vacias regresar false
    if (!email || !password) {
        return false;
    }

    const user = User.findOne({ 'email': email }).then(user => {
        const compare = new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (error, res) => {
                console.log(res)
                if (res) {
                    const payload = {
                        email: user.email,
                        id: user._id
                    }

                    const token = jwt.sign(payload, secret, {
                        expiresIn
                    })

                    resolve(token)
                } else {
                    reject(false);
                }
            });
        });

        return compare;

    })
        .catch()

    return user;
}