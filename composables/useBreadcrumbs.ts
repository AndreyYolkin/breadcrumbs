import { defineStore } from 'pinia'

export interface breadcrumb {
    name: string
    path: string
    disabled?: boolean
}

export const useBreadcrumbs = () => {
    const useDefinedState = defineStore('breadcrumbs', {
        state: () => ({
            breadcrumbs: [] as breadcrumb[]
        })
    })
    const state = useDefinedState()
    const setBreadcrumbs = (breadcrumbs: breadcrumb[]) => {
        state.breadcrumbs = breadcrumbs
    }
    return { state, setBreadcrumbs }
}