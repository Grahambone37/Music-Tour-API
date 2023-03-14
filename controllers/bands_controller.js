const bands = require('express').Router()
const db = require('../models')
const { Band } = db
const { Op } = require('sequelize')

bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({
            order: [['band_name', 'ASC']],
            where: {
                band_name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundBands)
    } catch (err) {
        res.status(500).json(err)
    }
})

bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

bands.get('/:band_name', async (req, res) => {
    try {
        const foundBand = await Band.findOne({ where: { band_name: req.params.band_name } })
        res.status(200).json(foundBand)
    } catch (err) {
        res.status(500).json(err)
    }
})

bands.put('/:band_name', async (req, res) => {
    try {
        const updatedBands = Band.update(req.body, { where: { band_name: req.params.band_name } })
        res.status(200).json({
            message: `Successfully updated ${updatedBands} band(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

bands.delete('/:band_name', (req, res) => {
    try {
        const deletedBands = Band.destroy({
            where: {
            band_name: req.params.band_name
            }
        })
        res.status(200).json({
            message: `Successfully DELETED ${deletedBands} band(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = bands