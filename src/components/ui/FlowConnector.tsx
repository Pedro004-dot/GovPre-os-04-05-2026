interface FlowConnectorProps {
  className?: string;
  direction?: 'horizontal' | 'vertical';
  animated?: boolean;
}

function FlowConnector({
  className = '',
  direction = 'horizontal',
  animated = true,
}: FlowConnectorProps) {
  if (direction === 'vertical') {
    return (
      <svg
        className={className}
        width="2"
        height="48"
        viewBox="0 0 2 48"
        fill="none"
        aria-hidden
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="40"
          stroke="#BBCADF"
          strokeWidth="2"
          strokeDasharray="6 4"
          className={animated ? 'animate-flow-dash' : ''}
        />
        <path d="M1 44 L-3 36 L5 36 Z" fill="#006AFF" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      width="48"
      height="12"
      viewBox="0 0 48 12"
      fill="none"
      aria-hidden
    >
      <line
        x1="0"
        y1="6"
        x2="40"
        y2="6"
        stroke="#BBCADF"
        strokeWidth="2"
        strokeDasharray="6 4"
        className={animated ? 'animate-flow-dash' : ''}
      />
      <path d="M44 6 L36 2 L36 10 Z" fill="#006AFF" />
    </svg>
  );
}

export default FlowConnector;
