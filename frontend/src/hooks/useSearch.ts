import { useEffect, useState } from "react"

import { Api } from "@/services/api-client"
import { Search } from "@/types/search"

type Return = {
    listSearch: Search[] | null,
    loading: boolean,
    error: Error | null
}

export function useSearch(value: string): Return {
    const [listSearch, setSearch] = useState<Search[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function getSearch() {

            setLoading(true)
            setError(null)

            try {
                const search = await Api.search.getSearch(value)
                setSearch(search)
            } catch (error) {
                setError(error as Error)
            } finally {
                setLoading(false)
            }
        }

        getSearch()
    }, [value])

    return { error, listSearch, loading }
}