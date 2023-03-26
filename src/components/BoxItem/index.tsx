import { Box, Badge, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { FirebaseVehicleProps } from '../../types/VehiclesTypes';
import { verifyPrice } from '../../utils/methods';

export function BoxItem({ ...vehicle }: FirebaseVehicleProps) {
  const formattedPrice = Number(vehicle.vehiclePrice).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Link
      href={`${vehicle.vehicleType === 'Carro' ? 'vehicle' : 'truck'}?id=${vehicle.vehicleId}`}
      passHref
    >
      <Box width={295} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          height="15rem"
          width="30rem"
          src={vehicle.mainImageUrl.url}
          alt={vehicle.vehicleName}
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {vehicle.isNew && (
              <Badge
                style={{ marginLeft: '-5px', marginRight: '5px' }}
                borderRadius="full"
                px="2"
                colorScheme="teal"
              >
                Novo
              </Badge>
            )}

            <Box
              fontWeight="semibold"
              as="h4"
              letterSpacing="wide"
              textTransform="uppercase"
              ml="2"
              style={{ fontSize: '1rem', margin: 0 }}
            >
              {vehicle.vehicleName}
            </Box>
          </Box>

          <Box style={{ marginTop: '3px' }}>{verifyPrice(formattedPrice)}</Box>

          <Box color="gray.500" mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {vehicle.description}
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
