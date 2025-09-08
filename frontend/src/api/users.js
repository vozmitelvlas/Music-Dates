import {apiClient} from "../utils";

export const getUsersAsync = () => apiClient('/users')

export const getRolesASync = () => apiClient('/roles')

export const saveUserRoleAsync = (userId, roleId) => apiClient(`/users/${userId}`, 'PATCH', {roleId})

export const deleteUserAsync = (id) => apiClient(`/users/${id}`, 'DELETE')