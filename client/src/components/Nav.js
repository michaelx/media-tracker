import React from 'react';
import { NavLink } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

const Nav = ({ onNavClick }) => {
  const handleOnClick = (e, { name }) => onNavClick(name);

  return (
    <Menu secondary>
      <Menu.Item
        as={NavLink}
        to="/"
        exact
        name="To Do"
        onClick={handleOnClick}
      />
      <Menu.Item
        as={NavLink}
        to="/Done"
        name="Done"
        onClick={handleOnClick}
      />
      <Menu.Item
        as={NavLink}
        to="/discover"
        name="Discover"
        onClick={handleOnClick}
      />
    </Menu>
  );
};

export default Nav;
