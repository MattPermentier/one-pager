import { Card, CardContent, Typography } from '@mui/material';

interface IProps {
    title: string;
    color: string;
    icon: string;
}

export default function ConceptListItem(props: IProps) {
    const { title, color, icon} = props;

    return (
        <Card sx={{ width: '100%', borderRadius: 3 }}>
            <CardContent sx={{ bgcolor: color, height: 65 }}>
                <Typography variant='h5' fontWeight='bold' mt={.5}>{title}</Typography>
            </CardContent>

            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#20252B', height: 250 }}>
                <img src={icon} style={{ width: 200}}/>
            </CardContent>
        </Card>
    );
}

