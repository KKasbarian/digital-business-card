import React from "react";

function ToggleSwitch() {
    return(
        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="slider round"></div>
            </label>
        </div>
    )
}

export default ToggleSwitch