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
                    title='Concept 1'
                    color='#E5F1F8'
                    icon={interactiveIcon}
                />

                <ConceptListItem 
                    title='Concept 2'
                    color='#F4F7EA'
                    icon={collaborativeIcon}
                />

                <ConceptListItem 
                    title='Concept 3'
                    color='#F1E8F8'
                    icon={gamifiedIcon}
                />
            </Stack>

            <Box>
                <Typography variant='h5' fontWeight='bold' mt={5}>Concept 1</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio laudantium, nihil maiores veniam temporibus praesentium voluptas dolor eaque asperiores exercitationem voluptatum dolorum blanditiis ad id! Explicabo eius quisquam culpa.
                    Excepturi rem, animi sit esse enim corrupti eum blanditiis omnis incidunt iure aliquid beatae soluta, minus in voluptas. Mollitia praesentium omnis adipisci fugiat vel ad possimus molestiae unde velit id.
                    Qui ratione nihil quia facilis similique architecto esse optio dolores harum recusandae unde perferendis obcaecati et excepturi ex voluptatum quos repellendus eos fugit soluta voluptas asperiores, sequi fugiat perspiciatis! Beatae.
                    Voluptatem at, quas delectus eveniet cumque, quos recusandae dolores quod ullam excepturi unde nesciunt quasi quam mollitia cupiditate, porro vitae alias. Sunt obcaecati modi in magnam placeat exercitationem vero reprehenderit.
                    Quidem nam aliquam totam unde dolorem! Vel, aliquid laborum excepturi nesciunt omnis quod cumque provident accusamus, quis qui minima perferendis ipsa eligendi corrupti consequatur similique necessitatibus praesentium vero in numquam.
                </Typography>
            </Box>

            <Box>
                <Typography variant='h5' fontWeight='bold' mt={5}>Concept 2</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio laudantium, nihil maiores veniam temporibus praesentium voluptas dolor eaque asperiores exercitationem voluptatum dolorum blanditiis ad id! Explicabo eius quisquam culpa.
                    Excepturi rem, animi sit esse enim corrupti eum blanditiis omnis incidunt iure aliquid beatae soluta, minus in voluptas. Mollitia praesentium omnis adipisci fugiat vel ad possimus molestiae unde velit id.
                    Qui ratione nihil quia facilis similique architecto esse optio dolores harum recusandae unde perferendis obcaecati et excepturi ex voluptatum quos repellendus eos fugit soluta voluptas asperiores, sequi fugiat perspiciatis! Beatae.
                    Voluptatem at, quas delectus eveniet cumque, quos recusandae dolores quod ullam excepturi unde nesciunt quasi quam mollitia cupiditate, porro vitae alias. Sunt obcaecati modi in magnam placeat exercitationem vero reprehenderit.
                    Quidem nam aliquam totam unde dolorem! Vel, aliquid laborum excepturi nesciunt omnis quod cumque provident accusamus, quis qui minima perferendis ipsa eligendi corrupti consequatur similique necessitatibus praesentium vero in numquam.
                </Typography>
            </Box>

            <Box>
                <Typography variant='h5' fontWeight='bold' mt={5}>Concept 3</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio laudantium, nihil maiores veniam temporibus praesentium voluptas dolor eaque asperiores exercitationem voluptatum dolorum blanditiis ad id! Explicabo eius quisquam culpa.
                    Excepturi rem, animi sit esse enim corrupti eum blanditiis omnis incidunt iure aliquid beatae soluta, minus in voluptas. Mollitia praesentium omnis adipisci fugiat vel ad possimus molestiae unde velit id.
                    Qui ratione nihil quia facilis similique architecto esse optio dolores harum recusandae unde perferendis obcaecati et excepturi ex voluptatum quos repellendus eos fugit soluta voluptas asperiores, sequi fugiat perspiciatis! Beatae.
                    Voluptatem at, quas delectus eveniet cumque, quos recusandae dolores quod ullam excepturi unde nesciunt quasi quam mollitia cupiditate, porro vitae alias. Sunt obcaecati modi in magnam placeat exercitationem vero reprehenderit.
                    Quidem nam aliquam totam unde dolorem! Vel, aliquid laborum excepturi nesciunt omnis quod cumque provident accusamus, quis qui minima perferendis ipsa eligendi corrupti consequatur similique necessitatibus praesentium vero in numquam.
                </Typography>
            </Box>

        </Box> 
    );
}

