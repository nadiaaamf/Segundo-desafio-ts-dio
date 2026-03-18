import { Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { AppContext } from "../components/AppContext"
import Home from "./Home"

const ContaInfo = () => { 
  const { isLoggedIn } = useContext(AppContext)

  const [ user, setUser ] = useState<any>(null)

  useEffect(() => {
    const getData = async () => {
      const data = await api
      setUser(data)
    }
    getData()
  }, [])

  if (!isLoggedIn) {
    return <Home />
  }
    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            
            {user && (
              <>
              <Text>Nome: {user.name}
              </Text>
              <Text>Email: {user.email}</Text>
              </>
            )}
        </>
    )
}

export default ContaInfo