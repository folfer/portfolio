import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title=" Find Your Book">
    <Container>
      <Title>
        Find Your Book <Badge>2021-</Badge>
      </Title>
      <P>
        Find Your Book is an App that helps with the search for your books from
        interest.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, TypeScrit, ContextApi, Styled Components, JavaScript Cookie,
            React Icons
          </span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>
      <WorkImage src="/images/works/firstfindyourbook.png" alt="FindYourBook" />
      <WorkImage
        src="/images/works/secondfindyourbook.png"
        alt="FindYourBook"
      />
      <WorkImage src="/images/works/thirdfindyourbook.png" alt="FindYourBook" />
      +
    </Container>
  </Layout>
)

export default Work
