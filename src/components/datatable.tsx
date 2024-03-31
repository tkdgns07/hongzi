import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import React from "react";
import { Card} from "@/components/ui/card"


interface DataItem {
  time : string;
  id: number;
  name: string;
  check : string;
}

interface DataListProps {
  dataList: DataItem[];
}

export const Datatable: React.FC<DataListProps> = ({ dataList }) => {
  return (
      <Card className="p-[0]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Check</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataList.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.time}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.check}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
  );
};
