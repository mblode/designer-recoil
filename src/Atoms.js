import { atom } from 'recoil';

export const canvasListState = atom({
    key: 'canvasListState',
    default: [],
});

export const itemWithID = (id) =>
    atom({
        key: `item${id}`,
        default: {
            x: 0,
            y: 0,
            z: 1,
            width: 100,
            height: 100,
            color: '#efefef',
            label: '',
        },
    });

export const settingsState = atom({
    key: 'settings',
    default: {
        backgroundColor: '#ffffff',
        color: '#000',
    },
});
