import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'cyan'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Bazz Video Hub</DrawerHeader>
            <DrawerBody>
              <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'cyan'}>
                  <Link to={'/'}>Home</Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'cyan'}>
                  <Link to={'/videos'}>Videos</Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'cyan'}>
                  <Link to={'/videos?category=free'}>Free Videos</Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'cyan'}>
                  <Link to={'/upload'}>Upload Video</Link>
                </Button>
              </VStack>

              <HStack pos={'absolute'} left={'6'} bottom={'10'}>
                <Button onClick={onClose} colorScheme={'cyan'}>
                    <Link to={'/login'}>Log In</Link>
                </Button>

                <Button onClick={onClose} colorScheme={'cyan'} variant={'outline'}>
                    <Link to={'/signup'}>Sign Up</Link>
                </Button>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default Header;
