
import * as React from 'react';

const SectionSpotlight = React.lazy(() => import('../../viewContentParts/SectionSpotlight'));
const ArticleBanner = React.lazy(() => import('../../viewContentParts/ArticleBanner'));
const SectionSomeLoremContent = React.lazy(() => import('../../viewContentParts/SectionSomeLoremContent'));
const TodoList = React.lazy(() => import('../../Todo/TodoList'));

// axios tutorial
// https://coursework.vschool.io/class-based-components-and-axios-in-react/
// 

class Home extends React.Component {

    public render() {

        return (
            <>
                <React.Suspense fallback={<div>Loading...</div>}>
                    
                    <ArticleBanner header="welcome text" paragraph="welcome Lorem ipsum dolor sit amet, consectetur adipiscing elit." cssStyle="gray" />
                    
                    <SectionSpotlight header="spotlight" paragraph="spotlight Lorem ipsum dolor sit amet, consectetur adipiscing elit." cssStyle="light" image="/assets/images/spotlight_planing.png" />
                   
                    <SectionSomeLoremContent />

                    <section className="light">
                        <div className="container">
                            <div className="row clearfix">
                                <TodoList />
                            </div>
                        </div>
                    </section>

                </React.Suspense>
            </>
        );
    }

}

export default Home;
