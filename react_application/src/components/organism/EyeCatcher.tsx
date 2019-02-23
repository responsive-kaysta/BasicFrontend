
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IEyeCatcher from 'src/application/interfaces/organism/IEyeCatcher';

class EyeCatcher extends React.Component<IEyeCatcher, IStoreState> {

    constructor(props: IEyeCatcher, state: IStoreState) {
        super(props, state);
    }

    public render() {
        
        const style = this.props.cssStyle + " special";
        const header = this.props.header;
        const paragraph = this.props.paragraph;
        
        return (
            <div>
                <section id="one" className={style}>
                    <div className="inner">
                        <header className="major">
                            <h2>{header}</h2>
                            <p>{paragraph}</p>
                        </header>
                    </div>
                </section>
            </div>
        );
    }

}

export default EyeCatcher;
