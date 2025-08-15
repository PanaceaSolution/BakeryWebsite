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
import { LucideDot, LucideRectangleHorizontal } from "lucide-react";
import { FaRegCircle, FaRegSquare } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const cakeShape = [
  { name: "square", icons: <FaRegSquare className="w-[38px] h-[38px]" /> },
  { name: "Round", icons: <FaRegCircle className="w-[38px] h-[38px]" /> },
  {
    name: "Heart", icons: <AiFillHeart className="w-[38px] h-[38px] text-red-500" />
  },
  { name: "Rectangle", icons: <LucideRectangleHorizontal className="w-[38px] h-[38px]" /> },
  { name: "MultiShape", icons: <AiFillHeart className="w-[45px] h-[45px] text-red-500 border-2 border-black px-2 rounded-sm" /> },
  { name: "PhotoCraft (All shape)", icons: <LucideRectangleHorizontal className="w-[38px] h-[38px]" /> },
]
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
    <div className="bg-[#f5f5f5] w-full md:px-[46px] py-6">
      <h2 className="text-2xl font-semibold mb-1">Customize your Cake</h2>
      <p className="text-gray-600 mb-8">
        Create a cake that’s truly yours — pick your flavor, shape, size, and add your
        personal touch.
      </p>

      <div>

        <form onSubmit={handleSubmit(onSubmit)} className=" bg-white rounded-md grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Left Section */}
          <div className=" rounded-xl p-8 flex-1 space-y-6  w-max[893px] w-full ">
            {/* Step 1: Flavour */}
            <div className="flex items-start gap-2 md:gap-3 text-center">
              <div className="w-full">
                <div className="flex gap-2">

                  <p className="bg-[#8C1C32] text-white w-10 h-10 flex items-center justify-center rounded-lg">1</p>
                  <Label>Pick Your Base Flavor</Label>
                </div>
                <div className="flex gap-6 content-center items-center flex-col md:flex-row">
                  <LucideDot />
                  <p>Select Flavour</p>
                  <Select
                    onValueChange={(val) => setValue("flavour", val as CakeFormValues["flavour"])}
                  >
                    <SelectTrigger className="mt-2">
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
            </div>

            {/* Step 2: Shape */}
            <div className="flex items-start gap-3">
              <div className="w-full">
                <div className="flex gap-2">

                  <div className="bg-[#8C1C32] text-white w-10 h-10 flex items-center justify-center rounded-lg">2</div>
                  <Label>Choose the Cake Shape</Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  {cakeShape.map((s, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setValue("shape", s.name as CakeFormValues["shape"])}
                      className={`border rounded-md py-4 flex flex-col items-center `}
                    >
                      <div className="flex justify-center flex-col text-center items-center">

                        {s.icons}
                        <span className="text-xs mt-1">{s.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
                {errors.shape && <p className="text-sm text-red-600">{errors.shape.message}</p>}
              </div>
            </div>

            {/* Step 3: Size */}
            <div className="flex items-start gap-2 md:gap-3">
              <div className="w-full">
                <div className="flex gap-2">
                  <div className="bg-[#8C1C32] text-white w-10 h-10 flex items-center justify-center rounded-lg">3</div>
                  <Label>Select Size</Label>
                </div>

                <div className="space-y-2 mt-2 mx-3">
                  <label className="flex gap-6">
                    <input
                      {...register("size")}
                      type="radio"
                      value="Mini (300g)"
                      className="mr-2"
                      defaultChecked={defaultValues.size === "Mini (300g)"}
                    />
                    Mini (300g)
                  </label>
                  <label className="flex gap-6">

                    <input {...register("size")} type="radio" value="1 Pound" className="mr-2" />
                    1 Pound
                  </label>
                  <label className="flex gap-6">

                    <input {...register("size")} type="radio" value="2 Pound" className="mr-2" defaultChecked />
                    2 Pound
                  </label>
                  <label className=" flex items-center gap-6">
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
              <div className="w-full">
                <div className="flex gap-2">
                  <div className="bg-[#8C1C32] text-white w-10 h-10 flex items-center justify-center rounded-lg">4</div>
                  <Label>Select Number of Layers (0–10)</Label>
                </div>
                {/* Layers counter + inline checkbox (paste here) */}
                <div className="mt-2">
                  <div className="flex gap-4 flex-col">

                    <div className="flex gap-6 items-center">

                      <label>

                        Select layers :
                      </label>
                      {/* Counter */}
                      <div className="flex items-center gap-2 border border-gray-200 rounded-full p-1">
                        <Button
                          type="button"
                          onClick={() => onLayersChange(-1)}
                          disabled={(watchedLayers ?? 0) <= 0}
                          className={`w-8 h-8 rounded-full flex items-center justify-center border hover:bg-white hover:text-black bg-[#8C1C32] ${((watchedLayers ?? 0) <= 0) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          −
                        </Button>

                        {/* number in red circle */}
                        <div className="w-8 h-8 flex items-center justify-center rounded-full font-medium">
                          {watchedLayers ?? 0}
                        </div>

                        <Button
                          type="button"
                          onClick={() => onLayersChange(1)}
                          disabled={(watchedLayers ?? 0) >= 10}
                          className={`w-8 h-8 rounded-full flex items-center justify-center border  hover:bg-white hover:text-black bg-[#8C1C32] ${((watchedLayers ?? 0) >= 10) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          +
                        </Button>
                      </div>
                    </div>


                    {/* Inline checkbox */}
                    <label className="flex items-center gap-2 select-none">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded-full"
                        onChange={(e) => setValue("layers", e.target.checked ? 0 : 3)}
                      />
                      <span className="text-sm">No layers needed</span>
                    </label>
                  </div>

                  {/* error message */}
                  {errors.layers && (
                    <p className="text-sm text-red-600 mt-2">{errors.layers.message}</p>
                  )}
                </div>


                {errors.layers && <p className="text-sm text-red-600 mt-1">{errors.layers.message}</p>}

              </div>
            </div>

            {/* Step 5: Message */}
            <div className="flex items-start gap-3">
              <div className="w-full">
                <div className="flex gap-2">

                  <div className="bg-[#8C1C32] text-white w-10 h-10 flex items-center justify-center rounded-lg">5</div>
                  <Label>Add a Message</Label>
                </div>
                <textarea
                  {...register("message")}
                  maxLength={40}
                  placeholder={defaultValues.message}
                  className="mt-2 w-full border border-gray-300 rounded-md p-2 resize-none"
                />
                <p className="text-sm text-gray-500 mt-1">Max 40 characters</p>
                {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
              </div>
            </div>

            {/* Upload Photo */}
            <div className="flex items-start gap-3 flex-col">
              <div className="flex gap-2">

                <div className="bg-[#8C1C32] text-white w-10 h-10 flex items-center justify-center rounded-lg">5</div>
                <Label>Upload Photo (Optional)</Label>
              </div>
              <div className="w-10" />
              <input
                type="file"
                accept="image/*"
                onChange={onFileChange}
                className="mt-2 border border-gray-500 px-2  w-full md:w-[211px]"
              />
              {errors.photo && <p className="text-sm text-red-600">{errors.photo.message}</p>}
            </div>

            {/* Add to Cart Button */}
            <div className="flex items-start gap-3">
              <Button type="submit" className="mt-2 bg-[#CF294A] text-white" disabled={isSubmitting}>
                Add To Cart
              </Button>
            </div>
          </div>

          {/* Right Section (Preview) */}
          <div className="flex content-center items-center pr-6">

            <div className="bg-[#F9F9F9] w-full w-max-[689px] rounded-[10px] h-[679px] p-6">
              <div>
                <h3 className="text-center font-semibold text-lg mb-4 border-b-2 pb-6">🎂 Cake Details Preview</h3>
                <ul className="space-y-3 text-sm">
                  <li className=" flex gap-6 space-x-6">
                    ● <strong>Flavour :</strong> {watchedFlavour}
                  </li>
                  <li className=" flex gap-5 space-x-6">

                    ● <strong>Message :</strong> {watchedMessage}
                  </li>
                  <li className=" flex gap-6 space-x-6">

                    ● <strong>Size :</strong> {watchedSize}
                  </li>
                  <li className=" flex gap-6 space-x-6">

                    ● <strong>Layers :</strong> {watchedLayers} layers
                  </li>
                  <li className=" flex gap-6 mb-6">

                    ● <strong>Shape :</strong>
                    <div className="border rounded-md mt-2 p-2 text-center w-20 items-start">
                      <div className={`mx-auto w-5 h-5 ${watchedShape === "Round" ? "bg-gray-400 rounded-full" : "bg-gray-300"} mb-1`} />
                      <span className="text-xs">{watchedShape}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex space-x-6">
                <p className=" flex gap-6 space-x-6 mb-6">● <strong>Image :</strong></p>
                {previewUrl ? (

                  <img src={previewUrl} alt="Preview" className="w-[150px] h-[120px] rounded-md object-cover" />
                ) : (

                  <img src="/your-image.jpg" alt="Preview placeholder" className="w-[150px] h-[120px] rounded-md object-cover" />
                )}
              </div>
            </div>
          </div>

        </form>
      </div>

    </div>
  );
}



