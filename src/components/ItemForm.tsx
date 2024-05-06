import React from 'react';

export const ItemForm = () => {
    return (
        <form className="item-form">
            <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div className="field">
                <label htmlFor="description">description</label>
                <input type="text" id="description" />{' '}
            </div>
            <div className="field">
                <label htmlFor="price">price</label>
                <input type="number" id="price" />
            </div>
            <button className="submit-button">Submit</button>
        </form>
    );
};
