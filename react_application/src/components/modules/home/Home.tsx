
import * as React from 'react';

class Home extends React.Component {
    public render() {
        return (
            <div>
                <header className="light">
                    <h2>HOME</h2>
                    <p>Startseite, some home welcome ...</p>
                </header>
                <section className="light">
                    <div className="grid-section">
                        <div className="container">
                            <div className="pahe-header">
                                <h2>some page-header welcome</h2>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;