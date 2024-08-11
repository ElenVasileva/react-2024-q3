import React from 'react';
const LinkComponent = ({ children, className, href }: { children: React.ReactNode; className?: string | undefined; href: string }) => (
  <div>
    A mock with '{children}, {className}, {href}' passed!
  </div>
);
export default LinkComponent;
