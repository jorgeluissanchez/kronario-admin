'use server';
import prisma from "@/lib/prisma";
import { getUserId } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreatePost } from "./schema";
import { z } from "zod";

export async function createPost (values: z.infer<typeof CreatePost>) {
  const userId = await getUserId();

  const validatedFields = CreatePost.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation Error: Invalid Fields.",
    };
  }

  const { fileUrl, caption } =  validatedFields.data;

  try {
    await prisma.post.create({
      data: {
        fileUrl,
        caption,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Post.",
    };
  }

  revalidatePath("/admin");
  redirect("/admin");
}
