const funcionarios = [
    {
    id: 11,
    nome: 'joao da silva',
    cpf: '111.222.333-44',
    categoria: 'tecnico'
    },
    {
    id: 22,
    nome: 'joana da silva',
    cpf: '111.222.333-55',
    categoria: 'tecnico'
    },
    {
    id: 23,
    nome: 'joana da Mata',
    cpf: '111.222.333-66',
    categoria: 'analista'
    },
    {
    id: 24,
    nome: 'joana da Mata',
    cpf: '23456789-00',
    categoria: 'gerente'
    },
    {
    id: 45,
    nome: 'joana da Mata',
    cpf: '111222333-44',
    categoria: 'gerente'
    },
    {
    id: 36,
    nome: 'joana da Mata',
    cpf: '654321987-23',
    categoria: 'gerente'
    },
    {
    id: 27,
    nome: 'joana da Mata',
    cpf: '098876654-99',
    categoria: 'gerente'
    }
    ];

    // Use o filter() para recuperar um array apenas com objetos da categoria 'gerente'
    const gerentes = funcionarios.filter((elem) => {
        return elem.categoria === 'gerente';
    });
    console.log('Use o filter() para recuperar um array apenas com objetos da categoria gerente');
    console.log(gerentes);
    console.log('\n');

    //Use o reduce() para retornar o objeto com o menor id
    const menorId = funcionarios.reduce((prev, elem) =>{

        let menor = prev;
        if(elem.id < menor)
            menor = elem;
        
        return menor;

    }, 1000000);
    console.log('Use o reduce() para retornar o objeto com o menor id');
    console.log(menorId);
    console.log('\n');

    //Use o map() para colocar todos os nomes no formato UpperCase.
    const upper = funcionarios.map((elem) =>{
        let data = {
            id: elem.id,
            nome: elem.nome.toUpperCase(),
            cpf: elem.cpf,
            categoria: elem.categoria.toUpperCase()
        }

        return data;
    })
    console.log('Use o map() para colocar todos os nomes no formato UpperCase');
    console.log(upper);
    

    
    