import { IAuthInput } from "./auth.interface";
import styles from "./auth.module.scss";
import { useAuthRedirect } from "./useAuthRedirect";
import Heading from "@/components/ui/heading/Heading";
import { useAuth } from "@/hooks/useAuth";
import Meta from "@/utils/meta/Meta";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/ui/form-elements/Button";
import AuthFields from "./AuthFields";

const Auth: FC = () => {
  useAuthRedirect();
  const { isLoading } = useAuth();
  const [type, setType] = useState<"login" | "register">("login");
  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
  } = useForm<IAuthInput>({
    mode: "onChange",
  });

  const login = (data: any) => { console.log(data, 'login')};
  const register = (data: any) => {console.log(data, 'register')};

  const onSubmit: SubmitHandler<IAuthInput> = (data) => {
    if (type === "login") login(data);
    else if (type === "register") register(data);

    reset();
  };
  return (
    <Meta title="auth">
      <section className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading title="Auth" className="mb-6" />

          <AuthFields formState={formState} register={registerInput} isPasswordRequired />

          <div className={styles.buttons}>
            <Button type="submit" onClick={() => setType('login')} disabled={isLoading}>Login</Button>
            <Button type="submit" onClick={() => setType('register')} disabled={isLoading}>Register</Button>
          </div>
        </form>
      </section>
    </Meta>
  );
};

export default Auth;
