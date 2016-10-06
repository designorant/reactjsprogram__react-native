import { ref } from '~/config/constants'

export function setTimer (duration, uid) {
  return ref.child(`settings/${uid}/timerDuration`)
    .set(duration)
}

export function setRest (duration, uid) {
  return ref.child(`settings/${uid}/restDuration`)
    .set(duration)
}
