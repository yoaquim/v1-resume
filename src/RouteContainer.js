import React from 'react'
import Resume from './Resume'

let viewMap = {
    resume: <Resume />
};

function RouteContainer(props) {
    return (
        <div>
            {viewMap[props.params.path] || viewMap.resume}
        </div>
    )
}

export default RouteContainer;
