import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const Education = () => {
    return (
        <div className="p-20">
            <h2 className='text-4xl font-bold text-center mb-8'>Educational Qualification</h2>
            <div>
                <Table>
                    <TableCaption></TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Degree</TableHead>
                            <TableHead>Result</TableHead>
                            <TableHead>Institute</TableHead>
                            {/* <TableHead className="text-right">Amount</TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Secondary School Certificate</TableCell>
                            <TableCell>GPA - 4.83</TableCell>
                            <TableCell>Shuluya High School & College</TableCell>
                            {/* <TableCell className="text-right">$250.00</TableCell> */}
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Diploma in Computer Science & Technology</TableCell>
                            <TableCell>CGPA - 3.74</TableCell>
                            <TableCell>Mpulvibazar Polytechnic Institute</TableCell>
                            {/* <TableCell className="text-right">$250.00</TableCell> */}
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    );
};

export default Education;