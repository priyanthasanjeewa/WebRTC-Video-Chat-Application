import React from "react";
import {
  Icon,
  Input,
  Grid,
  Card,
  Sticky,
  Button
} from "semantic-ui-react";

const VideoCall = ({ messages, connectedTo, message, setMessage, startCall, name }) => {
  return (
    <Grid.Column width={11}>
      <Sticky>
        <Card fluid>
          <Card.Content>
            <Input >
              <Button color="teal" disabled={!message} onClick={startCall}>
                <Icon name="send" />
                Call
              </Button>
            </Input>
          </Card.Content>
        </Card>
      </Sticky>
    </Grid.Column>
  );
};

export default VideoCall;
