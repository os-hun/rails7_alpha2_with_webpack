---
to: app/ts/src/containers/<%= directory %>/<%= component_name %>.tsx
---

import React from 'react';

export const <%= component_name %> = ({ children }) => {
  return <div>{children}</div>;
};
