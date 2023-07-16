
import React from "react";
import "../CSS/MovieCard.css";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';


function MovieCard({ name, img, year, rating, duration  }) {
  return (
        <Card w={275}  shadow="lg" padding="lg" radius="sm" style={{margin : "30px", }} withBorder>
      <Card.Section>
        <Image
          src={img}
          height={250}
          width={275}
          alt="Norway"
        />
      </Card.Section>

      <Group position="left" mt="md" mb="md">
        <Text style={{fontSize: "1.4rem"}} weight={725}>{name}</Text>
        <Badge color="green" variant="light">
          Imdb  {rating} /10  
        </Badge>
        <Badge color="green" variant="light" sty>
          Duration : {duration} min
        </Badge>
        <Badge color="green" variant="light">
          YEAR : {year}
        </Badge>
      </Group>


      <Text size="md" color="dimmed">
        
      </Text>

    </Card>
  );
}

export default MovieCard;
