
import * as React from 'react';

class SectionSpotlight extends React.Component {

    public render() {
        return (
            <>
                <section className="spotlight equal">
                    <div className="image">
                        <img className="wide" src="/assets/images/spotlight_planing.png" alt="Brains and engineering" />
                    </div>
                    <div className="content">
                        <h2>SectionSpotlight</h2>
                        <p>Bereits seit 2002 bieten wir innovative Leistungen rund um Informatik an.</p>
                    </div>
                </section>
            </>

        );
    }
}

export default SectionSpotlight;