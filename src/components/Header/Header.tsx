import * as React from "react";

export default class Header extends React.Component {
  public render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
          <a className="navbar-brand" href="#">
            Voluntarily Corporate
          </a>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a className="nav-link mr-sm-3" href="#">
                Volunteer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-sm-3" href="#">
                Inbox
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-sm-3" href="#">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-sm-3" href="#">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
