import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import schoollogo from './img/schoollogo.png'
import Link from "next/link";
import accounticon from './img/accounticon.png'
import logouticon from './img/logouticon.png'
import loginicon from './img/loginicon.png'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "강원과학고등학교",
  description: "강원과학고등학교 홍지관, 급식 확인 시스템",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="menubar flex items-center justify-between">
            <Link href={{pathname: '/'}} className="ml-[0px] h-[90%] flex direction-col items-center md:ml-[20px]">
              <Image src={schoollogo} alt="KSHS_logo" className="w-[35px]"/>
              <p className="menutext text-base ml-[5px]">
                강원과학고등학교
              </p>
              <div className="w-[1.5px] h-[1.3em] bar m-[5px]"></div>
              <p className="menutext text-base">
                KSHS
              </p>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-[30px] h-[30px] rounded-full flex justify-center items-center transition hover:bg-menuhc">
                <Image src={loginicon} alt="loginicon"/>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-lg bg-bodyc">
                <DropdownMenuLabel className="pl-[15px]">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-menuc"/>
                <DropdownMenuItem className="p-[5px]">
                  <Link href={{pathname: '/login'}}>
                    <Card className="flex items-center flex-row transition font-menuc bg-bodyc border-none p-[10px] hover:bg-menuhc">
                      <Image src={accounticon} alt="logouticon" className="mr-[5px]"/>
                      이상찬님 안녕하세요
                    </Card>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={{pathname: '/'}} className="w-[100%]">
                    <Card className="flex items-center flex-row transition font-menuc bg-bodyc border-none p-[10px] hover:bg-menuhc">
                      <Image src={logouticon} alt="logouticon" className="mr-[5px]"/>
                      로그아웃
                    </Card>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        <div className="flex justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}