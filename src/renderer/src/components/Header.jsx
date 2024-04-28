import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-heading">
          <h1 className="heading--primary">
            Entity Tracker
          </h1>
        </div>
        <nav className="header-navigation">
          <Link className="header-navigation__link" to="/">Home</Link>
          <Link className="header-navigation__link" to="/add-new">Add new</Link>
        </nav>
      </header>
    </>
  )
}