export const setToken = token => {
    if (token) {
        localStorage.setItem('token', token)
    } else {
        localStorage.removeItem('token')
    }
}

const getToken = () => {
    const token = localStorage.getItem('token')

    try {
        // Get Token Header
        const base64HeaderUrl = token.split('.')[0];
        const base64Header = base64HeaderUrl.replace('-', '+').replace('_', '/');
        const headerData = JSON.parse(window.atob(base64Header));
    
        // Get Token payload and date's
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const dataJWT = JSON.parse(window.atob(base64));
        dataJWT.header = headerData;
    
        return dataJWT;
      } catch (err) {
        return false;
      }

    // if (token) {
    //     const payload = JSON.parse(atob(token.split('.'[1])))

    //     if (payload.exp < Date.now() / 1000) {
    //         localStorage.removeItem('token')
    //         token = null
    //     }
    // }

    // return token
}

export const removeToken = () => {
    localStorage.removeItem('token')
}

export const getUserFromToken = () => {
    const token = getToken()

    return token ? token.user : null
}