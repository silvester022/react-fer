import { useEffect, useState } from 'react'

const localCache = {}

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
    error: null
  })

  const getFetch = async () => {
    if(localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: null,
        error: null
      })

      return 
    }
    
    setLoadingState()

    // setState({
    //   ...state,
    //   isLoading: true
    // })

    const resp = await fetch(url)

    await new Promise(resolve => setTimeout(resolve, 1500))
    
    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText
        }
      })

      return
    }

    const data = await resp.json()

    setState({
      data,
      isLoading: false,
      hasError: null,
      error: null
    })

    //manejo del cache
    localCache[url] = data
  }

  useEffect(() => {
    getFetch()

  }, [url])

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: null,
      error: null
    })
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}