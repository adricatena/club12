import toast from "@/components/toast";
import { useSupabase } from "@/lib/supabase/clients";
import { Button, PasswordInput, TextInput, Title } from "@mantine/core";
import { useRouter } from "next/router";
import { FormEvent, useRef, useState } from "react";

export default function Login() {
  const supabase = useSupabase();
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
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <Title order={1}>Club 12</Title>
      <form
        className="flex w-full max-w-xs flex-col items-center justify-center gap-5 p-3"
        onSubmit={handleSubmit}
      >
        <TextInput
          type="email"
          label="Ingrese su email"
          placeholder="club@12.com.ar"
          className="w-full"
          ref={emailRef}
        />
        <PasswordInput
          label="Ingrese su contraseña"
          placeholder="password123"
          className="w-full"
          ref={passwordRef}
        />
        <Button type="submit" disabled={isLoading}>
          Iniciar sesion
        </Button>
      </form>
    </main>
  );
}
