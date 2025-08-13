import z from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'Username inválido').toLowerCase(),
  fullName: z
    .string()
    .min(5, 'Nome muito curto')
    .max(50, 'Nome muito longo')
    .transform(value => {
      return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }),
  email: z
    .string()
    .min(1, {message: 'Informe seu e-mail'})
    .email({message: 'E-mail inválido'}),
  password: z
    .string()
    .min(6, {message: 'A senha deve ter pelo menos 6 caracteres'}),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
