// client/main.jsx
import { Meteor } from 'meteor/meteor';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from '/imports/ui/App';

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);
  root.render(<App />);
});
