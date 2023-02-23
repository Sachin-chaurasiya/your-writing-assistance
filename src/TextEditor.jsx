import React from 'react';
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';

export const TextEditor = () => {
  return (
    <React.Fragment>
      <GrammarlyEditorPlugin
        clientId={process.env.REACT_APP_GRAMMARLY_SDK_CLIENT_ID}
      >
        <textarea
          placeholder="Write your thoughts..."
          style={{
            width: '800px',
            height: '300px',
            border: '1px solid gray',
            padding: '10px',
            fontSize: '16px',
            fontFamily: 'Arial',
          }}
        />
      </GrammarlyEditorPlugin>
    </React.Fragment>
  );
};
