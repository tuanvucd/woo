// This is just an example,
// so you can safely delete all default props below

export default {
  app_name: 'WereWolf',
  failed: 'Action failed',
  success: 'Action was successful',
  submit: 'Submit',
  reset: 'Reset',
  logout: 'Logout',
  setting: 'Setting',
  profile: 'Profile',
  sound: 'Sound',
  vibrate: 'Vibrate',
  music: 'Music',
  account: 'Account',

  login: {
    username: {
      label: 'Username *',
      hint: 'Your nickname, ex: badman',
      validate: 'Username  is required, not contains whitespace, must be between 5 and 16 characters in length'
    },
    password: {
      label: 'Password *',
      hint: 'Your secret password *******',
      validate: 'Password is required, not contains whitespace, must be between 8 and 16 character in length'
    },
    save_info: 'Save Login'
  }
}
