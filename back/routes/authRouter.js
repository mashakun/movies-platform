import express from 'express';
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

import { registerValidation } from '../validations.js';
import {userModel} from '../models/index.js';
import {checkAuth, handleValidationErrors} from '../utils/index.js';

const authRouter = express.Router();

authRouter.post('/register/', registerValidation, handleValidationErrors, async (req, res) => {

    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const doc = new userModel({
            name: req.body.name,
            email: req.body.email,
            passwordHash: hash,
        });

        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        }, 'pineapple3316', {
            expiresIn: '10d',
        });
        const {passwordHash, ... userData} = user._doc;

        res.status(200).json({
            ... userData,
            token,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Cannot register user",
        });
    }
})

authRouter.post('/login/', async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.body.email});
        if (!user) {
            console.log('email not found');
            return res.status(400).json({
                message: 'Invalid login or password',
            });
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
        if (!isValidPass) {
            console.log('wrong password');
            return res.status(400).json({
                message: 'Invalid login or password',
            });
        }

        const token = jwt.sign({
            _id: user._id,
        }, 'pineapple3316', {
            expiresIn: '10d',
        });

        const {passwordHash, ... userData} = user._doc;

        res.status(200).json({
            ... userData,
            token,
        });

    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: "Something went wrong",
        });
    }
});

authRouter.get('/me/', checkAuth, async (req, res) => {
    try{
        const user = await userModel.findById(req.userId);
        if (!user) {
            return res.status(403).json({
                message: 'No access',
            });
        }

        const {passwordHash, ... userData} = user._doc;

        res.status(200).json({
            ... userData,
        });

    } catch(err) {
        console.log('No access');
        res.status(500).json({
            message: 'No access',
        });
    }
});

export default authRouter;