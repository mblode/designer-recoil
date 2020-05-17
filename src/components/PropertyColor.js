import React from 'react';
import { useRecoilState } from 'recoil';
import { backgroundColor } from '../Atoms';

export default function PropertyColor() {
    const [color, setColor] = useRecoilState(backgroundColor);

    const onChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div className='property-item'>
            <div className='form-group'>
                <label htmlFor='color'>Canvas background</label>
                <input className='form-control' type='color' name='color' value={color} onChange={onChange} />
            </div>
        </div>
    );
}
