import React from 'react';
import { useRecoilState } from 'recoil';
import { itemWithID } from '../Atoms';

export default function PropertyItem({ id }) {
    const [item, setItem] = useRecoilState(itemWithID(id));

    const onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setItem({
            ...item,
            [name]: value,
        });
    };

    return (
        <div className='property-item'>
            <div className='form-group'>
                <label htmlFor='x'>X Position</label>
                <input className='form-control' name='x' type='number' value={item.x} onChange={onChange} />
            </div>

            <div className='form-group'>
                <label htmlFor='y'>Y Position</label>
                <input className='form-control' name='y' type='number' value={item.y} onChange={onChange} />
            </div>

            <div className='form-group'>
                <label htmlFor='width'>Width</label>
                <input className='form-control' name='width' type='number' value={item.width} onChange={onChange} />
            </div>

            <div className='form-group'>
                <label htmlFor='height'>Height</label>
                <input className='form-control' name='height' type='number' value={item.height} onChange={onChange} />
            </div>

            <div className='form-group'>
                <label htmlFor='color'>Color</label>
                <input className='form-control' name='color' type='color' value={item.color} onChange={onChange} />
            </div>

            <div className='form-group'>
                <label htmlFor='label'>label</label>
                <input className='form-control' name='label' type='text' value={item.label} onChange={onChange} />
            </div>
        </div>
    );
}
