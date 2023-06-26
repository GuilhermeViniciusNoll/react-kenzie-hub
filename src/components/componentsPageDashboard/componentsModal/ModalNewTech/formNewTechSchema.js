import { z } from "zod"

export const modalSchema = z.object({
  title: z.string()
    .min(1, "O titulo é obrigatório"),
  status: z.string().min(1, "É nescessario preencher esse campo"),
})