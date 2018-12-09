import * as React from "react";

export default class HomePage extends React.Component {
  public render() {
    return (
      <div className="container HomePage" >
        <div className="row">
          <div className="col-6">
            <div className="row align-middle">
              <div id="landing-page-header">
                <h1>Voluntarily matches schools with talented volunteers.</h1>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img
              src="../src/landing-page-hero.png"
              className="responsive-image"
              alt="askjdalsj"
            />
          </div>
        </div>
      </div>
    );
  }
}
