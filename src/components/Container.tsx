import {ReactNode} from 'react';

export interface IContainerProps {
  children?: ReactNode;
  wrapperClass?:string;
}

export function Container (props:IContainerProps) {
  return (
    <div className={`w-10/12 mx-auto ${props.wrapperClass}`}>
      <div>{props.children}</div>
    </div>
  );
}
