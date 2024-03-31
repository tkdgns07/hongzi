'use client'
import React, { useState } from "react";
import { Datatable } from '@/components/datatable';
import { Card, CardTitle, CardHeader, CardDescription } from '@/components/ui/card';
import { Banner } from '@/components/banner'

export default function Page() {
    const [activeButton, setActiveButton] = useState<string | null>('1학년'); // 버튼 이름의 타입을 명시적으로 지정합니다.

    const allData = [
        [{'time' : '2024.03.20', 'id' : 2109, 'name' : '박상훈', 'check' : '미확인'}, 
        {'time' : '2024.03.21', 'id' : 2119, 'name' : '채은우', 'check' : '확인'}],
        [{'time' : '2024.03.20', 'id' : 2109, 'name' : '박상훈', 'check' : '확인'}, 
        {'time' : '2024.03.21', 'id' : 2119, 'name' : '채은우', 'check' : '미확인'}],
        [{'time' : '2024.03.20', 'id' : 2109, 'name' : '박상훈', 'check' : '확인'}, 
        {'time' : '2024.03.21', 'id' : 2119, 'name' : '채은우', 'check' : '확인'}],
    ];

    const handleButtonClick = (buttonName: string) => { // 버튼 이름의 타입을 명시적으로 지정합니다.
        setActiveButton(buttonName);
    };

    const filteredData = activeButton ? allData[activeButton === '1학년' ? 0 : activeButton === '2학년' ? 1 : 2] : allData.flat();

    return (
        <div className="w-[1000px] p-[10px] md:p-[20px]">
            <Banner></Banner>
            <div className="w-[160px] mb-[10px] flex justify-between flex-row">
                <Card className={`w-[50px] h-[30px] transition flex items-center justify-center ${activeButton === '1학년' ? 'bg-black' : 'bg-white hover:bg-menuhc '}`} onClick={() => handleButtonClick('1학년')}>
                    <CardHeader className="p-[0]">
                        <CardDescription className={`p-[0] ${activeButton === '1학년' ? 'text-white' : 'text-black'}`}>
                            1학년
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className={`w-[50px] h-[30px] transition flex items-center justify-center ${activeButton === '2학년' ? 'bg-black' : 'bg-white hover:bg-menuhc '}`} onClick={() => handleButtonClick('2학년')}>
                    <CardHeader className="p-[0]">
                        <CardDescription className={`p-[0] ${activeButton === '2학년' ? 'text-white' : 'text-black'}`}>
                            2학년
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className={`w-[50px] h-[30px] transition flex items-center justify-center ${activeButton === '3학년' ? 'bg-black' : 'bg-white hover:bg-menuhc '}`} onClick={() => handleButtonClick('3학년')}>
                    <CardHeader className="p-[0]">
                        <CardDescription className={`p-[0] ${activeButton === '3학년' ? 'text-white' : 'text-black'}`}>
                            3학년
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <Datatable dataList={filteredData}/>
        </div>
    );
}
