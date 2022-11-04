import React, { useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

function Voice() {
  // Adding the Alan button
  useEffect(() => {
      alanBtn({
          key: 'b09122a08116306e82cd62dc7d9af85e2e956eca572e1d8b807a3e2338fdd0dc/stage',
          onCommand: (commandData) => {
              if (commandData.command === 'go:back') {
                  // Call the client code that will react to the received command
              }
          }
      });
  }, []);
}

export default Voice
