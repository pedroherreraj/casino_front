import { Outlet } from "react-router-dom";
import Sidebar from 'features/backoffice/layout/Sidebar'
export default function Root() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div id="detail d-block">
        <Outlet />
      </div>
    </div>
  );
}