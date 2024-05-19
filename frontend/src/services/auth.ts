interface IAbortSignal {
    signal?: AbortSignal | null
  }
  
  interface ILogin extends IAbortSignal {
    username: string
    password: string
  }
  
  interface IToken {
    accessToken: string
  }
  
  export async function login({ username, password, signal }: ILogin): Promise<IToken> {
    return await fetch(`/api/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      signal: signal,
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => {
        return response.json()
      })
      .catch(er => {
        if (er.name === 'AbortError') {
          return { statusCode: -1, message: 'The login request has been canceled' }
        }
        return { statusCode: 503, message: 'Service Unavailable' }
      })
  }
  