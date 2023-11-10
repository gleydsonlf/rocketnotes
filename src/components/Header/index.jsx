import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        {/* Para aparecer a foto do usuário do githhub */}
        <img src="https://github.com/gleydsonlf.png" alt="Foto do usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>Gleydson Lucas</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
