
import React, { Component } from 'react'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import GitHubService from './../services/GitHubService'

class AppContentUsuario extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })

      GitHubService.getDadosUsuario(value)
        .then(result => {
          this.setState({
            userinfo: {
              userName: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
        .always(() => {
          this.setState({ isFetching: false })
        })
    }
  }

  getRepos (type) {
    return (e) => {
      GitHubService.getDadosUsuario(this.state.userinfo.login, type)
        .then(result => {
          this.setState({
            [type]: result.map((item) => {
              return {
                name: item.name,
                link: item.html_url
              }
            })
          })
        })
    }
  }

  render () {
    return (
      <div className='app'>
        <Search isDisabled={this.state.isFetching} placeholder='Digite o nome do usuário'
          handleSearch={(e) => this.handleSearch(e)} />
        { this.state.isFetching && <div>Carregando...</div>}
        { !!this.state.userinfo && <UserInfo userinfo={this.state.userinfo} /> }
        { !!this.state.userinfo && <Actions getRepos={this.getRepos('repos')} getStarred={this.getRepos('starred')} /> }
        { !!this.state.repos.length &&
          <Repos className='repos' title='Repositórios' repos={this.state.repos} />
        }
        { !!this.state.starred.length &&
          <Repos className='starred' title='Favoritos' repos={this.state.starred} />
        }

      </div >
    )
  }
}

export default AppContentUsuario
