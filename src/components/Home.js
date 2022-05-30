import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <>
        <div style={styles["home-banner"]}>
          <img src={require('../assets/home-banner.jpg')} alt="" width="100%"/>
        </div>
        <div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-5 p-3 p-lg-5 pt-lg-3">
                    <h1 class="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
                    <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img class="rounded-lg-3" src="https://cospace.pk/wp-content/uploads/2022/03/Why-Join.png" alt="" width="720" />
                </div>
            </div>
        </div>

        <div className="container px-4 py-5">
            <h2 className="pb-2 border-bottom">Columns with icons</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                    {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg> */}
                    </div>
                    <h2>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <Link to="/" className="icon-link">
                    Call to action
                    {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg> */}
                    </Link>
                </div>
                <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                    {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg> */}
                    </div>
                    <h2>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a link="/" className="icon-link">
                    Call to action
                    {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg> */}
                    </a>
                </div>
                <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                    {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> */}
                    </div>
                    <h2>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a link="/" className="icon-link">
                    Call to action
                    {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg> */}
                    </a>
                </div>
            </div>
        </div>

        <div class="container">

</div>
    </>
);

const styles = {
  'home-banner':{
    'margin-top': '-25rem',
    height: '65rem'
  }
}

export default Home;
