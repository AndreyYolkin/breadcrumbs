import { type breadcrumb } from '~/composables/useBreadcrumbs'

export default defineNuxtRouteMiddleware((to) => {
    const { setBreadcrumbs } = useBreadcrumbs()
    setBreadcrumbs(to.meta.breadcrumbs as breadcrumb[] || [])
})