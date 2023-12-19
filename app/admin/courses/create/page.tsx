"use client";

import Error from "@/components/error";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import useMount from "@/hooks/use-mount";
import { createPost } from "@/lib/actions";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CreatePost } from "@/lib/schema";
import { unstable_noStore as noStore } from "next/cache";

function CreatePage() {
  const pathname = usePathname();
  const isCreatePage = pathname === "/admin/courses/create";
  const router = useRouter();
  const mount = useMount();
  const form = useForm<z.infer<typeof CreatePost>>({
    resolver: zodResolver(CreatePost),
    defaultValues: {
      caption: "",
      fileUrl: undefined,
    },
  });
  const fileUrl = form.watch("fileUrl");

  if (!mount) return null;

  return (
    <div>
      <Dialog
        open={isCreatePage}
        onOpenChange={(open) => !open && router.back()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new post</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(async (values) => {
                const res = await createPost(values);
                if (res) {
                  return toast.error(<Error res={res} />);
                }
              })}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 w-full">
                {!!fileUrl && (
                  <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                    <AspectRatio ratio={1 / 1} className="relative">
                      <Image
                        src={fileUrl}
                        alt="Post preview"
                        fill
                        sizes="200px"
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                  </div>
                )}
                <FormField
                  control={form.control}
                  name="fileUrl"
                  render={({ field, fieldState }) => (
                    <FormItem className="w-full">
                      <FormLabel htmlFor="picture">Picture</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          id="picture"
                          accept="image/*"
                          onChange={async (event) => {
                            noStore();
                            try {
                              const file = event.target.files?.[0];
                              const formData = new FormData();
                              formData.append("image", file!);
                              const response = await fetch("/api/upload", {
                                method: "POST",
                                body: formData,
                              });
                              const { url } = await response.json();
                              console.log(url);
                              form.setValue("fileUrl", url);
                            } catch (error) {
                              console.error(error);
                            }
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Upload a picture to post.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {!!fileUrl && (
                <FormField
                  control={form.control}
                  name="caption"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="caption">Caption</FormLabel>
                      <FormControl>
                        <Input
                          type="caption"
                          id="caption"
                          placeholder="Write a caption..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <Button type="submit" disabled={form.formState.isSubmitting}>
                Create Post
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreatePage;
