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
            width: 100,
            height: 100,
            color: '#efefef',
            label: '',
        },
    });

export const backgroundColor = atom({
    key: 'backgroundColor',
    default: '#ffffff',
});
