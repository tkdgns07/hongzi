'use client'
import React from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import './cardcontainer.css';

export default function Home() {
  return (
    <div className="container flex justify-center">
      <div className="w-[400px] md:w-[800px] flex items-center flex-col">
        <Card className="w-[100%] md:w-[95%] m-[10px] cardcontainer">
          <CardHeader className="p-[15px]">
            <CardTitle className="text-lg md:text-2xl">
              학생증 인증 시스템
            </CardTitle>
            <CardDescription>
              학생증을 통해 홍지관 출석, 배식 현황을 확인하세요.
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="w-[100%] h-[80%] grid grid-cols-2 gap-3 md:w-[95%] md:grid-cols-3">
          <Card className="flex flex-col items-center">
            <CardHeader>
              <CardTitle className="textflex">홍지관 확인</CardTitle>
              <CardDescription>홍지관 출석생을 확인하세요</CardDescription>
            </CardHeader>
            <CardContent className="flex items-end gap-4">
              <Link href={{ pathname : '/hong' }}>
                <Button className = "w-[100%]" size="lg">확인</Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center">
            <CardHeader>
              <CardTitle>배식 확인</CardTitle>
              <CardDescription>배식받은 학생을 확인하세요</CardDescription>
            </CardHeader>
            <CardContent className="flex items-end">
              <Link href={{pathname:'/meal'}}>
                <Button className = "w-[100%]" size="lg">확인</Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="col-span-2 md:col-span-1 md:w-[100%] flex flex-col items-center">
            <CardHeader>
              <CardTitle>학생증 인증</CardTitle>
              <CardDescription>출석 또는 배식 확인을 위해 사용합니다</CardDescription>
            </CardHeader>
            <CardContent className="flex items-end gap-4">
              <Link href={{pathname:'/checkhong'}}>
                <Button className = "w-[100px]" size="sm">출석</Button>
              </Link>
              <Link href={{pathname:'/mealcheck'}}>
                <Button className = "w-[100px]" size='sm' variant="outline">배식</Button>
              </Link>
            </CardContent>
          </Card>
      </div>
      </div>
    </div>
  );
}

