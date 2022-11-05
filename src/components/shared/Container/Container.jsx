import React from 'react';
import './Container.css'
import classNames from "classnames";

const Container = ({children}) => {

    return (
        <div className={classNames('container', 'className')}>
            {children}
        </div>
    );
};

export default Container;