const events = require('express').Router()
const db = require('../models')
const { Event } = db
const { Op } = require('sequelize')

events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [['event_length_minutes', 'ASC']],
            where: {
                event_name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundEvents)
    } catch (err) {
        res.status(500).json(err)
    }
})

events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

events.get('/:name', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({ where: { event_name: req.params.name } })
        res.status(200).json(foundEvent)
    } catch (err) {
        res.status(500).json(err)
    }
})

events.put('/:name', async (req, res) => {
    try {
        const updatedEvents = Event.update(req.body, { where: { event_name: req.params.name } })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

events.delete('/:name', (req, res) => {
    try {
        const deletedEvents = Event.destroy({
            where: {
                event_name: req.params.name
            }
        })
        res.status(200).json({
            message: `Successfully DELETED ${deletedEvents} event(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = events