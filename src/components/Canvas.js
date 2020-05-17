import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { canvasListState, backgroundColor } from '../Atoms';
import CanvasItem from './CanvasItem';

export default function Canvas() {
    const [color] = useRecoilState(backgroundColor);
    const canvasList = useRecoilValue(canvasListState);

    return (
        <div style={{ backgroundColor: color }} className='canvas'>
            {canvasList.map((canvasItem) => (
                <CanvasItem id={canvasItem.id} key={canvasItem.id} />
            ))}
        </div>
    );
}
