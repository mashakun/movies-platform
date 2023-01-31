import express from 'express';

import { checkAuth, handleValidationErrors } from '../utils/index.js';
import {listModel, movieModel} from '../models/index.js';

const listsRouter = express.Router();

// Если название списков содержит пробелы
listsRouter.post('/', checkAuth, async (req, res) => {
    try {
        let list = await listModel.findOne({ listName: req.body.listName, user: req.userId });
        if (list) {
            return res.status(400).json({
                message: 'List already exist',
            });
        }
        const doc = new listModel({
            listName: req.body.listName,
            user: req.userId,
        });
        list = await doc.save();
        res.json(list);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            mesage: "Cannot create list",
        });
    }
});

listsRouter.get('/', checkAuth, async (req, res) => {
    try {
        const lists = await listModel.find({ user: req.userId });
        res.json(lists);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            mesage: "Cannot get all lists",
        });
    }
});

listsRouter.get('/:id/', checkAuth, async (req, res) => {
    try {
        const list = await listModel.findOne({ _id: req.params.id });
        const elements = await movieModel.find({ list: req.params.id });
        res.status(200).json({
            "list" : list,
            "elements" : elements,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            mesage: "Cannot get list",
        });
    }
});

listsRouter.patch('/:id/', checkAuth, async (req, res) => {
    try {
        console.log(req.body.listName);
        let list = await listModel.findOne({ _id: req.params.id });
        if (!list) {
            return res.status(400).json({
                message: 'List does not exist',
            });
        }

        await listModel.updateOne({ _id: req.params.id }, { listName: req.body.listName });
        list = await listModel.findOne({ _id: req.params.id });
        res.status(200).json(list);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            mesage: "Cannot update list",
        });
    }
});

listsRouter.delete('/:id/', checkAuth, async (req, res) => {
    try {
        // const list = await listModel.findOne({ _id: req.params.id });
        // const id = list._doc._id;
        await movieModel.deleteMany({ list: req.params.id });
        await listModel.deleteOne({ _id: req.params.id });

        res.status(200).json({
            message: "List was deleted",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            mesage: "Cannot delete list",
        });
    }
});

//============================================================================
// mooviesRouter
// // list id in request   
// listsRouter.post('/:listName/', checkAuth, async (req, res) => {
//     try {
//         const list = await listModel.findOne({ listName: req.params.listName, user: req.userId });
//         const id = list._doc._id;

//         let movie = await movieModel.findOne({ movieName: req.body.movieName, list: id });
//         if (movie) {
//             return res.status(400).json({
//                 message: 'Movie already exist',
//             });
//         }

//         const doc = new movieModel({
//             movieName: req.body.movieName,
//             list: id,
//         });
//         movie = await doc.save();
//         res.status(200).json(movie);

//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             mesage: "Cannot create movie",
//         });
//     }
// });

// listsRouter.get('/:listName/:movieName/', checkAuth, async (req, res) => {
//     try {
//         const list = await listModel.findOne({ listName: req.params.listName, user: req.userId });
//         const id = list._doc._id;

//         const movie = await movieModel.findOne({ movieName: req.params.movieName, list: id });
//         res.status(200).json(movie);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             mesage: "Cannot get movie",
//         });
//     }
// });

// listsRouter.patch('/:listName/:movieName/', checkAuth, async (req, res) => {
//     try {
//         const list = await listModel.findOne({ listName: req.params.listName, user: req.userId });
//         const id = list._doc._id;
//         const movie = await movieModel.findOne({ movieName: req.params.movieName, list: id });

//         if (!movie) {
//             return res.status(400).json({
//                 message: 'Movie does not exist',
//             });
//         }
//         await movieModel.updateOne({ movieName: req.params.movieName, list: id },
//             { movieName: req.body.movieName, checked: req.body.checked, heart: req.body.heart });
//         res.status(200).json({
//             message: "Updated",
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             mesage: "Cannot update movie",
//         });
//     }
// });

// listsRouter.delete('/:listName/:movieName/', checkAuth, async (req, res) => {
//     try {
//         const list = await listModel.findOne({ listName: req.params.listName, user: req.userId });
//         const id = list._doc._id;
//         await movieModel.deleteOne({ movieName: req.params.movieName, list: id });

//         res.status(200).json({
//             message: "Movie was deleted",
//         });
//     } catch(err) {
//         console.log(err);
//         res.status(500).json({
//             mesage: "Cannot delete movie",
//         });
//     }
// });

export default listsRouter;