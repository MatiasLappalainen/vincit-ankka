import * as React from 'react';

const AsyncRouteComponent = (loader: any) => {
  class AsyncRouteComponent extends React.Component <{}, {Component: any}> {
    constructor(props: {}) {
      super(props);

      this.state = {
        Component: null
      };
    }

    async componentDidMount() {
        const { default: Component } = await loader();

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
