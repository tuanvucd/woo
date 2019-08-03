const Auth = class {
  constructor () {
    this.user = {}
    this.getUser()
  }

  getUser () {
    const userStorage = localStorage.getItem('user')
    if (userStorage) {
      this.user = JSON.parse(userStorage)
    } else {
      // redirect to login
      console.log('redirect to login page')
    }
  }

  login (data, callback) {
    if (data.token) {
      this.user.token = data.token
      localStorage.setItem('token', this.user.token)
      if (data.username && data.password) {
        this.user.username = data.username
        this.user.password = data.password
      }
      localStorage.setItem('user', JSON.stringify(this.user))
      // redirect to previous page or homepage
      if (callback) callback()
    } else {
      this.logout(callback)
    }
  }

  logout (callback) {
    this.user = {}
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    // redirect to login page
    if (callback) callback()
  }
}

export default async ({ Vue }) => {
  Vue.prototype.$auth = new Auth(Vue.$router)
}
