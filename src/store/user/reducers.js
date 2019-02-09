import * as actions from "./actions";

const initialState = {
  user: {
    isFetched: undefined
  }
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_GET_FAILED:
        return {
          ...state,
          user: {
            isFetched: false
          }
        }

      case actions.USER_GET_UNDEFINED:
        return {
          ...state,
          user: {
            isFetched: false
          }
        }

      case actions.USER_GET_SUCCESS:
        return {
          ...state,
          user: {
            isFetched: true
          }
        }

    default:
      return state;

  }
}

export default user;
