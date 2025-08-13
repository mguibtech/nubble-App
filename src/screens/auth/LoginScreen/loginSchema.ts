import z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .email({message: 'E-mail inválido'})
    .min(1, {message: 'E-mail é obrigatório'}),
  password: z
    .string()
    .min(6, {message: 'A senha deve ter pelo menos 6 caracteres'}),
});

export type LoginSchema = z.infer<typeof loginSchema>;
