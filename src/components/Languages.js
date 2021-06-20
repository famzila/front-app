import React from 'react';

className Languages extends React.Component {
  render() {
    return (
      <>
        <div className="" ngbDropdown>
          <a
            className="btn btn-default dropdown-toggle "
            id="navbarDropdownMenuLink2"
            ngbDropdownToggle
          >
            <img src="assets/img/icons/flags/US.png" /> Flags
          </a>
          <ul
            className=""
            aria-labelledby="navbarDropdownMenuLink2"
            ngbDropdownMenu
          >
            <li>
              <a className="dropdown-item" href="javascript:void(0)">
                <img src="assets/img/icons/flags/DE.png" /> Deutsch
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="javascript:void(0)">
                <img src="assets/img/icons/flags/GB.png" /> English(UK)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="javascript:void(0)">
                <img src="assets/img/icons/flags/FR.png" /> Français
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Languages;
