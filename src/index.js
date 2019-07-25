import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

import { Developer } from './developer';

const developer = new Developer(100);
developer.printDeveloperID();

// npm run build
// npm start - открыть консоль, менять 100 на другое - все подхватывает, консоль обновляется

ReactDom.render(
  <App />,
  // указываем куда будет вставляться React приложение на странице
  document.querySelector('#web-page')
);
