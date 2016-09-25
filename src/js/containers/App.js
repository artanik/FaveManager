import React from 'react';
import dbWorker from '../utils/dbWorker.js';
import App from '../components/App.js';


const Login = <div>login</div>;
const MainApp = <App />;

const AppContainer = () => (dbWorker.checkData() ? MainApp : Login);

export default AppContainer;
