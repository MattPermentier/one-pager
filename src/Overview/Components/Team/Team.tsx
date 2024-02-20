import { Box, Stack, Typography, styled } from '@mui/material';

const TeamListItem = styled('div')({
    border: '1px solid black',
    borderWidth: 2,
    width: 200,
    height: 200
});

export default function Team() {
    return ( 
        <Box mx={30} mt={8} >
            <Typography variant='h5' fontWeight='bold' mb={2}>Team</Typography>

            <Stack direction='row' width='100%' justifyContent='space-between' gap={1}>
                <TeamListItem>
                    <Typography>Thomas Bezemer</Typography>
                </TeamListItem>

                <TeamListItem>
                    <Typography>Christel Carbajal Torres</Typography>
                </TeamListItem>

                <TeamListItem>
                    <Typography>Thomas Martini</Typography>
                </TeamListItem>

                <TeamListItem>
                    <Typography>Bilal Hussain</Typography>
                </TeamListItem>

                <TeamListItem>
                    <Typography>Matt Permentier</Typography>
                </TeamListItem>
            </Stack>
        </Box>
    );
}

