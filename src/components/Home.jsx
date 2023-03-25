import {
  Box,
  Container,
  Heading,
  Image,
  Img,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import XYZ from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingoptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '2xl',
};

const Home = () => {
  return (
    <Box>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w={'full'} h={'100vh'}>
          <Image src={XYZ} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingoptions}
          >
            WATCH THE FUTURE...
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Img src={img2} />
          <Heading
            bgColor={'white'}
            color={'blackAlpha.900'}
            {...headingoptions}
          >
            FUTURE IS GAMING...
          </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
          <Img src={img3} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...headingoptions}
          >
            Gaming On Console
          </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
          <Img src={img4} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...headingoptions}
          >
            Adapt Evolve Overcome
          </Heading>
        </Box>
      </Carousel>
      <Container minH={'100vh'} maxW={'container.xl'}>
        <Heading
          textTransform={'upperCase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p="7"
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam soluta
            harum aliquam aperiam, sunt at et sit ipsa molestias rerum
            asperiores nesciunt facilis quos repellendus omnis accusantium vero!
            Aperiam animi excepturi, praesentium neque non delectus sed
            necessitatibus ipsam ea, fugiat a obcaecati amet reprehenderit
            tempore doloremque sunt saepe officiis? Pariatur praesentium
            doloribus nemo fugit quam ratione dolorum debitis, totam natus error
            voluptates cumque sint consequatur eaque consequuntur distinctio
            consectetur animi quia sit odit tempora in possimus reiciendis
            temporibus. Quos dolores reprehenderit ex, id tempora culpa
            asperiores laudantium nesciunt! Est adipisci cupiditate vitae.
            Perspiciatis eos quisquam ducimus adipisci earum quasi quis.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
export default Home;
