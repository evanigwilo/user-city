//  React-Bootstrap modules
import Form from "react-bootstrap/Form";
//  Components
import ShowMessage from "components/ShowMessage";
// Constants, Helpers & Types
import { FormGroupProps } from "utils/types";

const FormGroup = ({
  label,
  message,
  showMessage,
  updateValue,
  value,
  type,
  top,
}: FormGroupProps) => {
  const controlId = `form${label.replace(/\s+/g, "")}`;
  return (
    <Form.Group controlId={controlId}>
      <Form.Label className={`mt-${top || 4}`}>{label}</Form.Label>
      <Form.Control
        type={type || "text"}
        value={value}
        onChange={({ target }) => updateValue(target.value)}
      />
      <ShowMessage message={message} show={showMessage} />
    </Form.Group>
  );
};

export default FormGroup;
