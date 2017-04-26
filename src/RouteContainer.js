import React from 'react'
import Resume from './Resume'

let viewMap = {
    navBar: <NavBar />,
    home: <Resume />
};

function RouteContainer(props) {
    return (
        <div>
            {viewMap.navBar}
            {viewMap[props.params.path] || viewMap.home}
        </div>
    )
}

function NavBar() {
    return (
        <div className="dummy-nav-bar">
            <h3 className="card">
                This is a dummy navigation bar.
            </h3>
        </div>
    )
}

export default RouteContainer;
