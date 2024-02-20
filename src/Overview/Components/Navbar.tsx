import { Link, Stack, Typography } from '@mui/material';
import npoIcon from '../Assets/Npologo.png';

export default function Navbar() {
    return (
        <> 
            <Stack mx={30} mt={3} direction='row' alignItems='center' justifyContent='space-between'>
                <Stack direction='row' alignItems='center' gap={2}>
                    <img src={npoIcon} style={{ maxWidth: '5%'}} />
                    <Typography variant='h5' fontWeight='bold'>Young Innovative Thinkers</Typography>
                </Stack>

                <Stack gap={2} direction='row'>
                    <Link sx={{ color: '#111', textDecoration: 'none' }}>
                        <Typography variant='h6'>Team</Typography>
                    </Link>

                    <Link sx={{ color: '#111', textDecoration: 'none' }}>
                        <Typography variant='h6'>Concepten</Typography>
                    </Link>
                </Stack>
            </Stack>
        </>
    );
}

