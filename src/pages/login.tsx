import {
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  chakra,
  useToast,
} from "@chakra-ui/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { FormEvent, useRef, useState } from "react";

export default function Login() {
  const supabase = useSupabaseClient();
  const toast = useToast();
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleToggleShowPassword() {
    setShowPassword((showPassword) => !showPassword);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!email || !password) {
      toast({
        title: "¡Error!",
        description: "Ingrese primero su usuario y contraseña",
        status: "error",
      });
      setIsLoading(false);
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      toast({
        title: "¡Error!",
        description: "Usuario y/o contraseña incorrectos",
        status: "error",
      });
      setIsLoading(false);
      return;
    }
    const { redirectedFrom } = router.query;
    const goTo = redirectedFrom ?? "/";
    router.replace(goTo as string);
  }

  return (
    <chakra.main
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <Heading>Club 12</Heading>
      <chakra.form
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
        onSubmit={handleSubmit}
      >
        <Input ref={emailRef} placeholder="club@12.com.ar" type="email" />
        <InputGroup>
          <Input
            ref={passwordRef}
            placeholder="qwe123"
            type={showPassword ? "text" : "password"}
          />
          <InputRightElement>
            <IconButton
              aria-label="show/hide password"
              icon={showPassword ? <IconEyeOff /> : <IconEye />}
              size="sm"
              onClick={handleToggleShowPassword}
            />
          </InputRightElement>
        </InputGroup>
        <Button type="submit" disabled={isLoading}>
          Login
        </Button>
      </chakra.form>
    </chakra.main>
  );
}
