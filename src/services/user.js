import http from './http';

export default class UserService {
  getUsers() {
    return http.get('/users').then((resp) => resp.data);
  }

  getUser(id) {
    return http.get(`/users/${id}`).then((resp) => resp.data);
  }

  editUser(user) {
    return http.put(`/users/${user._id}`, user).then((resp) => resp.data);
  }

  newUser(user) {
    return http.post('/users', user).then((resp) => resp.data);
  }

  deleteUser(id) {
    return http.delete(`/users/${id}`).then((resp) => resp.data);
  }
}
