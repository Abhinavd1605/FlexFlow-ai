import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CalendlyModal = ({ open, onOpenChange }: CalendlyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0 bg-white border-primary/20 overflow-hidden">
        <DialogTitle className="sr-only">
          Book a Personalized Demo
        </DialogTitle>
        <div className="relative w-full h-full">
          <iframe
            src="https://calendly.com/team-flexflowai/30min"
            className="w-full h-full"
            frameBorder="0"
            title="Book a Personalized Demo"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

