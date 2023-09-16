import { Box, HStack, Heading, Image, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import ChatBody from '../ChatScreen/ChatBody';

const Home = () => {
  return (
    <VStack h={ "100vh" } p={ [ '8', '12' ] } justifyContent={ 'space-between' }>
      <Heading textAlign={ 'center' } mb={ '3' }>ASK MINOT</Heading>
      <Box h={ '90%' } overflow={ 'auto' } w={ 'full' } alignSelf={ 'center' }>

      </Box>
      <ChatBody />
      <Input />

    </VStack>
  );
}

export default Home;