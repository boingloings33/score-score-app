import {
  AuthResponse,
  CreateUserResponse,
  DeleteUserResponse,
  GetMeResponse,
  GetUserResponse,
  SearchUsersResponse,
  UpdateUserResponse,
} from 'shared/types/api'

import { CreateApiService } from '@/api/Service'
import { NewUserFields } from '@/components/forms/NewUserForm'

const UserService = CreateApiService({
  baseURL: '/users',
})

// GET
export function getMe() {
  return UserService.get<GetMeResponse>('/me').then((res) => res.data.data)
}
export function searchUsers(searchTerm: string) {
  return UserService.get<SearchUsersResponse>(
    `/search?searchTerm=${searchTerm}`
  ).then((res) => res.data.data)
}

export function getUser(userId: number) {
  return UserService.get<GetUserResponse>(`/${userId}`).then(
    (res) => res.data.data
  )
}

// POST
export function createUser(user: NewUserFields) {
  return UserService.post<CreateUserResponse>('/', user).then(
    (res) => res.data.data
  )
}
export function auth(username: string, password: string) {
  return UserService.post<AuthResponse>('/auth', {
    username,
    password,
  }).then((res) => res.data.data)
}

// PUT
export function updateUser({
  userId,
  firstName,
  lastName,
  profilePic,
}: {
  userId: number
  firstName?: string
  lastName?: string
  profilePic?: string
}) {
  return UserService.put<UpdateUserResponse>(`/${userId}`, {
    firstName,
    lastName,
    profilePic,
  }).then((res) => res.data.data)
}

// DELETE
export function deleteUser(userId: number) {
  return UserService.delete<DeleteUserResponse>(`/${userId}`).then(
    (res) => res.data.data
  )
}

export default UserService
