"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class PrivacyErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  private handleRetry = () => {
    this.setState({ hasError: false });
  };

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-4 bg-red-50 text-red-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Privacy Settings Unavailable
            </h3>
            <p className="text-sm mb-4">
              We are having trouble loading privacy settings. Your privacy is
              still protected, but some features might be limited.
            </p>
            <button
              onClick={this.handleRetry}
              className="text-sm text-red-600 hover:text-red-800 underline"
            >
              Try Again
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
