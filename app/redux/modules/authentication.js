const AUTHENTICATING = 'AUTHENTICATING'
const NOT_AUTHED = 'NOT_AUTHED'
const IS_AUTHED = 'IS_AUTHED'

function authenticating () {
  return {
    type: AUTHENTICATING
  }
}

function notAuthed () {
  return {
    type: NOT_AUTHED
  }
}

function isAuthed (uid) {
  return {
    type: IS_AUTHED,
    uid
  }
}

const initialState = {
  isAuthed: false,
  isAuthenticating: false,
  authedId: ''
}

export default function authentication (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: true
      }
    case NOT_AUTHED:
      return {
        isAuthed: false,
        isAuthenticating: false,
        authedId: ''
      }
    case IS_AUTHED:
      return {
        isAuthed: true,
        isAuthenticating: false,
        authedId: action.uid
      }
    default:
      return state
  }
}
