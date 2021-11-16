import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Uma Cidade Por Dia">
    <Container>
      <Title>
        Uma Cidade Por Dia <Badge>2020-</Badge>
      </Title>
      <P>
        Uma Cidade Por Dia - Application for show the impact of the pandemic.
      </P>
      <P>
        Esse projeto foi desenvolvido pela Neopop Imaginária e o ICON
        (Laboratório de Interatividade, Computação e Novas Interfaces) da
        Universidade Federal da Bahia. A partir de dados oficiais coletados
        diariamente e uma programação dinâmica de informações, você vai observar
        todo dia que uma cidade cada vez maior foi extinta por esse número
        absurdo de mortos. Um número que representa muito a responsabilidade que
        nós, independente de crença, raça, gênero ou opinião política, temos
        sobre a nossa comunidade.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://umacidadepordia.com.br/">
            https://umacidadepordia.com.br/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, React</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/firstUmaCidadePorDia.png"
        alt="Uma Cidade Por Dia"
      />
      <WorkImage
        src="/images/works/SecondUmaCidadePorDia.png"
        alt="Uma Cidade Por Dia"
      />
    </Container>
  </Layout>
)

export default Work
