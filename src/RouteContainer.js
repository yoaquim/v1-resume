import React from 'react'
import Page from './Page'

let viewMap = {
    page: <Page />
};

function RouteContainer(props) {
    return (
        <div>
            {viewMap[props.params.path] || viewMap.page}
        </div>
    )
}

export default RouteContainer;
