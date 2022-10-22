export function manageFriends(state, action) {
  // your code here
  switch(action.type) {
    case "friends/add":
      return { friends: [...state.friends, action.payload]}
    case "friends/remove":
      const newState = state.friends.filter(friend => friend.id === action.id)
      return { friends: [...newState]}
    default:
      return state
  }
}
