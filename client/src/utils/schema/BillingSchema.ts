import { z } from "zod";

export const billingSchema = z.object({
  senderName: z.string().min(1, "Required"),
  senderPhone: z.string().min(1, "Required"),
  senderEmail: z.string().email("Invalid email").optional(),
  deliveryLocation: z.string().min(1, "Required"),
  receiverPhone1: z.string().min(1, "Required"),
  receiverPhone2: z.string().optional(),
  deliveryDate: z.date().optional(),
  timeSlot: z.enum(["Morning", "Afternoon", "Evening"]).optional(),
  message: z.string().min(1, "Required"),
  uploadPhoto: z.any().optional(),
  orderNotes: z.string().optional(),
});


export type BillingFormValues = z.infer<typeof billingSchema>;
