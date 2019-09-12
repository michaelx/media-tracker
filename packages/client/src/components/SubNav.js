import React from 'react';
import { Menu } from 'semantic-ui-react';

const SubNav = ({ activeItem, onCategoryClick }) => {
  const handleOnClick = (e, { name }) => onCategoryClick(name);

  return (
    <React.Fragment>
      <Menu attached="top">
        <Menu.Item
          name="tv"
          active={activeItem === 'tv'}
          onClick={handleOnClick}
        >
          TV Shows
        </Menu.Item>
        <Menu.Item
          name="movie"
          active={activeItem === 'movie'}
          onClick={handleOnClick}
        >
          Movies
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

export default SubNav;
