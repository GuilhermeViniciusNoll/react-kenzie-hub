import { z } from "zod"

export const LoginSchema = z.object({
  email: z.string()
    .min(1, "O e-mail é obrigatório")
    .email("O e-mail é obrigatório"),
  password: z.string()
    .min(1, "A senha é obrigatória e precisa de no mínimo 8 caracteres")
})