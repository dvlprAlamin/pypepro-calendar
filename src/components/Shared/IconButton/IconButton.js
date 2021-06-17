import React from 'react';

const IconButton = ({ bg, icon, title }) => {
    return (
        <span style={{ background: bg, cursor: 'pointer' }} className="d-inline-flex align-items-center waves-effect white-text py-2 px-3 radius-10">
            <i className="material-icons text-light-blue white circle p-1 mr-2">
                {icon}
            </i>
            {title}
        </span>
    );
};

export default IconButton;