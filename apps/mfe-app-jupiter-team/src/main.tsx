/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper';

let rootGlobal = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  rootGlobal.render((<App />) as ReactNode);
}

renderWithQiankun({
  async mount(props: any) {
    const { container } = props;
    rootGlobal = ReactDOM.createRoot(
      container
        ? container.querySelector('#root')
        : document.querySelector('#root'),
    );
    rootGlobal.render(
      (
        <>
          <App />
        </>
      ) as ReactNode,
    );
  },
  async bootstrap() {
    console.log('Project Started!');
  },
  async unmount() {
    rootGlobal.unmount();
  },
  async update() {},
});
