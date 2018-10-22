import React from 'react'
import PropTypes from 'prop-types';

import './gist-info.css'
import moment from 'moment'

const GistInfo = ({ gistInfo }) => (
  <div className='gist-info'>
    <h3 className='titulo'>
      <a href={`https://gist.github.com/${gistInfo.id}`}>{gistInfo.nome}</a>
    </h3>
    <h3 className='titulo'>
      {gistInfo.descricao}
    </h3>

    <p>
      Criado em: {moment(gistInfo.dataCriacao).format('DD/MM/YYYY, h:mm:ss a')} - Última atualização em: {gistInfo.dataUpdate} 
    </p>
  </div>
)

GistInfo.propTypes = {
  gistInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired
  })
}

export default GistInfo
