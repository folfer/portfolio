import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        marginTop={10}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a Front-end developer based in Brasil!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Victor Calazans
          </Heading>
          <p>Digital Folfer ( Computer Artist / Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/victor.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I'm Victor Calazans, I'm Bachelor of Science and Technology and I'm a
          programmer. <br /> I have experience in agile teamwork methodologies,
          code versioning with GIT, in addition to having already produced
          projects in the areas of artistic computing, electrical engineering
          and development of music library systems. <br />
          Currently I study Javascript, Typescript, ES6, NodeJS, ReactJS and
          React Native, prototyping with user interface (UI Design) with Figma
          tool, theories and concepts about the Scrum Master and Product Owner
          agile development area.{' '}
          <NextLink href="/works/umacidadepordia">
            <Link>Uma Cidade Por Dia</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Tech Skills
        </Heading>
        <BioSection>
          <BioYear>2018 - 2021</BioYear>
          React JS.
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2021</BioYear>
          React Native
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2021</BioYear>
          HTML
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2021</BioYear>
          CSS
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2021</BioYear>
          Javascript
        </BioSection>
        <BioSection>
          <BioYear>2020 - 2021</BioYear>
          DJANGO
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Certificates
        </Heading>
        <BioSection>
          <BioYear>2021</BioYear>
          Certificação Scrum Product Owner
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Scrum - Metodologia Ágil
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2021</BioYear>
          React + Redux Fundamentos
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2021</BioYear>
          Web Javascript ES6
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2021</BioYear>
          Testing React with Jest and Testing Library
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2019 - 2023</BioYear>
          Bacharelando em Ciências e Tecnologia pela UFBA.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Pesquisador técnico - desenvolvedor de software - UFBA
        </BioSection>
        <BioSection>
          <BioYear>2019 - 2021</BioYear>
          Desenvolvedor de software - UFBA
        </BioSection>
        <BioSection>
          <BioYear>2020 - 2021</BioYear>
          Desenvolvedor de software - Lactec
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Analista de sistema Pleno - NVGO
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Analista de sistema Pleno - Solvum
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Analista de sistema Jr - Nova
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          <Link
            href="https://open.spotify.com/playlist/1q7t9Ro3qEY9Vkv7dsailh"
            target="_blank"
          >
            Music
          </Link>{' '}
          &{' '}
          <Link href="https://www.instagram.com/calazanhas/" target="_blank">
            Instagram
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/folfer" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @folfer
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/calazanhas" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @calazanhas
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.gg/GA2hdD6" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Discord
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
