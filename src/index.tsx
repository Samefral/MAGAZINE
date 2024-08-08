import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import HistoryRouter from './hocs/history-route/history-route';
import browserHistory from './browser-history';
import App from './components/app/app';
import store, { persistor } from './store';
import { fetchProductsAction } from './store/api-actions';

store.dispatch(fetchProductsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <HistoryRouter history={browserHistory}>
          <App />
        </HistoryRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
