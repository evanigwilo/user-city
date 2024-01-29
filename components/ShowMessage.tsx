const ShowMessage = ({ message, show }: { message: string; show: boolean }) => (
  <span
    className={`d-${
      show ? "flex" : "none"
    } css-opacity-transition opacity-75 mt-1`}
  >
    <i className="bi bi-exclamation-triangle-fill me-1"></i>
    {message}
  </span>
);

export default ShowMessage;
