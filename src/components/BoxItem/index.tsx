
import { Box, Badge, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface BoxItemProps {
  mainImage: string;
  title: string;
  description: string;
  priceFormatted: number;
  isNew?: boolean;
  id: number | string
}

export function BoxItem({ mainImage, title, description, priceFormatted, isNew, id }: BoxItemProps) {

  const formattedPrice = Number(priceFormatted).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return (
    <Link href={`vehicle?id=${id}`} passHref>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image height="15rem" width="30rem" src={mainImage} alt={description} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {isNew && (
              <Badge style={{ marginLeft: '-5px' }} borderRadius="full" px="2" colorScheme="teal">
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

          <Box style={{ marginTop: '3px' }}>
            R$ {formattedPrice}
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
        </Box>
      </Box>
    </Link>
  )

}