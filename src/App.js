import React from 'react';
import { RecoilRoot } from 'recoil';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import Properties from './components/Properties';

function App() {
    return (
        <RecoilRoot>
            <main className='main'>
                <Sidebar />
                <Canvas />
                <Properties />
            </main>
        </RecoilRoot>
    );
}

export default App;
