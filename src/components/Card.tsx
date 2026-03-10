import { Box, Center, Input } from "@chakra-ui/react"
import { login } from "../services/login"
import { ButtonComponent } from "./Button/ButtonComponent"

export const Card = () => {
  return(
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
      <Center>
        <h1>Faça o login</h1>
        </Center>

        <Input placeholder="email" marginTop="10px"/>
        <Input placeholder="password" marginTop="10px"/>

        <Center>
          <ButtonComponent onClick={login} />
        </Center>
        </Box>
      
  )
}