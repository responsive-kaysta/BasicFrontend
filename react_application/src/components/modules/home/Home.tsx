
import * as React from 'react';

class Home extends React.Component {
    public render() {
        return (
            <div>
                <header className="light">
                    <h2>HOME</h2>
                    <p>Für uns ist die Kreativität des Ungeplanten von zentraler Bedeutung</p>
                </header>
                <section className="light">
                    <div className="grid-section">
                        <div className="container">

                            <div className="row clearfix">
                                <div className="col-md-12 column">
                                    <hr />
                                    <p>Autor: @Umbraco.Field("creatorName")</p>
                                    <p>Published/Updated: @Umbraco.Field("updateDate")</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;