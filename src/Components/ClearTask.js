import { Flex, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react';

export default function ClearTasks() {
    return (
        <Flex>
            <Button
                colorScheme="gray"
                px="8"
                h="45"
                color="gray.500"
                mt="10"
                loadingText="Clearing tasks"
            >
                Clear Tasks
            </Button>
        </Flex>
    );
}