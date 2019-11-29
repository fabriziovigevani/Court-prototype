import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createClient, Provider } from 'urql'
import { Main } from '@aragon/ui'

const client = createClient({
  url: 'http://localhost:5000/graphql',
})

ReactDOM.render(
  <Provider value={client}>
    <Main>
      <App />
    </Main>
  </Provider>,
  document.getElementById('root')
)
