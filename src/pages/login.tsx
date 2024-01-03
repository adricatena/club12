import toast from "@/components/toast";
import { browserClient } from "@/database/clients";
import { Button, Image, PasswordInput, TextInput, Title } from "@mantine/core";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useRef, useState } from "react";
import logoClub12 from "../../public/logo-club12.webp";

export default function Login() {
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
    try {
      await browserClient.auth.signInWithPassword({
        email,
        password,
      });
      router.push("/");
    } catch (error) {
      toast.error("¡Error!", "Usuario y/o contraseña incorrectos");
      setIsLoading(false);
    }
  }

  return (
    <main className="col-span-2 row-span-2 flex h-screen flex-col items-center justify-center gap-4">
      <Image
        component={NextImage}
        radius="md"
        h={170}
        w="auto"
        fit="contain"
        src={logoClub12}
        alt="logo club 12"
      />
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
