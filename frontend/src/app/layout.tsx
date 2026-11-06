import { Roboto } from "next/font/google"

import type { Metadata } from "next"
import "./globals.css"
import { Provider } from "@/components/Provider";

const geistRoboto = Roboto({
    subsets: ["latin"],
    weight: ['300', '400', '500', '700']
});

export const metadata: Metadata = {
    title: "YouTube",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={geistRoboto.className}>
            <body className="mx-[20px]">
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
