import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { xml } from "@codemirror/lang-xml";

type Props = {
  value: string;
  onChange: any;
};

export const CodeEditor = ({ value, onChange }: Props) => (
  <CodeMirror
    value={value}
    height="500px"
    width="100%"
    onChange={onChange}
    theme={oneDark}
    extensions={[xml()]}
  />
);

export default CodeEditor;
