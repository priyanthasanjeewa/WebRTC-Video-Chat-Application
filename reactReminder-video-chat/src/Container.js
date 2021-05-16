import React from "react";
import ChatFrontEnd from "./WebSocketHandler";
import { ConnectionConsumer, ChannelConsumer} from "./App";

const Container = () => {
  return (
    <ConnectionConsumer>
      {({ connection, updateConnection }) => (
        <ChannelConsumer>
          {({ channel, updateChannel }) => (
            <ChatFrontEnd
              connection={connection}
              updateConnection={updateConnection}
              channel={channel}
              updateChannel={updateChannel}
            />
          )}
        </ChannelConsumer>
      )}
    </ConnectionConsumer>
  );
};

export default Container