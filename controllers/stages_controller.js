const stages = require('express').Router()
const db = require('../models')
const { Stage } = db
const { Op } = require('sequelize')

stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll({
            order: [['stage_address', 'ASC']],
            where: {
                stage_address: { [Op.like]: `%${req.query.address ? req.query.address : ''}%` }
            }
        })
        res.status(200).json(foundStages)
    } catch (err) {
        res.status(500).json(err)
    }
})

stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

stages.get('/:address', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({ where: { stage_address: req.params.address } })
        res.status(200).json(foundStage)
    } catch (err) {
        res.status(500).json(err)
    }
})

stages.put('/:address', async (req, res) => {
    try {
        const updatedStages = Stage.update(req.body, { where: { stage_address: req.params.address } })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

stages.delete('/:address', (req, res) => {
    try {
        const deletedStages = Stage.destroy({
            where: {
                stage_address: req.params.address
            }
        })
        res.status(200).json({
            message: `Successfully DELETED ${deletedStages} stage(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = stages