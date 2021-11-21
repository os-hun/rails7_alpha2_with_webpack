---
to: app/ts/src/components/<%= directory %>/<%= component_name %>.tsx
---

import React from 'react';

export const <%= component_name %> = ({ children }) => {
  return <div>{children}</div>;
};
