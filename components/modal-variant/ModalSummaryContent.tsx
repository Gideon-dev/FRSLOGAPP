"use client"
import { GetAllunits } from "@/lib/helper-functions/getAllUnits";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Unit } from "@/lib/interface";

type SummaryProps = {
   title: string,
}
const ModalSummaryContent = ({title}: SummaryProps) => {
    const [units, setUnits] = useState<Unit[]>([]);
       
  useEffect(() => {
    GetAllunits().then(setUnits);
  }, []);
 
    
    return(
       <Card>
            <CardHeader> 
                <CardTitle>Total number of {title}</CardTitle>
                <CardDescription>
                  {units ? units.map(item => item.unit_id).length : 0}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
                {units && units.map(item => (
                    <Badge asChild variant="secondary" key={item.id}>
                      <Link href={`/unit-viewer/${item.id}`}> {item.name}</Link>
                    </Badge>
                ))}
            </CardContent>
       </Card>
    )
};
export default ModalSummaryContent;