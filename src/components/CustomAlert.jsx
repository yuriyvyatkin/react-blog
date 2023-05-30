import Alert from 'react-bootstrap/Alert';

export default function CustomAlert({ children }) {
  return (
    <Alert key="warning" variant="warning">
      <Alert.Heading
        style={{ overflowWrap: 'break-word' }}
        className="text-danger small text-wrap"
      >
        {children}
      </Alert.Heading>
    </Alert>
  );
}
