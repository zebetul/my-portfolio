import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

function AppLayout() {
	return (
		<div className="flex flex-col">
			<main>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}

export default AppLayout;
