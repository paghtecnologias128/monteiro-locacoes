import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          style={{
            padding: '20px',
            textAlign: 'center',
            color: 'red',
            border: '1px solid red',
            margin: '20px',
          }}
        >
          <h1>Algo deu errado.</h1>
          <p>Por favor, tente recarregar a página.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
