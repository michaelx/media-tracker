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
        onChange={dropdownOnChange}
        options={dropdownOptions}
        selection
        defaultValue={selectedSeason}
      />
      <Menu.Menu position="right">
        <Button
          primary={!seasonDoneStatus}
          negative={seasonDoneStatus}
          onClick={buttonOnClick}
        >
          Mark season as {seasonDoneStatus ? 'unwatched' : 'watched' }
        </Button>
      </Menu.Menu>
    </Menu>
  );
};

export default Seasons;
