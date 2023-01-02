import { Card, Typography } from "antd";

type Props = {
  title: string;
  children: any;
};

export const CardWindow: React.FC<Props> = ({ title, children }) => {
  return (
    <Card
      size="small"
      title={<Typography.Text>{title}</Typography.Text>}
      bodyStyle={{ padding: 0 }}
    >
      {children}
    </Card>
  );
};
