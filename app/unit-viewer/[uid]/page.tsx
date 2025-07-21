import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { GetAllunits, GetUnitById } from "@/lib/helper-functions/getAllUnits";
import { getUnitEmployees } from "@/lib/helper-functions/getEmployee";
import { format } from 'date-fns';

export default async function Viewer({params}: {params: Promise<{uid: string}>}) {
    const unitId = Number((await params).uid);
    // console.log(typeof unitId);
    const unit = await GetUnitById(unitId);
    const unitName= unit.name
    const Employees = await getUnitEmployees(unitId);

    return( 
        <Table>
            <TableCaption>A list of Employee for {unitName ?? 'loading...'} </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>EID</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Employees.map(item => (
                    <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.first_name}</TableCell>
                        <TableCell>{item.employee_id}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell className="text-left">{format(new Date(item.created_at), "MMMM d, yyyy")}</TableCell>
                   </TableRow>
                ))}
            </TableBody>
        </Table>
   )
}