//import React from 'react'
import React, { useState, createContext } from "react";
// eslint-disable-next-line
import Container from "./Container";
import './App.css'
import VideoCallContent from './VideoBackEndHandler'
// import ChatContent from './VideoBackEndHandler'

const ConnectionContext = createContext({
  connection: null,
  updateConnection: () => {}
});
const ChannelContext = createContext({
  channel: null,
  updateChannel: () => {}
});

const App = () => {
  const [connection, setconnection] = useState(null);
  const [channel, setChannel] = useState(null);
  const updateConnection = conn => {
    setconnection(conn);
  };
  const updateChannel = chn => {
    setChannel(chn);
  };
  return (
    <ConnectionContext.Provider value={{ connection, updateConnection }}>
      <ChannelContext.Provider value={{ channel, updateChannel }}>
        <Container />
        <VideoCallContent/>
      </ChannelContext.Provider>
    </ConnectionContext.Provider>    
  );
};



// function App () {
//   return (
//     <div className='app'>
//       <h1>WebRTC video application</h1>
//       <VideoCallContent/>
//     </div>
//   )
// }

export const ConnectionConsumer = ConnectionContext.Consumer
export const ChannelConsumer = ChannelContext.Consumer
export default App
