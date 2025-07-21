import {z} from "zod";

export const formSchema = z.object({
    first_name: z.string().min(2, {
      message: 'Name must be at least 2 characters.',
    }),
    surname: z.string().min(2, {
      message: 'surname must be at least 2 characters.',
    }),
    other_names: z.string().min(2, {
      message: 'Name must be at least 2 characters.',
    }),
    next_of_kin_name: z.string().min(2, {
      message: 'Name must be at least 2 characters.',
    }),
    post: z.string().min(2, {
      message: 'cant find post',
    }),
    command: z.string().min(2, {
      message: 'Section must be at least 2 characters.',
    }),
    unit:z.coerce.number({
        message: "select a unit"
      }),
    email: z.email({ error: 'Please enter a valid email address.' }),
    phone: z.string().min(7, { message: 'Phone number must be at least 7 digits.' }),
    next_of_kin_phone: z.string().min(7, { message: 'Phone number must be at least 7 digits.' }),
})

export type FormValues = z.infer<typeof formSchema>

