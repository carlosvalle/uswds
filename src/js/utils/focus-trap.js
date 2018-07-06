'use strict';

import { behavior, keymap } from 'receptor';

const focusTrap = (selectors, context = window) => {
  if (typeof selectors !== 'string') {
    throw new Error('Valid CSS selector string must be provided as the first argument.');
  }

  return behavior({
    'keydown': {
      [context]: () => {

      },
    },
  });
};

module.exports = focusTrap;
