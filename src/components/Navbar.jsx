import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>

  <Flex backgroundColor='#1B2021' color = 'white'>
    <Box p='4'
    border='1px' borderColor='beige'
    borderRadius = "5px  ">
      Mi Ecommerce
    </Box>
    <Spacer />

    <Menu>
  <MenuButton p= {3} border='1px' borderColor='beige'
    borderRadius = "5px  ">
    Productos
  </MenuButton>
  <MenuList backgroundColor='#1B2021'>
    <MenuItem color= 'black'>Gorros</MenuItem>
    <MenuItem color= 'black'>Buzos</MenuItem>
    <MenuItem color= 'black'>Chombas</MenuItem>
    <MenuItem color= 'black'>Tablas</MenuItem>
    <MenuItem color= 'black'>Zapatillas</MenuItem>
  </MenuList>
</Menu>

    <Box p='5' border='1px' borderColor='beige'
    borderRadius = "5px  ">
      <CartWidget />
    </Box>
  </Flex>
    
    </div>
  )
}

export default Navbar