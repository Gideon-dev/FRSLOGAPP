import {z} from "zod";

export const formSchema = z.object({
    name: z.string().min(2, {
      message: 'Name must be at least 2 characters.',
    }),
    section: z.string().min(2, {
      message: 'Section must be at least 2 characters.',
    }),
    unit: z.coerce.number().min(0),
    email: z.email({ error: 'Please enter a valid email address.' }),
    phone: z.string().min(7, { message: 'Phone number must be at least 7 digits.' }),
})

export type FormValues = z.infer<typeof formSchema>

