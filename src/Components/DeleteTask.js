import { IconButton, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { supabase } from '../supabaseClient';

export default function DeleteTask(props) {

    const [loading, setLoading] = useState(false);
    const toast = useToast();




    const handleDelete = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('Todo')
            .delete()
            .eq('id', props.id);
        setLoading(false);


        toast({
            title: error || 'Task Deleted',
            position: 'top',
            status: error ? 'error' : 'success',
            duration: 2000,
            isClosable: true,
        })
        window.location.reload();
    }
    return (
        <IconButton
            isRound="true"
            icon={<FiTrash2 />}
            onClick={handleDelete}
            isLoading={loading}
        />
    );
}