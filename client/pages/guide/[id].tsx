import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SetStateAction, useState } from "react";
import CodeDescription from "../../components/CodeDescription";
import CodeEditor from "../../components/CodeEditor";
import { CodePreview } from "../../components/CodePreview";
import { sampleData } from "../../utils/sample-data";

const Guide = () => {
  const [codeValue, setCodeValue] = useState("");
  const router = useRouter();
  const routeId = router.query.id;
  const data = sampleData.find((e) => e.id == Number(routeId)) || {
    id: 0,
    title: "title",
    description: "description",
    expectedOutput: "",
  };
  const { id, title, description, expectedOutput } = data;

  return (
    <Grid templateColumns="2fr 1fr 1fr" gap={3} h="inherit">
      <GridItem rowSpan={2} w="100%" bg="background">
        <CodeDescription title={title} description={description} />
      </GridItem>
      <GridItem w="100%" colSpan={2}>
        <CodeEditor
          value={codeValue}
          onChange={(value: SetStateAction<string>) => {
            setCodeValue(value);
          }}
        />
      </GridItem>
      <GridItem>
        <Box color="sage">Output:</Box>
        <Box w="300px" h="200px" border="1px" bg="white">
          <CodePreview value={codeValue} />
        </Box>
      </GridItem>
      <GridItem>
        <Box color="violet">Expected output:</Box>
        <Box
          w="300px"
          h="200px"
          border="1px"
          bg="white"
          dangerouslySetInnerHTML={{ __html: expectedOutput }}
        ></Box>
      </GridItem>
    </Grid>
  );
};

export default Guide;
