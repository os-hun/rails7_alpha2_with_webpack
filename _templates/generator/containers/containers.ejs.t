---
to: app/ts/src/containers/<%= directory %>/<%= container_name %>.tsx
---

import React from 'react';

export const <%= container_name %> = ({ children }) => {
  return <div>{children}</div>;
};
