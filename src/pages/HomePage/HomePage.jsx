import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to the Phonebook App! 📞</h1>
      <p>Securely manage all your contacts in one place.</p>
    </div>
  );
}
