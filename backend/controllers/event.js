const Event = require('../models/Event')
const User = require("../models/User");

async function addEvent(event) {
    const createdEvent = await Event.create(event)

    return createdEvent.populate([
        {
            path: 'participants.members',
            model: 'User'
        },
        {
            path: 'organizer',
            model: 'User',
        }
    ])
}

async function getEvent(id) {
    return Event.findById(id).populate([
        {
            path: 'participants.members',
            model: 'User'
        },
        {
            path: 'organizer',
            model: 'User',
        }
    ])
}

async function editEvent(id, event) {
    return Event.findByIdAndUpdate(id, event, {returnDocument: 'after'})
        .populate([
            {
                path: 'participants.members',
                model: 'User'
            },
            {
                path: 'organizer',
                model: 'User',
            }
        ])
}

async function deleteEvent(id) {
    return Event.deleteOne({_id: id})
}

async function getEvents() {
    return Event.find()
}

module.exports = {
    addEvent,
    editEvent,
    deleteEvent,
    getEvent,
    getEvents,
}