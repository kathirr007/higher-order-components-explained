import React from "react";

const withData = (WrappedComponent) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      setTimeout(() => {
        fetch(this.props.dataSource)
          .then((response) => response.json())
          .then((data) => this.setState({ data: data.slice(0, 3) }));
      }, 1500);
    }

    render() {
      const { dataSource, ...otherProps } = this.props;

      return this.state.data.length < 1 ? (
        <h1>
          <i
            className="fas fa-compact-disc fa-spin"
            style={{ color: "darkgoldenrod" }}
          ></i>{" "}
          <i
            className="far fa-snowflake fa-spin"
            style={{ color: "darkgreen" }}
          ></i>{" "}
          <i
            className="fas fa-compact-disc fa-spin"
            style={{ color: "darkorchid" }}
          ></i>
        </h1>
      ) : (
        <WrappedComponent data={this.state.data} {...otherProps} />
      );
    }
  }

  return WithData;
};

export default withData;
