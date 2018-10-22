import ajax from '@fdaciuk/ajax'

const GitHubService = {

  getDadosUsuario (username, type) {
    const internalUserName = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    let url = `https://api.github.com/users${internalUserName}${internalType}`
    return ajax().get(url)
  },

  getGistsById (id) {    
    let url = `https://api.github.com/gists/${id}`
    return ajax().get(url)
  }
};

export default GitHubService;