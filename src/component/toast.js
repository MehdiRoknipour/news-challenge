import React from "react";

const Toast = ({ message }) => (
    <div className="toast__container">
        <a href="">
            <i className="fa fa-close"></i>
        </a>
        <p>{message}</p>
    </div>
);

export default Toast;
