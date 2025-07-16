import AdminCard from "./AdminCard";

const AdminPanel = () =>{
    return(
        <div className="w-full flex justify-center">
            <div className="space-y-5 w-[80%]">
                <AdminCard 
                    pointer="100" 
                    title="Total Units"
                />
                <AdminCard 
                    pointer="200" 
                    title="Total Employee"
                />
            </div>
        </div>
    )
};

export default AdminPanel;