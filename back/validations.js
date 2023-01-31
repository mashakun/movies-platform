import {body} from 'express-validator';

export const registerValidation = [
    body('name', 'name is too short').isLength({min: 3}),
    body('email', 'invalid email format').isEmail(),
    body('password', 'password is too short').isLength({min: 5}),
]