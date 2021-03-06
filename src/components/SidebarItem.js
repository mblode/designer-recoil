import React from 'react';
import { useRecoilValue } from 'recoil';
import { itemWithID } from '../Atoms';

export default function SidebarItem({ id }) {
    const item = useRecoilValue(itemWithID(id));

    return (
        <div className='sidebar-item'>
            <code>
                <pre>{JSON.stringify(item)}</pre>
            </code>
        </div>
    );
}
