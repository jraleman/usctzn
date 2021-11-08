import React from 'react';

const ModalInfo = ({ isModalOpen }) => {
    if (!isModalOpen) {
        return null;
    }
    return (
        <div>
            <span>USCTZN</span>
            <p>Author: Jose Ramon Aleman</p>
            <p>Description: Get prepared for the citizenship interview :D</p>
        </div>
    );
};

export default ModalInfo;
