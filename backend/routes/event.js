const {getEvents, getEvent, addEvent, editEvent, deleteEvent} = require("../controllers/event");
const {addMember, deleteMember} = require("../controllers/members");
const authenticated = require("../middlewares/authenticated");
const hasAccess = require("../middlewares/hasAccess");
const mapEvent = require("../helpers/mapEvent");
const mapUser = require("../helpers/mapUser");
const ROLES = require("../constants/roles");
const Event = require('../models/Event')
const express = require('express');
const router = express.Router({ mergeParams: true })

const isOrganizer = async (req) => {
    const event = await Event.findById({ _id: req.params.id })
    const organizerId = event.organizer?.toString?.()
    const userId = req.user.id?.toString?.()
    return event && organizerId === userId
}

router.get('/', async (req, res) => {
    const events = await getEvents()
    res.send({data: events.map(mapEvent)})
})
router.get('/:id', async (req, res) => {
    const event = await getEvent(req.params.id)
    res.send({data: mapEvent(event)})
})

router.post('/:id/members', authenticated, hasAccess([ROLES.ADMIN], isOrganizer), async (req, res) => {
    const member = await addMember(req.params.id, req.body.memberId)
    res.send({data: mapUser(member)})
})

router.delete('/:eventId/members/:memberId', authenticated, hasAccess([ROLES.ADMIN], isOrganizer),async (req, res) => {
    await deleteMember(req.params.eventId, req.params.memberId)
    res.send({error: null})
})

router.post('/', authenticated, async (req, res) => {
    const newEvent = await addEvent(req.body)

    res.send({ data: mapEvent(newEvent)})
})

router.patch('/:id', authenticated, hasAccess([ROLES.ADMIN], isOrganizer), async (req, res) => {
    const updatedEvent = await editEvent(req.params.id, req.body)
    res.send({data: mapEvent(updatedEvent)})
})

router.delete('/:id', authenticated, hasAccess([ROLES.ADMIN], isOrganizer), async (req, res) => {
    await deleteEvent(req.params.id)
    res.send({error: null})
})

module.exports = router