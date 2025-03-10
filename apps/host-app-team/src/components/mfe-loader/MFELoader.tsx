import { useEffect } from 'react';
import { registerMicroApps, start } from 'qiankun';

const MFELoader: React.FC = () => {
    async function loadMicroFrontend() {
            const microFrontends = [
                {
                    name: 'mfe-janus',
                    entry: '//localhost:5174',
                    container: '#mfe-container',
                    activeRule: '/protected/janus',
                },
                {
                    name: 'mfe-jupiter',
                    entry: '//localhost:5175',
                    container: '#mfe-container',
                    activeRule: '/protected/jupiter',
                },
            ];

            registerMicroApps(microFrontends);
            start({
                singular: true,
                sandbox: {
                    experimentalStyleIsolation: false,
                },
            });
        }

    useEffect(() => {
        loadMicroFrontend();
    }, []);

    return <div id="mfe-container" />;
};

export default MFELoader;