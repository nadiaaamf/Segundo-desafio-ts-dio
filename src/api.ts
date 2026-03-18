const conta = {
    email: 'nadia@dio.bank',
    password: '123456',
    name: 'Nadia Marcelino',
    balance: 80000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})