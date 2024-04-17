import React from "react";
import { Button, ButtonGroup } from "flowbite-react";

function Homepage() {
  return (
    <ButtonGroup>
      <Button color="gray">Profile</Button>
      <Button color="gray">Settings</Button>
      <Button color="gray">Messages</Button>
    </ButtonGroup>
  );
}

export default Homepage;
