
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IEyeCatcher from 'src/application/interfaces/organism/IEyeCatcher';

class EyeCatcher extends React.Component<IEyeCatcher, IStoreState> {

    constructor(props: IEyeCatcher, state: IStoreState) {
        super(props, state);
    }

    public render() {

        const style = "special " + this.props.cssStyle;
        const header = this.props.header;
        const paragraph = this.props.paragraph;

        return (
            <>
                <section className={style}>
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
