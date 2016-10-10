import { fetchScore } from '~/api/scores'
import { fetchUser } from '~/api/users'
import { addUser } from '~/redux/modules/users'

const FETCHING_SCORE = 'FETCHING_SCORE'
const FETCHING_SCORE_SUCCESS = 'FETCHING_SCORE_SUCCESS'

function fetchingScore () {
  return {
    type: FETCHING_SCORE
  }
}

function fetchingScoreSuccess (uid, score) {
  return {
    type: FETCHING_SCORE_SUCCESS,
    uid,
    score
  }
}

function userScores (state = {}, action) {
  switch (action.type) {
    case FETCHING_SCORE_SUCCESS:
      return {
        ...state,
        [action.uid]: action.score
      }
    default:
      return state
  }
}

export function fetchAndHandleScore (uid) {
  return function (dispatch, getState) {
    dispatch(fetchingScore())
    return fetchScore(uid)
      .then((scoreInfo) => {
        dispatch(
          fetchingScoreSuccess(
            uid,
            !scoreInfo || !scoreInfo.score ? 0 : scoreInfo.score
          )
        )

        if (scoreInfo) {
          return dispatch(addUser(uid, {
            uid,
            displayName: scoreInfo.displayName,
            photoURL: scoreInfo.photoURL
          }))
        } else {
          return fetchUser(uid).then((user) => dispatch(addUser(uid, user)))
        }
      })
  }
}

const initialState = {
  isFetching: true,
  listenerSet: false,
  leaderboardUids: [],
  userScores: {}
}

export default function scores (state = initialState, action) {
  switch (action.type) {
    case FETCHING_SCORE:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_SCORE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userScores: userScores(state.userScores, action)
      }
    default:
      return state
  }
}
