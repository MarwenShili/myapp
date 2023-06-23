import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const CardProduct = ({ element }) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{ width: "300px" }}
      cover={<img alt="example" src={element.thumbnail} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      onClick={() => navigate(`products/${element.id}`, { state: element })}
    >
      <Meta
        avatar={
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        }
        title={element.title}
        description={element.description}
      />
    </Card>
  );
};
export default CardProduct;
