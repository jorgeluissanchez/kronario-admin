"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export function Members() {
  const cardRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            Members
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Miembros</DialogTitle>
            <DialogDescription>
              Anyone with the link can view this document.
            </DialogDescription>
          </DialogHeader>
          <div className="flex space-x-2">
            <Input value="http://example.com/link/to/document" readOnly />
            <Button variant="secondary" className="shrink-0">
              Copy Link
            </Button>
          </div>
          <Separator className="my-4" />
          <div className="space-y-4">
            <h4 className="text-sm font-medium">People with access</h4>
            <div className="grid gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/avatars/03.png" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Olivia Martin
                    </p>
                    <p className="text-sm text-muted-foreground">
                      m@example.com
                    </p>
                  </div>
                </div>
                <Select defaultValue="edit">
                  <SelectTrigger className="ml-auto w-[110px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="edit">Can edit</SelectItem>
                    <SelectItem value="view">Can view</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
