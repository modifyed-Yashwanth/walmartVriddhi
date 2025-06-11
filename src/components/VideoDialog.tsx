import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type VideoDialogProps = {
  videoLink: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function VideoDialog({ videoLink, open, onOpenChange }: VideoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 w-[100vw] max-w-[900px] h-[400px]">
        <video
          src={videoLink}
          autoPlay
          controls
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          className="w-full h-full rounded-lg"
          
        />
      </DialogContent>
    </Dialog>
  );
}

export default VideoDialog;
