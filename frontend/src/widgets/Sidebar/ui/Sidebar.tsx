import { useState } from 'react';

import './Sidebar.scss';

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <button type="button" onClick={onToggle}>
                toggle
            </button>
        </div>
    );
};
