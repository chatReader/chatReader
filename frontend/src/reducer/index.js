export const initialState = { loggedIn: false, signUp: false };

export function reducer(state, action) {
  switch (action.type) {
    case 'login':
      if (state.loggedIn === false) {
        console.log('user logged in app');
        return { loggedIn: (state.loggedIn = true) };
      }
    case 'signUp':
      if (state.signUp === false) {
        console.log('user signed up for the app');
        return { signUp: (state.signUp = true) };
      }
    default:
      throw new Error();
  }
}
