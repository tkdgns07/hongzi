import React from "react";
import { CardTitle, CardDescription, CardHeader, Card} from "@/components/ui/card"

export const Banner =() => {
    return(
        <Card className="p-[20px] my-[20px] cardcontainer">
          <CardHeader className="p-[0]">
              <CardTitle className="text-xl">
                  홍지관 출석 현황 조회
              </CardTitle>
              <CardDescription>
                  홍지관 출석생을 확인할 수 있습니다.
              </CardDescription>
          </CardHeader>
      </Card>
    )
}