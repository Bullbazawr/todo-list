import { useMutation, useQueryClient } from "@tanstack/react-query"
import todoService from '../services/todo.service'
import { ITodo } from '../app.interface'


export const useDeleteTodo = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (id: string) => {
            await todoService.deleteTodo(id)
        },
        onSuccess: () => queryClient.invalidateQueries()
    })
}