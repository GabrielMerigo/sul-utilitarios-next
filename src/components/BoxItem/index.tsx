
import { Box, Badge, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface BoxItemProps {
  img: string;
  title: string;
  description: string;
  formattedPrice: number;
  isNew?: boolean;
  id: number | string
}

export function BoxItem({ img, title, description, formattedPrice, isNew, id }: BoxItemProps) {
  const path = `/vehicles/${id}`

  return (
    <Link href={path} passHref>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image height="15rem" width="30rem" src={img} alt={description} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {isNew && (
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Novo
              </Badge>
            )}

            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {title}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {description}
          </Box>
          <Box>
            {formattedPrice}
          </Box>
        </Box>
      </Box>
    </Link>
  )

}