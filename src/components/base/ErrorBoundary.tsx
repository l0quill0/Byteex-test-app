import React, { Component, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Unhandled application error:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full min-h-[400px] flex flex-col items-center justify-center p-8 bg-[#F9F0E5]/30 text-center">
          <div className="max-w-md p-6 bg-white rounded-lg shadow-sm border border-[#EAEAEA]">
            <h2 className="font-sofia text-[22px] font-semibold text-[#01005B] mb-2">
              Something went wrong
            </h2>
            <p className="font-suisse text-[14px] text-[#676869] mb-5">
              An unexpected error occurred while loading this section.
            </p>
            <button
              onClick={this.handleReload}
              className="px-6 py-2.5 bg-[#01005B] text-white rounded text-[14px] font-medium hover:bg-[#15005B] transition-colors cursor-pointer"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
