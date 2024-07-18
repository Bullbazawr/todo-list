import { ITodo, ICreateTodo } from '../app.interface'
import axios from 'axios'
class TodoService {
    private URL = 'http://localhost:3000/todos'
    async getAll() {
        return axios.get<ITodo[]>(`${this.URL}`)
    }
    async getById(id: string) {
        return axios.get<ITodo>(`${this.URL}/todos/${id}`)
    }
    async createTodo(title: string) {
        if(!title){
            alert('Please enter a title')
            return
        }
        return axios.post<any, any, ICreateTodo>(this.URL, {
            title,
            userId: 1,
            completed: false,
        })
    }

    async deleteTodo(id: string) {
        return axios.delete(`${this.URL}/${id}`)
    }
}

export default new TodoService()