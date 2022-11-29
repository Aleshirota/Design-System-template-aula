import { ChakraProvider, Button, Flex } from '@chakra-ui/react'
import { Theme } from './Theme'
import Card1 from './Components/Card1'
import { CardUser } from './Components/CardUser'
import { useState } from "react";




function App(){

  const[usuarios, setUsuarios] = useState (CardUser)

return (

    <ChakraProvider Theme={Theme}>

<Button colorScheme='blue'>Button</Button>

<Flex gap={"16px"} wrap={"wrap"}>
      {usuarios.map((usuario) => {
        return <Card1 usuario={usuario} key={usuario.id}/>
      })}

      </Flex>
    </ChakraProvider>

  
)

}
export default App