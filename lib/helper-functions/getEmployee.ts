import { Employee } from "../interface";

export const revalidate = 300;
export const GetEmployee = async(eid: string): Promise<Employee> => {
   try {
    const res = await fetch(`https://frscadmin.onrender.com/frsc/employees/${eid}/`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        next:{
            revalidate: revalidate
        }
    });
    if(!res.ok){
        throw new Error('Failed to get employee info');
    }
    const result:Employee = await res.json();
    return result;
   } catch (error) {
        console.error('Couldnt get Employee details error:', error)
        return {
            "id": 0,
           "employee_id": '',
            "post": '',
            "first_name": '',
            "surname": '',
            "next_of_kin_name": '',
           "next_of_kin_phone": '',
            "other_names": '',
            "command": '',
            "email": '',
            "phone": '',
            "created_at": '', // ISO date string
            "unit": 0
        }
   }
}

export const getUnitEmployees = async(uid: number): Promise<Employee[]> =>{
    try {
        const res = await fetch(`https://frscadmin.onrender.com/frsc/units/${uid}/employees/`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            next:{
                revalidate: revalidate
            }
        });
        if(!res.ok){
            throw new Error('Failed to get employee infos for this unit');
        }
        const result:Employee[] =await res.json() ;
        return result;
    } catch (error) {
        console.error('Couldnt get Employee details error:', error)
        return[]
    }
}