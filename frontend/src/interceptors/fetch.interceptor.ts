import { redirect } from 'react-router-dom'

export const fetchInterceptor = async () => {
  const { fetch: originalFetch } = window
  window.fetch = async (...args) => {
    const token = localStorage.getItem('token')
    const [resource, config] = args

    let response
    if (resource.toString().search('login') !== -1) {
      response = await originalFetch(resource, config)
    } else {
      if (config) {
        response = await originalFetch(resource, {
          ...config,
          headers: { ...config?.headers, Authorization: 'Bearer ' + token }
        }).catch(handleResponse)
      } else {
        response = await originalFetch(resource, {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + token }
        })
          .then(handleResponse)
          .catch(handleResponse)
      }
    }
    return response
  }
}

function handleResponse(response: Response) {
  if (!response.ok) {
    if ([401, 403].includes(response.status)) {
      // auto logout
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      // redirect('/app/login')
    }

    // const error = (data && data.message) || response.statusText
    return Promise.reject(response)
  }
  return response
}
