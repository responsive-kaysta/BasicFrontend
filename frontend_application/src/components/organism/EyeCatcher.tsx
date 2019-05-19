
import * as React from 'react';
import IStoreState from '../../application/interfaces/core/IStoreState';
import IEyeCatcher from '../../application/interfaces/organism/IEyeCatcher';

class EyeCatcher extends React.Component<IEyeCatcher, IStoreState> {

    public render() {

        const style = "special " + this.props.cssStyle;
        const header = this.props.header;
        const paragraph = this.props.paragraph;
        const elementId = this.props.elId;

        return (
            <>
                <section className={style} id={elementId}>
                    <header className="major">
                        <h2>{header}</h2>
                        <p>{paragraph}</p>
                    </header>
                </section>
            </>
        );
    }

}

export default EyeCatcher;
