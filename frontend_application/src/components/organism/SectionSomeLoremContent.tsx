
import * as React from 'react';
import { Link } from 'react-scroll';
import IStoreState from '../../application/interfaces/core/IStoreState';
import ISectionSpotlight from '../../application/interfaces/organism/ISectionSpotlight';

class SectionSomeLoremContent extends React.Component<ISectionSpotlight, IStoreState> {

    constructor(props: ISectionSpotlight, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: "", storeContainer: [] };
    }

    public render() {

        const style = "container " + this.props.cssStyle;
        const header = this.props.header;

        return (
            <>
                <section className={style}>
                    <div className="page-header">
                        <h2>{header}</h2>
                    </div>
                    <p className="lead">
                        Pellentesque placerat commodo libero, ut tincidunt lacus volutpat vel. Phasellus nec porta sem. Donec a nisi tincidunt, ornare ligula in, pharetra purus. Nulla cursus mauris id dolor luctus eleifend. Etiam non justo eleifend, sagittis ligula non, faucibus tellus. Fusce sagittis imperdiet magna a ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat.
                                    </p>
                    <p className="paragraph">
                        Duis eget lorem faucibus, ultrices enim eget, imperdiet lorem. Nam a rutrum odio. Donec commodo eros vel congue dapibus. Quisque pharetra justo leo, nec convallis leo suscipit vel. Fusce auctor sapien at nunc fringilla lacinia. Suspendisse id erat vel lorem mattis malesuada. Sed quam eros, ultrices id vestibulum rhoncus, tempor laoreet est. Phasellus orci nibh, consectetur in ante sit amet, maximus euismod sem.
                                    </p>
                    <p className="paragraph">
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc commodo laoreet turpis a ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed scelerisque nisi consequat nunc porttitor sagittis. Proin tempor venenatis quam non vehicula. Praesent interdum pulvinar dapibus. Nunc malesuada augue fermentum nunc auctor dapibus.
                                    </p>
                    <Link className="totop" to='banner' spy={true} smooth={true} duration={1000}>
                        to top
                        </Link>
                </section>
            </>
        );
    }

}

export default SectionSomeLoremContent;
