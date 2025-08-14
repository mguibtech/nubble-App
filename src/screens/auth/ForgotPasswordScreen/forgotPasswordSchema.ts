import z from 'zod';

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email({message: 'E-mail inválido'})
    .min(1, {message: 'E-mail é obrigatório'}),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
