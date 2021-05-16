import React from "react";
import ChatFrontEnd from "./WSSignalHandler";
import { ConnectionConsumer, ChannelConsumer} from "./App";

const ChatFrontEndContainer = () => {
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

export default ChatFrontEndContainer