import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';

import './index.css';

// Registering Syncfusion license key
// registerLicense(
//   'ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1gWH5ZcnBVRWBVVkw='
// );
registerLicense(
  'ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1gWX1edHFXRGRbUUA='
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
