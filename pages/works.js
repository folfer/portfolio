import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbOneCitydrop from '../public/images/works/firstUmaCidadePorDia.png'
import thumbFindYourbook from '../public/images/works/firstFindYourBook.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="umacidadepordia"
            title="Uma Cidade Por Dia"
            thumbnail={thumbOneCitydrop}
          >
            Uma Cidade Por Dia - Application for show the impact of the
            pandemic.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="findyourbook"
            title="FindYourBook"
            thumbnail={thumbFindYourbook}
          >
            Find Your Book is an App that helps with the search for your books
            from interest.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
