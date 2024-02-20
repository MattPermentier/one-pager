import { Box, Stack, Typography } from '@mui/material';
import ConceptListItem from './ConceptListItem';
import collaborativeIcon from '../../Assets/collaborative.png';
import gamifiedIcon from '../../Assets/gamified.png';
import interactiveIcon from '../../Assets/interactive.png';

export default function Concepts() {
    return ( 
        <Box mx={30} mt={8}>
            <Typography variant='h5' fontWeight='bold' mb={2}>Concepten</Typography>
            
            <Stack direction='row' justifyContent='space-between' gap={3}>
                <ConceptListItem 
                    title='Interactieve verhaalervaring'
                    color='#E5F1F8'
                    icon={interactiveIcon}
                />

                <ConceptListItem 
                    title='Samenwerkende inhoudscreatie'
                    color='#F4F7EA'
                    icon={collaborativeIcon}
                />

                <ConceptListItem 
                    title='Gamified kijkervaring'
                    color='#F1E8F8'
                    icon={gamifiedIcon}
                />
            </Stack>
        </Box> 
    );
}

