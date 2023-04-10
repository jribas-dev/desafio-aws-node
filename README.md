# API Node.js com Serverless Framework em ambiente AWS

Neste projeto é criado uma infraestrutra em nuvem AWS com API Gateway, DynamoDB, AWS Lambda e AWS CloudFormation utilizando o framework Serverless para o desenvolvimento baseada em Infraestrutura as a Code.

### Requisitos

- Node.js 16.x
- Framework Serverless 3

### Dependências

- uuid
- aws-sdk

```$ npm i uuid aws-sdk```

### Etapas

- Possuir ou criar uma conta na AWS
- Criar Usuário -> Criar Grupo -> Permissão "AdministratorAccess"
- Credenciais de Segurança -> "Criar Chave de acesso"
- Instalar o AWS CLI: https://aws.amazon.com/pt/cli/
- No terminal: ```$ aws configure``` -> colar as credenciais geradas anteriormente
- Configurar o framework Serverless: ```$ npm i -g serverless```


### Deploy

```$ serverless deploy```

