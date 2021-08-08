
export default function gameState(state = 'HOME', action) {
  switch (action.type) {
    case "HOME":
      return action.payload
    default:
      return state
  }
}
