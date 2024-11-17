import { appointments } from "@/lib/Data";
import { columns } from "../components/AppointmentsTabel/columns";
import { AppointmentTable } from "../components/AppointmentsTabel/dataTabel";


export default function Appointments(){
    return(
        <div className="container mx-auto">
            <div className="my-10">
<AppointmentTable columns={columns} data={appointments}/>
            </div>
        </div>
    )
}