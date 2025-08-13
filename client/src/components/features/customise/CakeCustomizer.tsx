// this is yet to be done and  divided into different sections for validation and other portions
'use client'
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// --- Form schema ---
const CakeSchema = z.object({
  flavour: z.enum(["Strawberry", "Chocolate", "Lemon", "Vanilla"]),
  shape: z.enum(["Square", "Round", "Heart", "Rectangle", "MultiShape", "PhotoCraft"]),
  size: z.string().min(1),
  layers: z.number().int().min(0).max(10),
  message: z.string().max(40).optional(),
  photo: z
    .any()
    .nullable()
    .refine((f) => f === null || (f instanceof File && f.size > 0), {
      message: "Invalid file",
    }),
});

type CakeFormValues = z.infer<typeof CakeSchema>;

const defaultValues: CakeFormValues = {
  flavour: "Strawberry",
  shape: "Round",
  size: "2 Pound",
  layers: 3,
  message: "Happiest Birthday, my love ❤️",
  photo: null,
};

export default function CakeCustomizer() {
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CakeFormValues>({
    resolver: zodResolver(CakeSchema),
    defaultValues,
  });

  const watchedPhoto = watch("photo");
  const watchedShape = watch("shape");
  const watchedFlavour = watch("flavour");
  const watchedSize = watch("size");
  const watchedLayers = watch("layers");
  const watchedMessage = watch("message");

  useEffect(() => {
    if (watchedPhoto && watchedPhoto instanceof File) {
      const objectUrl = URL.createObjectURL(watchedPhoto as File);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
    setPreviewUrl("");
  }, [watchedPhoto]);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setValue("photo", file, { shouldValidate: true, shouldDirty: true });
  }

  function onLayersChange(delta: number) {
    const next = Math.min(10, Math.max(0, (watchedLayers ?? 0) + delta));
    setValue("layers", next, { shouldValidate: true });
  }

  const onSubmit = (data: CakeFormValues) => {
    // In a real app you'd send `data` to your API / zustand / tanstack-query mutation
    // Here we'll just log it and show a minimal alert for demonstration.
    console.log("Submitted cake:", data);
    alert("Cake saved to console. Ready to integrate with cart or backend.");
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen px-[46px] py-6">
      <h2 className="text-2xl font-semibold mb-1">Customize your Cake</h2>
      <p className="text-gray-600 mb-8">
        Create a cake that’s truly yours — pick your flavor, shape, size, and add your
        personal touch.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-6 max-w-[1200px]">
        {/* Left Section */}
        <div className="bg-white rounded-xl p-8 flex-1 space-y-6 shadow">
          {/* Step 1: Flavour */}
          <div className="flex items-start gap-3">
            <div className="bg-[#8C1C32] text-white w-10 h-10 flex items-center justify-center rounded-lg">1</div>
            <div className="w-full">
              <Label>Pick Your Base Flavor</Label>
              <Select
                onValueChange={(val) => setValue("flavour", val as CakeFormValues["flavour"])}
              >
                <SelectTrigger className="w-60 mt-2">
                  <SelectValue placeholder={defaultValues.flavour} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Strawberry">🍓 Strawberry</SelectItem>
                    <SelectItem value="Chocolate">🍫 Chocolate</SelectItem>
                    <SelectItem value="Lemon">🍋 Lemon</SelectItem>
                    <SelectItem value="Vanilla">🍦 Vanilla</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.flavour && <p className="text-sm text-red-600">{errors.flavour.message}</p>}
            </div>
          </div>

          {/* Step 2: Shape */}
          <div className="flex items-start gap-3">
            <div className="bg-[#8C1C32] text-white w-10 h-10 flex items-center justify-center rounded-lg">2</div>
            <div className="w-full">
              <Label>Choose the Cake Shape</Label>
              <div className="grid grid-cols-3 gap-4 mt-2">
                {[
                  "Square",
                  "Round",
                  "Heart",
                  "Rectangle",
                  "MultiShape",
                  "PhotoCraft",
                ].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setValue("shape", s as CakeFormValues["shape"])}
                    className={`border rounded-md py-4 flex flex-col items-center ${watchedShape === s ? "ring-2 ring-[#8C1C32]" : ""}`}
                  >
                    {s === "Heart" ? "❤️" : s}
                    <span className="text-xs mt-1">{s}</span>
                  </button>
                ))}
              </div>
              {errors.shape && <p className="text-sm text-red-600">{errors.shape.message}</p>}
            </div>
          </div>

          {/* Step 3: Size */}
          <div className="flex items-start gap-3">
            <div className="bg-[#8C1C32] text-white w-10 h-10 flex items-center justify-center rounded-lg">3</div>
            <div className="w-full">
              <Label>Select Size</Label>
              <div className="space-y-2 mt-2">
                <label className="block">
                  <input
                    {...register("size")}
                    type="radio"
                    value="Mini (300g)"
                    className="mr-2"
                    defaultChecked={defaultValues.size === "Mini (300g)"}
                  />
                  Mini (300g)
                </label>
                <label className="block">
                  <input {...register("size")} type="radio" value="1 Pound" className="mr-2" />
                  1 Pound
                </label>
                <label className="block">
                  <input {...register("size")} type="radio" value="2 Pound" className="mr-2" defaultChecked />
                  2 Pound
                </label>
                <label className="block flex items-center gap-2">
                  <input {...register("size")} type="radio" value="Custom" className="mr-2" />
                  Custom Size:
                  <Input
                    {...register("size")}
                    placeholder="e.g. 1.5kg"
                    className="ml-2 w-36"
                  />
                </label>
                {errors.size && <p className="text-sm text-red-600">{errors.size.message}</p>}
              </div>
            </div>
          </div>

          {/* Step 4: Layers */}
          <div className="flex items-start gap-3">
            <div className="bg-[#8C1C32] text-white w-10 h-10 flex items-center justify-center rounded-lg">4</div>
            <div className="w-full">
              <Label>Select Number of Layers (0–10)</Label>
              <div className="flex items-center gap-2 mt-2">
                <Button type="button" onClick={() => onLayersChange(-1)} disabled={(watchedLayers ?? 0) <= 0}>
                  −
                </Button>
                <div className="border px-4 py-2 rounded-md">{watchedLayers}</div>
                <Button type="button" onClick={() => onLayersChange(1)} disabled={(watchedLayers ?? 0) >= 10}>
                  +
                </Button>
              </div>
              {errors.layers && <p className="text-sm text-red-600">{errors.layers.message}</p>}
              <label className="block mt-2">
                <input
                  type="checkbox"
                  onChange={(e) => setValue("layers", e.target.checked ? 0 : 3)}
                />
                No layers needed
              </label>
            </div>
          </div>

          {/* Step 5: Message */}
          <div className="flex items-start gap-3">
            <div className="bg-[#8C1C32] text-white w-10 h-10 flex items-center justify-center rounded-lg">5</div>
            <div className="w-full">
              <Label>Add a Message</Label>
              <Input
                {...register("message")}
                maxLength={40}
                placeholder={defaultValues.message}
                className="mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">Max 40 characters</p>
              {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
            </div>
          </div>

          {/* Upload Photo */}
          <div className="flex items-start gap-3">
            <div className="w-10" />
            <div className="w-full">
              <Label>Upload Photo (Optional)</Label>
              <input
                type="file"
                accept="image/*"
                onChange={onFileChange}
                className="mt-2"
              />
              {errors.photo && <p className="text-sm text-red-600">{errors.photo.message}</p>}
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex items-start gap-3">
            <div className="w-10" />
            <Button type="submit" className="mt-2" disabled={isSubmitting}>
              Add To Cart
            </Button>
          </div>
        </div>

        {/* Right Section (Preview) */}
        <div className="bg-[#F9F9F9] w-[360px] rounded-[10px] p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-center font-semibold text-lg mb-4">🎂 Cake Details Preview</h3>
            <ul className="space-y-3 text-sm">
              <li>
                ● <strong>Flavour :</strong> {watchedFlavour}
              </li>
              <li>
                ● <strong>Message :</strong> {watchedMessage}
              </li>
              <li>
                ● <strong>Size :</strong> {watchedSize}
              </li>
              <li>
                ● <strong>Layers :</strong> {watchedLayers} layers
              </li>
              <li>
                ● <strong>Shape :</strong>
                <div className="border rounded-md mt-2 p-2 text-center w-20 mx-auto">
                  <div className={`mx-auto w-5 h-5 ${watchedShape === "Round" ? "bg-gray-400 rounded-full" : "bg-gray-300"} mb-1`} />
                  <span className="text-xs">{watchedShape}</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-2">● <strong>Image :</strong></p>
            {previewUrl ? (
             
              <img src={previewUrl} alt="Preview" className="w-[150px] h-[120px] rounded-md object-cover" />
            ) : (
              
              <img src="/your-image.jpg" alt="Preview placeholder" className="w-[150px] h-[120px] rounded-md object-cover" />
            )}
          </div>
        </div>
      </form>
    </div>
  );
}



