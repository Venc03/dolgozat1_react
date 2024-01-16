import "./App.css";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div>
            <header>Tanuljunk angolul!</header>
            <p>Szenvedo modu mondatokat kell kiegészitened.</p> 
            <article>
            {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
        </div>
    );
};

export default Layout;