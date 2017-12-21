import * as React from "react";

interface AsyncRouteComponentState {
  Component: any;
}

const AsyncRouteComponent = (loader: () => any) => {
  class AsyncRouteComponent extends React.Component <{}, AsyncRouteComponentState>{
    constructor(props: any) {
      super(props);

      this.state = {
        Component: null
      };
    }

    async componentDidMount() {
        const { default: Component }  = await loader();

        this.setState({ Component: Component });
    }

    render() {
      const { Component } = this.state;
      const { ...props } = this.props;
      return Component ? <Component {...props} /> : <div>Loading...</div>;
    }
  }
  return AsyncRouteComponent;
};
export default AsyncRouteComponent;
