import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// 如果您希望您的应用程序能够离线工作并更快加载，您可以更改
// unregister() 到下面的 register()。 请注意，这会带来一些陷阱。
// 了解有关服务工作者的更多信息：https://bit.ly/CRA-PWA
serviceWorker.unregister();
