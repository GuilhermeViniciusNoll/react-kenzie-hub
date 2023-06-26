import { z } from "zod"

export const modalSchema = z.object({
  status: z.string().min(1, "É nescessario preencher esse campo"),
})