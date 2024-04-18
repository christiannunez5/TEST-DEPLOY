import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ users: "blogs bla bla bla " })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({ user: `this is blog ${id}` })
})

export default router;