import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';

import AppContentUsuario from './components/app-content-usuario';
import AppContentGists from './components/app-content-gists';
import Menu from './components/menu';

class App extends Component {
  
  render () {
    return (
      <div>
        <React.Fragment>
          <Menu />
          <Switch>            
            <Route path="/gists" exact component={AppContentGists} />
            <Route path="/usuarios" exact component={AppContentUsuario} />
            <Route path="/" exact component={AppContentUsuario} />
          </Switch>
        </React.Fragment>
      </div>  
    )
  }
}

export default withRouter(App)
