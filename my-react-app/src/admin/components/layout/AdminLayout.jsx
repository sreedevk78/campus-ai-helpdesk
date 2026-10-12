import Topbar from "../../../components/common/Topbar.jsx";
import AdminSidebar from "./AdminSidebar.jsx";
function AdminLayout({children})
{
    return(
        <div className="flex">
            <AdminSidebar/>
            <main className="flex-1 bg-gray-100 min-h-screen p-6">
                <Topbar 
                role="admin"
                userName="Admin User"
                userRole="Administrator"/>
                {children}
            </main>
        </div>
    );
}
export default AdminLayout;