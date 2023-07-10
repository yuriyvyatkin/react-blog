import Alert from 'react-bootstrap/Alert';
import './CustomAlert.css';

export default function CustomAlert({ children }) {
  return (
    <div className="alert__wrapper d-flex justify-content-center">
      <Alert
        className="alert"
        key="warning"
        variant="warning"
      >
        <Alert.Heading className="alert__heading text-danger small text-wrap text-center">
          {children}
        </Alert.Heading>
      </Alert>
    </div>
  );
}
