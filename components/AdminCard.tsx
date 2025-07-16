"use client";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { motion } from 'framer-motion'
import { useState } from "react";

type AdminCardProps ={
  title: string;
  pointer: number | string; 
}
const AdminCard = ({title, pointer}:AdminCardProps) => {
   const [open, setOpen] = useState(false)
    return(
        <Dialog open={open} onOpenChange={setOpen}>
        <Card className="w-full max-w-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{title}</CardTitle>
            <DialogTrigger asChild>
              <Button size="icon" variant="ghost">
                <ChevronRight />
              </Button>
            </DialogTrigger>
          </CardHeader>
          <CardContent className="text-2xl font-bold">{pointer}</CardContent>
        </Card>
  
        <DialogContent className="backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
          >
            <DialogHeader>
              <DialogTitle>{title} Details</DialogTitle>
              <DialogDescription>
                {/* {loading ? 'Loading...' : data?.detail} */}
              </DialogDescription>
            </DialogHeader>
  
            
            
            <DialogFooter className="pt-4">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button>Save</Button>
            </DialogFooter>

          </motion.div>
        </DialogContent>
      </Dialog>
    )
};
export default AdminCard;