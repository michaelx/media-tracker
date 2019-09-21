import React from 'react';
import { NavLink } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

const Nav = ({ onNavClick }) => {
  const handleOnClick = (e, { name }) => onNavClick(name);

  return (
    <Menu secondary>
      <Menu.Item
        as={NavLink}
        exact
        name="To Do"
        onClick={handleOnClick}
        to="/"
      />
      <Menu.Item
        as={NavLink}
        name="Done"
        onClick={handleOnClick}
        to="/done"
      />
      <Menu.Item
        as={NavLink}
        name="Discover"
        onClick={handleOnClick}
        to="/discover"
      />
    </Menu>
  );
};

export default Nav;
