import type {AppProps} from "next/app";
import Layout from "../layouts/layout.tsx";

export default function App({Component, pageProps}: AppProps) {
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );   
}
