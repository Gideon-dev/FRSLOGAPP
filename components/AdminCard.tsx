import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { AnimatePresence,motion } from 'framer-motion'
import { JSX } from "react";
import { AdminCardVariant } from "@/lib/interface";
import ModalSummaryContent from "./modal-variant/ModalSummaryContent";
import ModalEmployeeContent from "./modal-variant/ModalEmployeeContent";

type AdminCardProps ={
  title: string;
  icon: JSX.Element;
  variant: AdminCardVariant;
}

const AdminCard = ({title, icon, variant}:AdminCardProps) => {
   
  const renderModalContent = () => {

    switch (variant) {
      case 'stats':
        return ModalSummaryContent ? <ModalSummaryContent title={title} /> : null;
      case 'employee':
        return ModalEmployeeContent ? <ModalEmployeeContent title={title} /> : null;
      default:
        return <p>No content available</p>
    }
  }
//   console.log('variant:', variant);
// console.log('ModalSummaryContent:', ModalSummaryContent);
// console.log('ModalEmployeeContent:', ModalEmployeeContent);
    return(
        <Dialog>
        <Card className="w-full max-w-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{title}</CardTitle>
            <DialogTrigger asChild>
              <Button size="icon" variant="ghost">
                <ChevronRight />
              </Button>
            </DialogTrigger>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {icon}
          </CardContent>
        </Card>
  
      
        <DialogContent className="backdrop-blur-md">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <DialogDescription>This is the {title} overall section</DialogDescription>
          <div>
            {renderModalContent()}
          </div>
        </DialogContent>
      </Dialog>
    )
};
export default AdminCard;