![ViaGeo - Capa](https://user-images.githubusercontent.com/56441371/93688444-5704dc80-fa9c-11ea-8bed-fdac35ce7337.png)

A **VisGEO** nasceu através da necessidade de resolução de um problema do cliente parceiro com a Fatec São José dos Campos - Prof. Jessen Vidal.

Este é um repositório do <a href="https://visgeo.vercel.app/">site de apresentação</a>, para acessar o projeto principal <a href="https://github.com/JDanrley/VisGeo-ETL">clique aqui</a>

### Objetivo

Desenvolver uma aplicação web, com uma ferramenta ETL de baixo custo.

### O Projeto

O Projeto consiste no desenvolvimento de um sistema web ETL¹ no qual dados georreferenciados serão extraídos de shapefiles², transformados e carregados em banco de dados geográfico³, no caso atual, PostGis. Assim como o processo inverso.

### Time

- Evandro Braga - PO - [LinkedIn](https://www.linkedin.com/in/evandro-rodrigues-de-melo-braga-1aa677149/)
- José Danrley - Scrum Master - [LinkedIn](https://www.linkedin.com/in/jos%C3%A9-danrley-069827191/)
- Cristiane Rodrigues - DEV Team - [LinkedIn](https://www.linkedin.com/in/cristiane-rodrigues-20b3b61b2)
- Leonardo Messias  - DEV Team - [LinkedIn](https://www.linkedin.com/in/leonardo-messias-89568818a/)
- Luis Guilherme - DEV Team - [LinkedIn](https://www.linkedin.com/mwlite/in/luis-guilherme-a17b58185)
- Matheus Amauri - DEV Team - [LinkedIn](https://www.linkedin.com/in/matheus-campos-9b8550192)
- Pedro Mendonça - DEV Team - [LinkedIn](https://www.linkedin.com/in/pedro-mendon%C3%A7a-3a13541a4/)
- Raquel Ribeiro - DEV Team - [LinkedIn](https://www.linkedin.com/in/raquel-rodrigues-ribeiro-a9537818b)
- Washington Henrique - DEV Team - [LinkedIn](https://www.linkedin.com/in/justhenrique/)


### Requisitos Funcionais

- Carga de dados geográficos (ponto, linha e polígono) e seus atributos alfanuméricos em tabelas existentes de banco de dados geográficos.
- Recuperação de dados geográficos (ponto, linha e polígono) e seus atributos alfanuméricos armazenados em banco de dados geográficos.

### Requisitos Não Funcionais:

- Banco de Dados Geográficos PostGIS;
- Documentações.

### Backlog do Projeto

![Cards](https://user-images.githubusercontent.com/56441371/98672721-ff188280-2334-11eb-9050-4b434acba3a4.png)

### Tecnologias Utilizadas

![VisGeo - Techs](https://user-images.githubusercontent.com/56441371/93688825-3c803280-fa9f-11ea-9408-bd07d27aad71.png)

- De acordo com os requisitos não funcionais levantados e alinhamento com nosso cliente, optamos por utilizar Java no CRUD de usuários.
- A  API que trata do processo ETL foi desenvolvida em Python, com auxílio do Framework Flask, e das bibliotecas PyShp e postgresql.
- O front-end foi desenvolvido com React usando as bibliotecas Ant Design, Axios, Bootstrap, React-Bootstrap, React Icons e StyledComponents.
- Os arquivos shapefiles são carregados em Banco de Dados Postgres, utilizando a extensão para arquivos geográficos, PostGis.


### Definições

¹ ETL - Vem do inglês Extract, Transform and Load (Extrair, transformar e carregar), consiste em um processo de direção dos dados até o armazenamento. A ele corresponde as ações de extração, tratamento e inserção na base de dados.

² Shapefiles – É um formato de armazenamento de dados vetoriais, formado por aqrquivos com múltiplas extensões. Pode armazenar geometria do tipo ponto, polígono ou linha. No shapefile três arquivos são obrigatórios e devem estar na mesma pasta, ter o mesmo nome; estes arquivos são diferentes entre si por conta de sua extensão, sendo elas .dbf, .shp e .shx. Já os arquivos com extensão .cpg e .prj são facultativos.

- .shp – geometria da operação
- .shx – índice da geometria do recurso
- .dbf – informações de atributo
- .prj - sistema de coordenadas e informações de projeção
- .cpg - descreve um conjunto de caracteres para exibir texto

³ Banco de dados relacional
É um tipo de banco de dados que armazena e fornece acesso a pontos de dados relacionados entre si, de modo intuitivo e direto.
