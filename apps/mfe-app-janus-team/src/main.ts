import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import {
    renderWithQiankun,
    qiankunWindow,
    type QiankunProps,
} from 'vite-plugin-qiankun/dist/helper';

let instance: ReturnType<typeof createApp> | null = null;
let appDom: string | Element | null = '#app';

const initQianKun = (): void => {
    renderWithQiankun({
        bootstrap() {
            return Promise.resolve();
        },
        mount(props: QiankunProps) {
            return new Promise((resolve, reject) => {
                try {
                    const { container } = props;
                    render(container || null);
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
        },
        unmount() {
            return new Promise((resolve, reject) => {
                try {
                    unmount();
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
        },
        update() {
            return Promise.resolve();
        },
    });
};

const render = (container: Element | null | string): void => {
    appDom = container ? container : '#app';

    const app = createApp(App);

    app.use(router);

    instance = app;
    app.mount(appDom);
};

const unmount = (): void => {
    if (instance) {
        instance.unmount();

        if (typeof appDom === 'string') {
            const el = document.querySelector(appDom);
            if (el) {
                el.innerHTML = '';
            }
        } else if (appDom instanceof Element) {
            appDom.innerHTML = '';
        }

        instance = null;
    }
};

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    initQianKun();
} else {
    render(null);
}
