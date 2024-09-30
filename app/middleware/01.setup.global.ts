export default defineNuxtRouteMiddleware(to => {
  // skip middleware on server
  if (import.meta.server) return
  // skip middleware on client side entirely
  
  if (to.path.includes('/admin')){
      setPageLayout('admin-view')
  }
})
