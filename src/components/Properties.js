import React from 'react';
import { useRecoilValue } from 'recoil';
import { canvasListState } from '../Atoms';
import PropertyColor from './PropertyColor';
import PropertyItem from './PropertyItem';

export default function Properties({ id }) {
    const canvasList = useRecoilValue(canvasListState);

    return (
        <div class='properties'>
            <PropertyColor />
            {canvasList.map((canvasItem) => (
                <PropertyItem id={canvasItem.id} key={canvasItem.id} />
            ))}
        </div>
    );
}
