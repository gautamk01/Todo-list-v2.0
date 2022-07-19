import {
    VStack,
    StackDivider,
    HStack,
    Text,
    Image,
    Box,
    Skeleton,
} from '@chakra-ui/react';
import ClearTasks from './ClearTask';
import DeleteTask from './DeleteTask';
import { useRealtime } from 'react-supabase';

export default function TaskList() {
    const [result, reexecute] = useRealtime('Todo');
    const { data: task1, error, fetching } = result;
    if (fetching) {
        return (
            <Skeleton
                width={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
                height="300px"
                rounded="md"

            />
        );
    }
    if (!task1 || !task1.length) {
        return (
            <Box align="center">
                <Image src={"https://raw.githubusercontent.com/LogicismX/supabase-todo/bdbd796d7767bd41ed4511f40523fbebf604b358/src/images/empty.svg"} mt="30px" maxW="95%" />
            </Box>
        );
    }

    return (
        <>
            <VStack
                divider={<StackDivider />}
                borderColor="gray.100"
                borderWidth="2px"
                p="5"
                borderRadius="lg"
                w="100%"
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
                alignItems="stretch"
            >
                {task1.map(task => (
                    <HStack key={task.id}>
                        <Text w="100%" p="8px" borderRadius="lg">
                            {task.Text}
                        </Text>
                        <DeleteTask id={task.id} />
                    </HStack>
                ))}
            </VStack>

            <ClearTasks />
        </>
    );
}