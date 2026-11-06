import { Search } from "@/types/search"
import { ApiRoutes } from "./constants"
import { axiosInstance } from "./instance"

export const getSearch = async (value: string): Promise<Search[]> => {
    const { data } = await axiosInstance.get<Search[]>(`${ApiRoutes.SEARCH}`,
        { params: { value } }
    )

    return data
}