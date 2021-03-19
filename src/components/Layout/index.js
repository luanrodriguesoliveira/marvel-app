import Header from '../Header';
import { Container } from './styles';
import { ContentContainer } from './styles';

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <Container>
        <ContentContainer>{children}</ContentContainer>
      </Container>
    </>
  );
}
