import React from 'react'

class Sheet extends React.Component {
    render() {
        return (
            <section className="section sheet">
                <div className="container">

                    <div className="sheet tile is-ancestor">
                        {/*Education*/}
                        <div className="tile is-vertical is-4 is-parent">
                            <div className="box tile is-child">
                                OMSCS
                            </div>
                            <div className="box tile is-child">
                                UPRM
                            </div>
                        </div>

                        {/*Experience*/}
                        <div className="tile is-vertical is-4 is-parent">
                            <div className="box tile is-child">
                                IntentMedia
                            </div>
                            <div className="box tile is-child">
                                Hackerati
                            </div>
                            <div className="box tile is-child">
                                Optivon
                            </div>
                        </div>

                        {/*Skills*/}
                        <div className="tile is-vertical is-4 is-parent">
                            <div className="box tile is-child">
                                Skills
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Sheet;
