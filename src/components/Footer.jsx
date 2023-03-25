import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color="white">
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} p={'2'}>
          <Heading size={'sm'} textTransform={'uppercase'} textAlign={'center'}>
            Subscribe For More Updates !!
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here.."
              borderRadius={'none'}
              outline="none"
              border={'none'}
              focusBorderColor="none "
            />
            <Button
              p="0"
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '2px solid white']}
          borderRight={['none', '2px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            CINEMATEQUE
          </Heading>
          <Text>© All rights reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'sm'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'blank'} href="https://github.com/THEGAURAVPANDEY">
              Github
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'purple'}>
            <a
              target={'blank'}
              href="https://www.linkedin.com/in/gauravpandey11/"
            >
              LinkedIn
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'blank'} href="https://vercel.com/dashboard">
              Vercel
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default footer;
