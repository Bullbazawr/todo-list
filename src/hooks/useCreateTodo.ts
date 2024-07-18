import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import todoService from '../services/todo.service'


export const useCreateTodo = (title: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async() => await todoService.createTodo(title),
        onSuccess: () => queryClient.invalidateQueries(),
    })
}