import { Box } from "@chakra-ui/react";

type Props = {
  title: String;
  description: String;
};

const CodeDescription = ({ title, description }: Props) => (
  <div>
    <Box color="chalky">{title}</Box>
    <div>{description}</div>
  </div>
);
export default CodeDescription;
