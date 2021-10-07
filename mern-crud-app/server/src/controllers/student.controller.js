const Student = require('../models/student.model')

const express = require('express')

const router = express.Router();

router.post('/', async (req, res) => {
    const student = await Student.create(req.body)
    res.status(201).json(student)
})

router.get('/', async (req, res) => {
    const students = await Student.find({}).lean().exec();
    res.status(200).json({students:students})
})

router.get('/:id', async (req, res) => {
    const students = await Student.findById(req.params.id).lean().exec();
    res.status(200).json({students:students})
})

router.patch('/:id', async (req, res) => {
    const user = await Student.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.status(200).json(user)
})

router.delete('/:id', async (req, res) => {
    const user = await Student.findByIdAndDelete(req.params.id)
    res.status(200).json(user)
})

module.exports = router;