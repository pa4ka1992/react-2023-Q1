import ReactDOM from 'react-dom/client'
import App from '~app/App'

ReactDOM.hydrateRoot(
  document.getElementById('app')!,
    <App />
)
console.log('hydrated')
