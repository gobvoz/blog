declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.woff2';
declare module '*.woff';

declare module '.svg' {
  import React = require('react');
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
