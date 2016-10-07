# Schema

## Firebase

```
Firebase
  /users
    UID
      displayName
      photoURL
      uid
  /scores
    UID
      score
      displayName
      photoURL
      uid
```

## Redux
```
Redux
  .users
    UID
      displayName
      photoURL
      uid
  .scores
    isFetching
    listenerSet
    leaderboardUids
    usersScores
      uid: score
```
