import * as React from "react";

export interface HelloProps { compiler: string; framework: string}

// 这个例子使用了无状态的功能组件
// export const Hello = (props: HelloProps) => <h1>hello form {props.compiler} and {props.framework} ! </h1>

export class Hello extends React.Component<HelloProps> {
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
  }
}