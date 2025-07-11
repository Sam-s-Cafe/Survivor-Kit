import React, { Component, ErrorInfo, ReactNode } from "react";
import { XCircleIcon } from './icons/Icons';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-900 text-gray-200">
            <XCircleIcon className="h-20 w-20 text-red-500 mb-4"/>
            <h1 className="text-3xl font-bold text-red-400">System Malfunction</h1>
            <p className="text-gray-300 mt-2 max-w-lg">A critical component failed to load, which can sometimes happen with intermittent network connections. Please try refreshing the application.</p>
            
            <div className="mt-6 bg-gray-800 p-4 rounded-lg text-left text-xs text-red-300 w-full max-w-lg">
                <p className="font-mono break-words">
                    <strong>Error:</strong> {this.state.error?.message || 'An unknown error occurred.'}
                </p>
            </div>

            <button
                onClick={() => window.location.reload()}
                className="mt-6 bg-amber-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-500 transition-colors"
            >
                Refresh Page
            </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
