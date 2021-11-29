import { AiOutlineMenu } from 'react-icons/ai';
// import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="border-bottom py-2 bg-white mb-3 mb-md-5">
    <nav className="navbar navbar-expand-md bg-white py-md-3 px-md-5 align-items-center justify-content-center ">
      <div className="container">
        <span className="navbar-brand text-primary fw-bold fs-3 pe-md-3">Reader&apos;s Paradise</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <AiOutlineMenu style={{ fontSize: '25px' }} />
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav align-items-end line fw-light lh-1 position-relative nav-items-top">

            <li className="nav-item">
              <NavLink to="/" className="nav-link main-nav-links me-4 text-black-50">
                BOOKS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="categories" className="nav-link  main-nav-links text-black-50 " exact>
                CATEGORIES
              </NavLink>
            </li>

          </ul>
          {/* <div className="">
            <FaUserCircle className="text-primary center-block" style={{ fontSize: '2.5rem' }} />
          </div> */}
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
