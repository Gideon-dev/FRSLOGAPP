export type AdminCardVariant = 'stats' | 'employee'

// export interface ModalContentProps {
//   data: any;
//   onClose: () => void;
//   placeholder: string;
// }
export interface Employee {
    id: number
    employee_id: string
    post: string
    first_name: string
    surname: string
    next_of_kin_name: string
    next_of_kin_phone: string
    other_names: string
    command: string
    email: string
    phone: string
    created_at: string // ISO date string
    unit: number // foreign key to unit
}

export interface Unit {
id: number;
name: string; 
unit_id: string;
employees: Employee[];
}
