import LayOut from '../components/LayOut'
import { store } from '../redux/store'
import { Provider } from 'react-redux';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <LayOut>
          <Component {...pageProps} />
      </LayOut>
    </Provider>
    )
}

export default MyApp
