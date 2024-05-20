import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }: { message: string }) => {
  return <div className={css.errorMessage}>{message}</div>;
};

export default ErrorMessage;
