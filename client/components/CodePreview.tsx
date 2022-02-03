type Props = {
  value: string;
};

export const CodePreview = ({ value }: Props) => (
  <iframe
    key={value}
    sandbox=""
    seamless
    srcDoc={`<html><head><style>body{overflow:hidden}</style></head><body>${value}</body></html>`}
  >
    <p>Your browser does not support iframes.</p>
  </iframe>
);
