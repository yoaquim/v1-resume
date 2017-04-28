import React from 'react'
import AboutMe from './AboutMe'
import Resume from './Resume'

class Page extends React.Component {

    render() {
        return (
            <div>
                <AboutMe/>
                <Resume/>
            </div>
        )
    }

}

export default Page;
