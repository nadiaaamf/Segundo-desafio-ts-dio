import { login } from "./login"

describe('login', () => {

    it('Deve exibir um alert com boas vindas caso o email e senha sejam válidos', async() => {
        const response = await login('nadia@dio.bank', '123456')
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com', '123456')
        expect(response).toBeFalsy()
    })

    it('Deve retornar false com senha inválida', async () => {
    const response = await login('nadia@dio.bank', '000000')
    expect(response).toBeFalsy()
  })

})