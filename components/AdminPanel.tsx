import { IdCardLanyard, LayoutPanelTop } from "lucide-react";
import AdminCard from "./AdminCard";

const AdminPanel = () =>{
    return(
        <div className="w-full flex justify-center">
            <div className="space-y-5 w-[80%]">
                <AdminCard 
                    icon={<LayoutPanelTop/>}
                    title="Total Units"
                    variant="stats"
                />
                <AdminCard 
                    icon= {<IdCardLanyard/>}
                    title="Total Employee"
                    variant="employee"
                />
            </div>
        </div>
    )
};

export default AdminPanel;