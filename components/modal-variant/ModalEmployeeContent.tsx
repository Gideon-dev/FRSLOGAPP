"use client"
import { GetAllEmployeeCount } from "@/lib/helper-functions/getAllUnits";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useEffect, useState } from "react";

type EmployProps = {
    title: string
 }

const ModalEmployeeContent = ({title}: EmployProps) => {
    const [EmployeeCount, setEmployeeCount] = useState<number>(0);
    
  useEffect(() => {
    GetAllEmployeeCount().then(setEmployeeCount);
  }, []);
  
    return(
        <Card>
            <CardHeader> 
                <CardTitle>Total count for {title}:</CardTitle>
            </CardHeader>
            <CardDescription>
                {EmployeeCount}
            </CardDescription>
        </Card>
    )
};
export default ModalEmployeeContent