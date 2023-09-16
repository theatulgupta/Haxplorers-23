import React from 'react'
import { VStack, Text, Box } from '@chakra-ui/react'

const ChatBody = () => {
    return (
        <VStack w={ [ '100%', '80%' ] } spacing={ '4' }>

            {/* {/* Human Message */ }
            <Box
                border={ '1px' } borderRadius={ '5px' }
                padding={ '2' } wordBreak={ 'break-word' }
                alignSelf={ 'flex-end' }
                maxW={ '80%' }
            >
                <pre style={ { whiteSpace: 'pre' } }>
                    <Text>Hii Minot, Can you help me?</Text>
                </pre>
            </Box>

            {/* Human Message */ }
            <Box
                border={ '1px' } borderRadius={ '5px' }
                padding={ '2' } wordBreak={ 'break-word' }
                alignSelf={ 'flex-end' }
                marginRight={ 'auto' }
                maxW={ '80%' }
            >
                <pre style={ { whiteSpace: 'pre' } }>
                    <Text >Hey! Human, I can help you in anything.</Text>
                </pre>
            </Box>
        </VStack>
    )
}

export default ChatBody