import Header from "./header/Header";
import Fooder from "./fooder/Fooder";

interface ILayoutProps {
    children? :React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Fooder/>
        </>
    );
};

export default Layout;