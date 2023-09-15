import z from "zod";

const planSchema = z.object({
  id: z.string({
    required_error: "user id is required",
  }),
  name: z.string(),
  email: z.string({
    required_error: "email id is required",
  }),
  image: z.string().url(),
});

export function validatePlan(object) {
  return planSchema.safeParse(object);
}
