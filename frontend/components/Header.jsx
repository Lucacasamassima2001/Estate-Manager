import Flex from "../UI/Flex";
import { LinkButton } from "../UI/LinkButton";
import Title from "../UI/Title";
export default function Header() {
  return (
    <Flex direction="column" align="center">
      <Title size="2rem">Estate Manager</Title>
      <Flex marginTop="1rem" justify="center" gap="1rem">
        <LinkButton to="/">Home</LinkButton>
        <LinkButton to="/estates">Estates</LinkButton>
      </Flex>
    </Flex>
  );
}
