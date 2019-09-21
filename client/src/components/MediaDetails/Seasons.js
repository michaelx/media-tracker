import React from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

const Seasons = (props) => {
  const {
    buttonOnClick,
    dropdownOnChange,
    dropdownOptions,
    seasonDoneStatus,
    selectedSeason,
  } = props;

  return (
    <Menu secondary>
      <Dropdown
        defaultValue={selectedSeason}
        onChange={dropdownOnChange}
        options={dropdownOptions}
        selection
      />
      <Menu.Menu position="right">
        <Button
          negative={seasonDoneStatus}
          onClick={buttonOnClick}
          primary={!seasonDoneStatus}
        >
          Mark season as {seasonDoneStatus ? 'unwatched' : 'watched' }
        </Button>
      </Menu.Menu>
    </Menu>
  );
};

export default Seasons;
