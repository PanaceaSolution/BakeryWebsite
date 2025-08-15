"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FiCalendar } from "react-icons/fi";
import { useState } from "react";
import { format } from "date-fns";
import {
  BillingFormValues,
  billingSchema,
} from "@/utils/schema/BillingSchema";

export function BillingForm() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const form = useForm<BillingFormValues>({
    resolver: zodResolver(billingSchema),
    defaultValues: {
      senderName: "",
      senderPhone: "",
      senderEmail: "",
      deliveryLocation: "",
      receiverPhone1: "",
      receiverPhone2: "",
      deliveryDate: undefined,
      timeSlot: undefined,
      message: "",
      orderNotes: "",
    },
  });

  const onSubmit = (values: BillingFormValues) => {
    console.log("Form submitted:", values);
  };

  return (
    <div
      className={`
        p-6 sm:p-8 md:p-10 rounded-[10px] shadow-md opacity-100
       w-full max-w-[973px] h-full h-max-[1354px]
        xl:static xl:w-full xl:max-w-4xl xl:h-auto md:relative md:mx-auto md:top-10
        sm:static sm:w-full sm:h-auto sm:mx-auto
      `}
    >
      <h2 className="text-2xl font-semibold font-poppins">Billing Details</h2>
      <hr className="my-4 border-gray-300" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 font-poppins"
        >
          {/* Basic Fields */}
          {[
            {
              name: "senderName",
              label: "Sender’s Full Name",
              required: true,
              type: "text",
            },
            {
              name: "senderPhone",
              label: "Sender’s Phone Number",
              required: true,
              type: "tel",
            },
            {
              name: "senderEmail",
              label: "Sender’s Email",
              required: false,
              type: "email",
            },
            {
              name: "deliveryLocation",
              label: "Delivery Location",
              required: true,
              type: "text",
            },
            {
              name: "receiverPhone1",
              label: "Receiver Contact Number (1st)",
              required: true,
              type: "tel",
            },
            {
              name: "receiverPhone2",
              label: "Receiver Contact Number (2nd) (Optional)",
              required: false,
              type: "tel",
            },
          ].map(({ name, label, required, type }) => (
            <FormField
              key={name}
              control={form.control}
              name={name as any}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {label}{" "}
                    {required && <span className="text-red-500">*</span>}
                  </FormLabel>
                  <FormControl>
                    <Input type={type} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {/* Delivery Date */}
          <FormField
            control={form.control}
            name="deliveryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Delivery Date <span className="text-red-500">*</span>
                </FormLabel>
                <div className="relative">
                  <Input
                    readOnly
                    value={field.value ? format(field.value, "PPP") : ""}
                    placeholder="Select Date"
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="pr-10 cursor-pointer"
                  />
                  <FiCalendar
                    size={20}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => setShowCalendar(!showCalendar)}
                  />
                  {showCalendar && (
                    <div className="absolute z-10 mt-2">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          setShowCalendar(false);
                        }}
                        className="rounded-md border bg-white"
                      />
                    </div>
                  )}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Time Slot */}
          <FormField
            control={form.control}
            name="timeSlot"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time Slot (Optional)</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value ?? ""}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Time Slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Morning">
                        Morning (9 AM – 12 PM)
                      </SelectItem>
                      <SelectItem value="Afternoon">
                        Afternoon (12 PM – 3 PM)
                      </SelectItem>
                      <SelectItem value="Evening">
                        Evening (3 PM – 6 PM)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Message <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g. Happy Birthday my Love!"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Upload Photo */}
          <FormField
            control={form.control}
            name="uploadPhoto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Photo (Optional)</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-4">
                    <input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(file);
                        setFileName(file?.name ?? "");
                      }}
                      className="block w-auto text-sm text-gray-500
                                 file:mr-4 file:py-2 file:px-4
                                 file:rounded file:border-0
                                 file:text-sm file:font-semibold
                                 file:bg-blue-50 file:text-black
                                 hover:file:bg-blue-100"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Order Notes */}
          <FormField
            control={form.control}
            name="orderNotes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Order Notes (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Special notes for delivery..."
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-4">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
