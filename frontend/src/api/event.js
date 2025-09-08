import {apiClient} from "../utils";

export const removeEventAsync = (id) => () =>
    apiClient(`/platforms/${id}`, 'DELETE')