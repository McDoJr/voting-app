import DashboardNavigation from "./dashboard-navigation.jsx";
import DashboardContents from "./dashboard-contents.jsx";

const DashboardPage = () => {
    return (
        <>
            <section className="w-full h-screen flex">
                <DashboardNavigation/>
                <DashboardContents/>
            </section>
        </>
    )
}
export default DashboardPage;
