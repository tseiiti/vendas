db.venda_representante.drop()
db.venda_representante.insertMany([
  {
    "id": 2,
    "nome": "Kamilly Martins",
    "cpf": "216.375.890-77",
    "nivel": "pleno",
    "user_id": 2,
    "clientes": [
      {
        "id": 1,
        "nome": "DA ROSA S/A",
        "cnpj": "40.632.795/0001-75",
        "contato": "Laura Nunes",
        "telefone": "+55 82 9 1873-0866",
        "email": "brunogomes@example.com",
        "endereco": {
          "logradouro": "Vereda de Rodrigues, 441",
          "bairro": "Havaí",
          "cidade": "Farias de das Neves",
          "estado": "DF",
          "cep": "31991-577"
        }
      },
      {
        "id": 2,
        "nome": "ALMEIDA LTDA.",
        "cnpj": "53.042.679/0001-48",
        "contato": "Alexandre Nascimento",
        "telefone": "+55 27 95295-7732",
        "email": "luiz-fernando32@example.net",
        "endereco": {
          "logradouro": "Sítio de da Costa, 91",
          "bairro": "Coqueiros",
          "cidade": "Cunha das Flores",
          "estado": "MT",
          "cep": "07021068"
        }
      },
      {
        "id": 3,
        "nome": "CASTRO S.A.",
        "cnpj": "21.853.407/0001-31",
        "contato": "Catarina da Paz",
        "telefone": "+55 (21) 94010 9963",
        "email": "ipinto@example.org",
        "endereco": {
          "logradouro": "Rodovia Guilherme da Rocha, 76",
          "bairro": "Bernadete",
          "cidade": "Novaes",
          "estado": "AP",
          "cep": "42313-884"
        }
      }
    ]
  },
  {
    "id": 3,
    "nome": "Isabelly Duarte",
    "cpf": "419.578.326-73",
    "nivel": "pleno",
    "user_id": 3,
    "clientes": [
      {
        "id": 1,
        "nome": "PINTO S.A.",
        "cnpj": "20.391.647/0001-07",
        "contato": "Larissa Pires",
        "telefone": "+55 (99) 9 6650-7350",
        "email": "mcardoso@example.org",
        "endereco": {
          "logradouro": "Conjunto Viana",
          "bairro": "Aparecida",
          "cidade": "Porto de Vieira",
          "estado": "PI",
          "cep": "90176-453"
        }
      }
    ]
  },
  {
    "id": 4,
    "nome": "Luiz Otávio da Paz",
    "cpf": "130.524.786-80",
    "nivel": "pleno",
    "user_id": 4,
    "clientes": [
      {
        "id": 1,
        "nome": "BARROS DAS NEVES LTDA. - ME",
        "cnpj": "60.748.213/0001-28",
        "contato": "Enrico Araújo",
        "telefone": "+55 (18) 93920 3156",
        "email": "ana-carolinada-cunha@example.org",
        "endereco": {
          "logradouro": "Favela de Alves, 40",
          "bairro": "Universitário",
          "cidade": "Barros",
          "estado": "AM",
          "cep": "06076000"
        }
      },
      {
        "id": 2,
        "nome": "DA ROCHA S/A",
        "cnpj": "52.813.469/0001-43",
        "contato": "Bruno da Rocha",
        "telefone": "+55 38 99321 4747",
        "email": "teixeiraesther@example.com",
        "endereco": {
          "logradouro": "Morro de Almeida, 5",
          "bairro": "Nova Cachoeirinha",
          "cidade": "Carvalho Alegre",
          "estado": "RR",
          "cep": "15239-007"
        }
      }
    ]
  },
  {
    "id": 5,
    "nome": "Ana Lívia Vieira",
    "cpf": "284.319.567-55",
    "nivel": "pleno",
    "user_id": 5,
    "clientes": [
      {
        "id": 1,
        "nome": "DA MATA S.A.",
        "cnpj": "97.302.861/0001-66",
        "contato": "Luiza Novaes",
        "telefone": "+55 (85) 9 0537-5046",
        "email": "da-cruzbreno@example.org",
        "endereco": {
          "logradouro": "Alameda de Monteiro, 82",
          "bairro": "Independência",
          "cidade": "da Mata",
          "estado": "DF",
          "cep": "48416-834"
        }
      },
      {
        "id": 2,
        "nome": "FREITAS S.A.",
        "cnpj": "96.450.871/0001-86",
        "contato": "Emilly Ramos",
        "telefone": "+55 (094) 95634-6204",
        "email": "ana-julia33@example.net",
        "endereco": {
          "logradouro": "Trecho Fernandes, 5",
          "bairro": "Olaria",
          "cidade": "Cardoso de Minas",
          "estado": "PA",
          "cep": "14626122"
        }
      },
      {
        "id": 3,
        "nome": "CALDEIRA E FILHOS",
        "cnpj": "62.834.079/0001-03",
        "contato": "Maria Fernanda Barros",
        "telefone": "+55 89 94642-2530",
        "email": "arthurlopes@example.com",
        "endereco": {
          "logradouro": "Praia da Rocha, 85",
          "bairro": "Floresta",
          "cidade": "Azevedo das Flores",
          "estado": "BA",
          "cep": "37157-790"
        }
      },
      {
        "id": 4,
        "nome": "DA ROCHA ROCHA - ME LTDA.",
        "cnpj": "10.486.597/0001-80",
        "contato": "Bruno da Cunha",
        "telefone": "+55 (099) 91855-8693",
        "email": "maria-claramoura@example.net",
        "endereco": {
          "logradouro": "Setor de da Cruz, 51",
          "bairro": "Chácara Leonina",
          "cidade": "Gomes",
          "estado": "PR",
          "cep": "60775308"
        }
      },
      {
        "id": 5,
        "nome": "LOPES - ME",
        "cnpj": "78.463.925/0001-66",
        "contato": "Sophie Gomes",
        "telefone": "+55 31 97597-2167",
        "email": "mrodrigues@example.com",
        "endereco": {
          "logradouro": "Fazenda Maria Sophia Viana, 1",
          "bairro": "São Damião",
          "cidade": "Pinto",
          "estado": "PR",
          "cep": "13820-505"
        }
      }
    ]
  },
  {
    "id": 6,
    "nome": "Esther Ferreira",
    "cpf": "695.182.340-51",
    "nivel": "pleno",
    "user_id": 6,
    "clientes": [
      {
        "id": 1,
        "nome": "CARVALHO E FILHOS",
        "cnpj": "08.317.269/0001-08",
        "contato": "Maria Alice Souza",
        "telefone": "+55 (04) 9 4160-1196",
        "email": "leandrogoncalves@example.org",
        "endereco": {
          "logradouro": "Loteamento Alana Mendes, 72",
          "bairro": "Dom Joaquim",
          "cidade": "Campos Verde",
          "estado": "AL",
          "cep": "78885974"
        }
      },
      {
        "id": 2,
        "nome": "CARVALHO S.A.",
        "cnpj": "79.418.530/0001-04",
        "contato": "Thiago Ramos",
        "telefone": "+55 (02) 98374-0921",
        "email": "wpires@example.org",
        "endereco": {
          "logradouro": "Fazenda Guilherme Rodrigues, 50",
          "bairro": "Conjunto Novo Dom Bosco",
          "cidade": "Freitas",
          "estado": "AC",
          "cep": "76216-894"
        }
      },
      {
        "id": 3,
        "nome": "ARAGÃO DA MOTA - EI E FILHOS",
        "cnpj": "80.923.546/0001-53",
        "contato": "Dra. Milena Pinto",
        "telefone": "+55 38 9 9932-1065",
        "email": "juan05@example.net",
        "endereco": {
          "logradouro": "Trecho Correia, 82",
          "bairro": "São Marcos",
          "cidade": "Carvalho",
          "estado": "PI",
          "cep": "15506-750"
        }
      },
      {
        "id": 4,
        "nome": "PEIXOTO - EI",
        "cnpj": "71.956.203/0001-02",
        "contato": "Theo da Paz",
        "telefone": "+55 (78) 91377 0191",
        "email": "da-rochaana-julia@example.org",
        "endereco": {
          "logradouro": "Estação de Nunes, 918",
          "bairro": "Vila Aeroporto",
          "cidade": "Freitas",
          "estado": "SC",
          "cep": "08923-590"
        }
      },
      {
        "id": 5,
        "nome": "CARVALHO - ME",
        "cnpj": "15.284.630/0001-02",
        "contato": "Bárbara Pereira",
        "telefone": "+55 (14) 94994 6086",
        "email": "nicolassilva@example.org",
        "endereco": {
          "logradouro": "Rua de Barros, 2",
          "bairro": "Vila Paris",
          "cidade": "Freitas de da Costa",
          "estado": "PI",
          "cep": "26785630"
        }
      }
    ]
  },
  {
    "id": 7,
    "nome": "Catarina Pires",
    "cpf": "598.610.732-21",
    "nivel": "pleno",
    "user_id": 7,
    "clientes": [
      {
        "id": 1,
        "nome": "PEIXOTO NUNES LTDA. S/A",
        "cnpj": "28.046.931/0001-40",
        "contato": "João Vitor Castro",
        "telefone": "+55 (068) 99693 4786",
        "email": "ana-clara69@example.com",
        "endereco": {
          "logradouro": "Residencial Moura, 936",
          "bairro": "Ipe",
          "cidade": "Lima",
          "estado": "DF",
          "cep": "86671-287"
        }
      },
      {
        "id": 2,
        "nome": "RODRIGUES - ME",
        "cnpj": "76.283.014/0001-21",
        "contato": "Marcos Vinicius Oliveira",
        "telefone": "+55 (34) 9 4742 5093",
        "email": "rda-conceicao@example.net",
        "endereco": {
          "logradouro": "Recanto de Ferreira, 252",
          "bairro": "Vila Da Luz",
          "cidade": "Rodrigues",
          "estado": "PB",
          "cep": "15499049"
        }
      },
      {
        "id": 3,
        "nome": "FERREIRA E FILHOS",
        "cnpj": "09.582.631/0001-30",
        "contato": "Helena Nunes",
        "telefone": "+55 (67) 93228 5972",
        "email": "emanuel62@example.com",
        "endereco": {
          "logradouro": "Vila de Costa, 39",
          "bairro": "Cdi Jatoba",
          "cidade": "Porto",
          "estado": "RO",
          "cep": "46634535"
        }
      },
      {
        "id": 4,
        "nome": "DUARTE S/A E FILHOS",
        "cnpj": "91.826.705/0001-18",
        "contato": "Vitor Barbosa",
        "telefone": "+55 (54) 9 9672 1326",
        "email": "pietra22@example.com",
        "endereco": {
          "logradouro": "Estação de Porto, 57",
          "bairro": "Mariano De Abreu",
          "cidade": "da Paz",
          "estado": "PI",
          "cep": "63887316"
        }
      }
    ]
  },
  {
    "id": 8,
    "nome": "Breno Souza",
    "cpf": "798.043.621-04",
    "nivel": "pleno",
    "user_id": 8,
    "clientes": [
      {
        "id": 1,
        "nome": "CARDOSO - ME",
        "cnpj": "89.263.147/0001-88",
        "contato": "Gustavo Henrique Barros",
        "telefone": "+55 (32) 9 9533-2406",
        "email": "heitorcardoso@example.com",
        "endereco": {
          "logradouro": "Rua de da Mota, 5",
          "bairro": "Nossa Senhora Aparecida",
          "cidade": "Nascimento",
          "estado": "PE",
          "cep": "16594246"
        }
      },
      {
        "id": 2,
        "nome": "MOREIRA - ME - EI",
        "cnpj": "17.950.628/0001-50",
        "contato": "Evelyn Silveira",
        "telefone": "+55 28 9 4495-6137",
        "email": "luiz-otaviodias@example.com",
        "endereco": {
          "logradouro": "Lago Camila Porto, 59",
          "bairro": "Acaba Mundo",
          "cidade": "Souza de Mendes",
          "estado": "MG",
          "cep": "28622524"
        }
      },
      {
        "id": 3,
        "nome": "AZEVEDO E FILHOS",
        "cnpj": "83.706.912/0001-00",
        "contato": "Antônio Sales",
        "telefone": "+55 05 94524-8101",
        "email": "caua82@example.com",
        "endereco": {
          "logradouro": "Colônia Freitas, 2",
          "bairro": "Distrito Industrial Do Jatoba",
          "cidade": "Lopes do Campo",
          "estado": "BA",
          "cep": "81594799"
        }
      }
    ]
  },
  {
    "id": 9,
    "nome": "Bruna Santos",
    "cpf": "395.287.106-03",
    "nivel": "pleno",
    "user_id": 9,
    "clientes": [
      {
        "id": 1,
        "nome": "FERNANDES LTDA.",
        "cnpj": "41.726.308/0001-04",
        "contato": "João Pedro Carvalho",
        "telefone": "+55 (39) 98424 9140",
        "email": "carvalhothomas@example.org",
        "endereco": {
          "logradouro": "Pátio Teixeira, 303",
          "bairro": "Alto Barroca",
          "cidade": "Caldeira",
          "estado": "AL",
          "cep": "05366-847"
        }
      },
      {
        "id": 2,
        "nome": "BARBOSA LTDA. LTDA.",
        "cnpj": "38.401.529/0001-90",
        "contato": "João Gabriel Gonçalves",
        "telefone": "+55 (31) 91911 5719",
        "email": "daniel02@example.net",
        "endereco": {
          "logradouro": "Área Heitor Mendes, 436",
          "bairro": "Vila Nova",
          "cidade": "Teixeira",
          "estado": "SE",
          "cep": "44428-004"
        }
      },
      {
        "id": 3,
        "nome": "DA MATA S/A",
        "cnpj": "17.243.805/0001-69",
        "contato": "Yasmin das Neves",
        "telefone": "+55 (69) 9 9219-0369",
        "email": "saragao@example.org",
        "endereco": {
          "logradouro": "Largo Ana Clara Moraes, 71",
          "bairro": "São José",
          "cidade": "Nogueira",
          "estado": "AP",
          "cep": "35828-417"
        }
      }
    ]
  },
  {
    "id": 10,
    "nome": "João Vitor Ferreira",
    "cpf": "254.901.678-58",
    "nivel": "pleno",
    "user_id": 10,
    "clientes": [
      {
        "id": 1,
        "nome": "TEIXEIRA FOGAÇA S/A S.A.",
        "cnpj": "54.069.287/0001-35",
        "contato": "João Pedro da Rosa",
        "telefone": "+55 (087) 95605 0191",
        "email": "emanuelcavalcanti@example.com",
        "endereco": {
          "logradouro": "Passarela Carvalho, 8",
          "bairro": "Santa Sofia",
          "cidade": "Barbosa",
          "estado": "PE",
          "cep": "38534-566"
        }
      },
      {
        "id": 2,
        "nome": "DA MATA S.A. S/A",
        "cnpj": "37.426.980/0001-07",
        "contato": "Stephany Freitas",
        "telefone": "+55 (29) 9 1984 5891",
        "email": "rezendeluiza@example.org",
        "endereco": {
          "logradouro": "Praia Giovanna Melo",
          "bairro": "Jardim Do Vale",
          "cidade": "Jesus",
          "estado": "PB",
          "cep": "82921-535"
        }
      },
      {
        "id": 3,
        "nome": "DUARTE LTDA. - ME",
        "cnpj": "37.150.928/0001-62",
        "contato": "Lucas Gabriel Oliveira",
        "telefone": "+55 56 9 2299 9930",
        "email": "ccardoso@example.com",
        "endereco": {
          "logradouro": "Núcleo Sophie Farias, 75",
          "bairro": "Serra Verde",
          "cidade": "Mendes",
          "estado": "AM",
          "cep": "60135-936"
        }
      },
      {
        "id": 4,
        "nome": "DA CONCEIÇÃO S/A LTDA.",
        "cnpj": "97.826.530/0001-25",
        "contato": "Isabella Cavalcanti",
        "telefone": "+55 37 9 9936-9771",
        "email": "xda-rosa@example.org",
        "endereco": {
          "logradouro": "Residencial de Vieira",
          "bairro": "Outro",
          "cidade": "Aragão da Serra",
          "estado": "AM",
          "cep": "47712-747"
        }
      }
    ]
  },
  {
    "id": 11,
    "nome": "Guilherme Rodrigues",
    "cpf": "352.170.968-02",
    "nivel": "pleno",
    "user_id": 11,
    "clientes": [
      {
        "id": 1,
        "nome": "NASCIMENTO LTDA. - ME",
        "cnpj": "91.427.360/0001-20",
        "contato": "Cauê Jesus",
        "telefone": "+55 93 94034-7380",
        "email": "elisa82@example.com",
        "endereco": {
          "logradouro": "Campo Mariana Jesus, 856",
          "bairro": "Jardinópolis",
          "cidade": "Monteiro das Pedras",
          "estado": "GO",
          "cep": "23376829"
        }
      },
      {
        "id": 2,
        "nome": "SANTOS MORAES - EI S.A.",
        "cnpj": "61.894.327/0001-49",
        "contato": "Cauê Martins",
        "telefone": "+55 (087) 93096-2077",
        "email": "tsales@example.org",
        "endereco": {
          "logradouro": "Lagoa de Aragão, 17",
          "bairro": "Nova America",
          "cidade": "Souza do Amparo",
          "estado": "RO",
          "cep": "90768-571"
        }
      },
      {
        "id": 3,
        "nome": "MOREIRA - ME S/A",
        "cnpj": "78.532.906/0001-44",
        "contato": "Olivia Jesus",
        "telefone": "+55 (78) 91436 9281",
        "email": "inunes@example.com",
        "endereco": {
          "logradouro": "Setor de Lima, 3",
          "bairro": "Luxemburgo",
          "cidade": "da Mata",
          "estado": "TO",
          "cep": "43592528"
        }
      }
    ]
  }
])
