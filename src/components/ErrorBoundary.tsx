import React, { ErrorInfo, ReactNode } from "react";

class ErrorBoundary extends React.Component<{ children: ReactNode, hasError: boolean }> {
  constructor(props: { children: React.ReactNode, hasError: boolean }) {
    super(props);
  }

  state = { hasError: false };

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error);
    console.log(errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong.</h3>;
    }

    return <>{this.props.children}
    </>;
  }
}

export default ErrorBoundary