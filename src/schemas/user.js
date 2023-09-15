import z from "zod";

const userSchema = z.object({
  id: z.string({
    required_error: "user id is required",
  }),
  name: z.string(),
  email: z.string({
    required_error: "email id is required",
  }),
  image: z.string().url(),
});

export function validateUser(object) {
  return userSchema.safeParse(object);
}
