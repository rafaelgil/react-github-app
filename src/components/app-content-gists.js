
import React, { Component } from 'react'

import Search from './search'
import UserInfo from './user-info'
import GitHubService from './../services/GitHubService'
import GistInfo from './gist-info/index'

class AppContentGists extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      isFetching: false,
      gistInfo: null
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })

      GitHubService.getGistsById(value)
        .then(result => {

          let object = result.files
          let nomeGist = ''
          for (var key in result.files) {
            if (object.hasOwnProperty(key)) {
              nomeGist = key;              
            }
          }   
          this.setState({
            gistInfo: {
              id: result.id,
              nome: nomeGist,
              descricao: result.description,
              dataCriacao: result.created_at,
              dataUpdate: result.updated_at
            }
          }, () => {
            GitHubService.getDadosUsuario(result.owner.login)
            .then(result => {
              this.setState({
                userinfo: {
                  userName: result.name,
                  photo: result.avatar_url,
                  login: result.login,
                  repos: result.public_repos,
                  followers: result.followers,
                  following: result.following
                }
              })
            })       
          })
        })
        .always(() => {
          this.setState({ isFetching: false })
        })
    }
  }

  render () {
    return (
      <div className='app'>
        <Search isDisabled={this.state.isFetching} placeholder='Digite o Id do Gist'
          handleSearch={(e) => this.handleSearch(e)} />
        { this.state.isFetching && <div>Carregando...</div>}
        { !!this.state.userinfo && <UserInfo userinfo={this.state.userinfo} /> }        
        { !!this.state.gistInfo && <GistInfo gistInfo={this.state.gistInfo} /> }
      </div >
    )
  }
}

export default AppContentGists
