import axios from 'axios';
 
const service = axios.create({
  baseURL: 'http://localhost:5000/auth',
  withCredentials: true
});
export default service;

function signup(user) {
    return service.post('/signup', user).then(response => response.data)
  }
  export {signup}