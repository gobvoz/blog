declare module '*.scss' {
  interface ClassNames {
    [className: string]: string;
  }

  const classNames: ClassNames;

  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare module '.svg' {
  import React = require('react');
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
