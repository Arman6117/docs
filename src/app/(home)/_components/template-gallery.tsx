"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { templates } from "@/constants/templates";
import { toast } from "sonner";

const TemplateGallery = () => {
  const [isCreating, setIsCreating] = useState(false);
  const create = useMutation(api.document.create);
  const router = useRouter();

  return (
    <div className="bg-[#F1F3F4]">
      <div className="max-w-screen-xl mx-auto px-16 py-16 flex flex-col gap-y-4">
        <h3 className="font-medium">Start a new document</h3>
        <Carousel>
          <CarouselContent className="-ml-4">
            {templates.map((template) => (
              <CarouselItem
                key={template.id}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%] pl-4"
              >
                <div
                  className={cn(
                    "aspect-[3/4] flex flex-col gap-y-2.5",
                    isCreating && "pointer-events-none opacity-50"
                  )}
                >
                  <button
                    disabled={isCreating}
                    onClick={() => {
                      setIsCreating(true);
                      create({
                        title: template.label,
                        initialContent: template.initialContent,
                      })
                        .then((id) => router.push(`/documents/${id}`))
                        .catch(() => toast.error("Something went wrong"))
                        .finally(() => setIsCreating(false));
                    }}
                    style={{
                      backgroundImage: `url(${template.imageURL})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="size-full hover:border-purple-600 rounded-sm border hover:bg-purple-50 transition flex flex-col items-center justify-center gap-y-4 bg-white"
                  ></button>
                  <p className="text-sm font-medium truncate">
                    {template.label}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default TemplateGallery;
