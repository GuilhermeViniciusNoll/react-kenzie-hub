import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string()
    .min(1, "O e-mail é obrigatório")
    .email("O e-mail deve estar no formato correto"),
  password: z.string()
    .min(8, { message: "A senha é obrigatória e precisa de mínimo 8 caracteres" })
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .regex(/(?=.*[$*&@#])/, "É necessário pelo menos um caracter especial"),
  confirm: z.string().min(1, "A confirmação de senha é obrigatória"),
  bio: z.string().min(1, "É nescessario preencher esse campo"),
  contact: z.string().min(1, "É nescessario preencher esse campo"),
}).refine(({ password, confirm }) => password === confirm, {
  message: "As senhas precisam corresponderem",
  path: ["confirm"],
})