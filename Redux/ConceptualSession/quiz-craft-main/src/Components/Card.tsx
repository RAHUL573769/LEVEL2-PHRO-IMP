import { Card, CardFooter } from "@material-tailwind/react";

type TChildren = {
  children: React.ReactNode;
};
export function SimpleCard({ children }: TChildren) {
  return (
    <Card placeholder={""} className="mt-6 w-96">
      {/* <CardBody placeholder={""}>
        <Typography
          placeholder={""}
          variant="h5"
          color="blue-gray"
          className="mb-2"
        >
          UI/UX Review Check
        </Typography>
        <Typography placeholder={""}>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody> */}
      <CardFooter placeholder={""} className="pt-0">
        {children}
      </CardFooter>
    </Card>
  );
}
