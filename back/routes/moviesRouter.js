import express from 'express';
import { checkAuth, handleValidationErrors } from '../utils/index.js';
import {listModel, movieModel} from '../models/index.js';

const moviesRouter = express.Router();

// list id in request   
moviesRouter.post('/', checkAuth, async (req, res) => {
    try {
        // const list = await listModel.findOne({ listName: req.params.listName, user: req.userId });
        // const id = list._doc._id;

        let movie = await movieModel.findOne({ movieName: req.body.movieName, list: req.body.listId });
        if (movie) {
            return res.status(400).json({
                message: 'Movie already exist',
            });
        }

        const doc = new movieModel({
            movieName: req.body.movieName,
            list: req.body.listId,
        });
        movie = await doc.save();
        res.status(200).json(movie);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            mesage: "Cannot create movie",
        });
    }
});

moviesRouter.get('/:id', checkAuth, async (req, res) => {
    try {
        // const list = await listModel.findOne({ listName: req.params.listName, user: req.userId });
        // const id = list._doc._id;

        const movie = await movieModel.findOne({ _id: req.params.id });
        res.status(200).json(movie);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            mesage: "Cannot get movie",
        });
    }
});

moviesRouter.patch('/:id', checkAuth, async (req, res) => {
    try {
        // const list = await listModel.findOne({ listName: req.params.listName, user: req.userId });
        // const id = list._doc._id;
        let movie = await movieModel.findOne({ _id: req.params.id });

        if (!movie) {
            return res.status(400).json({
                message: 'Movie does not exist',
            });
        }
        
        await movieModel.updateOne({ _id: req.params.id },
            { movieName: req.body.movieName, checked: req.body.checked, heart: req.body.heart });
        movie = await movieModel.findOne({ _id: req.params.id });
        res.status(200).json(movie);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            mesage: "Cannot update movie",
        });
    }
});

moviesRouter.delete('/:id', checkAuth, async (req, res) => {
    try {
        // const list = await listModel.findOne({ listName: req.params.listName, user: req.userId });
        // const id = list._doc._id;
        await movieModel.deleteOne({ _id: req.params.id });

        res.status(200).json({
            message: "Movie was deleted",
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            mesage: "Cannot delete movie",
        });
    }
});

export default moviesRouter;