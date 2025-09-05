export const selectEvent = ({event}) => event
export const selectEventTitle = ({event}) => event.description.title
export const selectEventLocation = ({event}) => event.description.location
export const selectEventSkill = ({event}) => event.description.skill
export const selectEventDescription = ({event}) => event.description
export const selectEventStartTime = ({event}) => event.time.startTime
export const selectEventDuration = ({event}) => event.time.duration
export const selectEventParticipants = ({event}) => event.participants

export const selectEventPrice = ({event}) => event.price