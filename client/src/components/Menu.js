import React from 'react';

const Menu = ({items}) => {
    return (
        <div className="menu-wrapper row between">
            {items.map((item, idx) => <div key={idx} className="menu-item row">{item}</div>)}
        </div>
    );
};

export default Menu;