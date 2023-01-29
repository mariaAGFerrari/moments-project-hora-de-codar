# moments-project-hora-de-codar

Projeto feito no curso de Angular do canal do Youtube 'Hora de Codar'

## API
É necessário clonar o repo da API e rodar na própria máquina.

- [Link do repositório da API](https://github.com/matheusbattisti/curso_adonis_api_yt)

- [Link do vídeo de como criar a API com AdonisJS](https://www.youtube.com/watch?v=y8XfJJYhXPE&t=0s)

### Como rodar a API
1. Rodar o comando:
   $ npm install
2. Criar um arquivo .env
3. Gerar uma key:
   $ node ace generate:key
4. Colocar a key gerada na variável de ambiente APP_KEY no arquivo .env
5. Rodar o comando abaixo para criar as tabelas:
   $ node ace migration:run
6. rodar a API com o comando:
   $ node ace serve