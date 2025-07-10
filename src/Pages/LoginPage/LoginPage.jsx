import LoginForm from "../../Components/LoginForm/LoginForm.jsx";

const LoginPage = () => {
  return (
    <div>
      <section className="p-10">
        <h2>Login.</h2>
        <p>Login to access documents.</p>
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;
