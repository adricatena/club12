import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import toast from "@/components/toast";
import style from "./login.module.css";
import { Button, PasswordInput, TextInput, Title } from "@mantine/core";

export default function Login() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!email || !password) {
      toast.error("¡Error!", "Ingrese primero su usuario y contraseña");
      setIsLoading(false);
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      toast.error("¡Error!", "Usuario y/o contraseña incorrectos");
      setIsLoading(false);
      return;
    }
    const { redirectedFrom } = router.query;
    const goTo = redirectedFrom ?? "/";
    router.replace(goTo as string);
  }

  return (
    <main className={style.main}>
      <Title order={1}>Club 12</Title>
      <form className={style.form} onSubmit={handleSubmit}>
        <TextInput
          type="email"
          label="Ingrese su email"
          placeholder="club@12.com.ar"
          className={style.input}
          ref={emailRef}
        />
        <PasswordInput
          label="Ingrese su contraseña"
          placeholder="password123"
          className={style.input}
          ref={passwordRef}
        />
        <Button type="submit" disabled={isLoading}>
          Iniciar sesion
        </Button>
      </form>
    </main>
  );
}
