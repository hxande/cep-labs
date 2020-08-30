const substituirZeros = (cep: string, index: number) => {
    let newCep = '';
    if (cep.substring(0, cep.length - index) !== '0') {
        newCep = cep.substr(0, cep.length - index) + '0'.repeat(index);
    }
    return newCep
}

export default substituirZeros;