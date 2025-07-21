import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GetAllunits } from "@/lib/helper-functions/getAllUnits";
import { GetEmployee } from "@/lib/helper-functions/getEmployee";
import Link from "next/link";
import { format } from 'date-fns';

export const revalidate = 300;
export default async function EmployeeDetailPage({params}: {params: Promise<{eid: string}> }) {
    const eid = (await params).eid;
    const employeePromise = GetEmployee(eid);
    const getEmployeeUnitPromise = GetAllunits();
    const [employee, employeeUnits] = await Promise.all([employeePromise, getEmployeeUnitPromise]);
    const GetEmployeeUnit = employeeUnits.find(unit => unit.id === employee.unit)?.name;
    const readableDate = format(new Date(employee.created_at), "MMMM d, yyyy 'at' h:mm a");
    if(!employee || !GetEmployeeUnit) return <p>Refresh ths page or submit your details in the form section in the side Navigation.</p>

    return(
        <div className="w-full">
            <Card className="w-[80%] mx-auto">
                <CardHeader> 
                    <CardTitle>Welcome {employee.first_name}!</CardTitle>
                    <CardDescription>Your Profile</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-3">
                    <span className="flex flex-col gap-1">
                       <p>ID</p> 
                        {employee.employee_id}
                    </span> 
                    <span className="flex flex-col gap-1">
                        <p>Sector</p>
                        <Badge variant="secondary" asChild>
                            <Link href="/">{GetEmployeeUnit}</Link>
                        </Badge>
                    </span>
                   <span className="flex flex-col gap-1">
                     <p>Email</p> 
                     {employee.email}
                    </span> 
                    <span>
                       <p>Phone</p>
                        {employee.phone}
                    </span> 
                    <span className="flex flex-col gap-1">
                        <p>Date and Time Joined</p> 
                        {readableDate}
                    </span> 
                    <span className="flex flex-col gap-1">
                    <p> Unit</p>
                      {employee.unit}
                    </span>
                </CardContent>
                <CardFooter className="w-full flex items-center justify-center">
                    <Button variant="destructive" asChild>
                        <Link href="/">Proceeed to Dashboard</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}