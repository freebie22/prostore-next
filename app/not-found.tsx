"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <Image
          className="mx-auto mb-4"
          src="/images/logo.svg"
          width={48}
          height={48}
          alt={APP_NAME}
          priority={true}
        />
        <h1 className="text-3xl font-bold mb-4">Упс...</h1>
        <p className="text-destructive">Такої сторінки не знайдено.</p>
        <Button
          variant={"outline"}
          className="mt-4 ml-2"
          onClick={() => redirect("/")}
        >
          На головну
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
