import { Unit } from "../interface";

export const revalidate = 300;
export const GetAllunits = async():Promise<Unit[]> => {
   try {
    const res = await fetch(`https://frscadmin.onrender.com/frsc/units/`,{
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
    const result: Unit[] = await res.json();
    return result;
   } catch (error) {
        console.error('Couldnt get Employee details error:', error);
        return []
   }
}

export const GetUnitById = async(uid: number):Promise<Unit> =>{
    try {
        const res = await fetch(`https://frscadmin.onrender.com/frsc/units/`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            next:{
                revalidate: revalidate
            }
        });
        if(!res.ok){
            throw new Error('Failed to get unit info');
        }
        const result: Unit[] = await res.json();
        const resolvedUnit = result.find(unit => unit.id === uid);  
        // console.log(resolvedUnit)    
        if (!resolvedUnit) {
            throw new Error(`Unit with id ${uid} not found`);
        }
        return resolvedUnit;
    } catch (error) {
        console.error(`could not get this ${uid} from units`, error);
        return {
            id: 0,
            name: "unknown",
            unit_id: "AKNSO",
            employees: []
        }
    }
}

export const GetAllEmployeeCount = async(): Promise<number> =>{
    try {
        const res = await fetch(`https://frscadmin.onrender.com/frsc/units/`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            next:{
                revalidate: revalidate
            }
        });
        if(!res.ok){
            throw new Error('Failed to get total employee count');
        }
        const result: Unit[] = await res.json();
        return result.reduce((acc,item) => acc + item.employees.length, 0)
       } catch (error) {
            console.error('Could not get Employee count:', error);
            return 0
       }
}