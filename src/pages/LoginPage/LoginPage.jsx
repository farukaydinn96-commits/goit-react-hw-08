import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={css.container}>
      <h2>Please log in</h2>
      <LoginForm />
    </div>
  );
}
