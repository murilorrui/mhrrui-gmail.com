import http from './http';

export default class EmployeesService {
  getEmployees() {
    return http.get('/employees').then((resp) => resp.data);
  }

  getEmployee(id) {
    return http.get(`/employees/${id}`).then((resp) => resp.data);
  }

  editEmployee(employee) {
    return http.put(`/employees/${employee.id}`, employee).then((resp) => resp.data);
  }

  newEmployee(employee) {
    return http.post('/employees', employee).then((resp) => resp.data);
  }

  deleteEmployee(id) {
    return http.delete(`/employees/${id}`).then((resp) => resp.data);
  }
}
