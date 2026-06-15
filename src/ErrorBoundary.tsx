import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Erro na landing page:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', color: '#001F3E' }}>
          <h1 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
            Erro ao carregar a página
          </h1>
          <p style={{ marginBottom: '1rem', color: '#555' }}>
            Recarregue a página. Se o problema persistir, abra em Chrome ou Safari.
          </p>
          <pre
            style={{
              background: '#f5f5f5',
              padding: '1rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.875rem',
            }}
          >
            {this.state.error.message}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
