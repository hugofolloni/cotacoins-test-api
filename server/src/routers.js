import express from 'express';
import userRepository from './repositories.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello, we're in the API!");
})

router.get('/users', (req, res) => {
    userRepository.readAll((users) => {
        res.send(users);
    });
})

router.get("/users/:id", (req, res) => {
    userRepository.readById(req.params.id, (user) => {
        res.send(user);
    })
})

router.get('/users/email/:email', (req, res) => {
    userRepository.readByEmail(req.params.email, (user) => {
        res.send(user);
    })
} )

router.post('/users', (req, res) => {
    const params = req.body;
    userRepository.create(params, (id) => {
        res.send(id);
    })
})

router.put('/users', (req, res) => {
    const params = req.body;
    userRepository.update(params.id, params, () => {
        res.send("Updated");
    })
})

router.delete("/users/:id", (req,res) => {
    userRepository.delete(req.params.id, () => {
        res.send("Deleted");
    })
})

export default router;