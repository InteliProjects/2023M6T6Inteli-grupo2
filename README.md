<Table>
  <tr>
    <td>
    <a href= "https://www.educacao.sp.gov.br/"><img src="https://www.educacao.sp.gov.br/wp-content/uploads/2023/08/GOV_LOGO-2023_SECRETARIA-EDUCACAO_versa%E2%95%A0%C3%A2o-PRINCIPAL-COLORIDA_HORIZONTAL.png" alt="SEDUC" border="0">
    </td>
    <br>
    <td>
    <a href= "https://www.inteli.edu.br/"><img src="https://capitaldigital.com.br/wp-content/uploads/2021/04/logo-inteli-300x134-1.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
    </td>
  </tr>
</table>

# Nome do projeto



<span style="font-size: 40px">LearnLink</span>

<img src="imagens/learnlinklogo.png"  width="100" height="60">

## Nome do grupo

<span style="font-size: 23px">Easier</span>


## :student: Integrantes: 
- <a href="https://www.linkedin.com/in/mauricio-felicissimo/">Mauricio Felicissimo</a>
- <a href="https://www.linkedin.com/in/jv-marcelino/">José Vitor Marcelino</a>
- <a href="https://www.linkedin.com/in/yago-ara%C3%BAjo-do-vale-moreira-461816247/">Yago Araújo</a> 
- <a href="https://www.linkedin.com/in/felipe-martins-moura-1bbb27157/">Felipe Martins</a> 
- <a href="https://www.linkedin.com/in/antonionassar/">Antonio Nassar</a>
- <a href="https://www.linkedin.com/">Isabela Rocha</a> 


## :teacher: Professores:
### Orientador(a) 
- <a href="https://www.linkedin.com/in/vanunes/">Vanessa Nunes</a>
### Instrutores
- <a href="https://www.linkedin.com/">Programação - André Braga</a>
- <a href="https://www.linkedin.com/">Programação - Jefferson de Oliveira</a>
- <a href="https://www.linkedin.com/">Matemática e Física - Ricardo Missori</a>
- <a href="https://www.linkedin.com/">Negócios - Rafael Jacomossi</a>
- <a href="https://www.linkedin.com/">Design - Guilherme Cestari</a> 
- <a href="https://www.linkedin.com/">Liderança - Filipe Gonçalves</a>

## 📝 Descrição

Aplicativo móvel inovador para otimizar a gestão de remessas e entregas de fornecedores nas Unidades Escolares da rede estadual de ensino de São Paulo, em colaboração com a Secretaria da Educação. Este aplicativo visa simplificar o processo de registro, monitoramento e confirmação das operações logísticas, proporcionando transparência e eficiência. Além disso, a solução oferecerá recomendações de fornecedores e transportadoras com base em dados abrangentes sobre transporte, características dos materiais e avaliações dos usuários. 


## 📝 LINKS

[Manual do Usuário](/documentos/Manual_do_Usuario.md)

[Documentação Geral do Projeto](/documentos/index.md)

## 📁 Estrutura de pastas

* 		prisma:
    * Esta pasta está relacionada ao Prisma, que é um ORM para Node.js e TypeScript. O Prisma nos ajuda na interação com bancos de dados relacionais, permitindo que nós definamos seus modelos de dados em código e gerando consultas SQL de forma automatizada.
* 		src:
    * A nossa pasta "src" contém o código-fonte principal da aplicação. Dentro dela, temos arquivos e subpastas que compõem a lógica principal do nosso programa.
* 		business:
    * Essa pasta contém o código relacionado à lógica de negócios da nossa aplicação, incluindo a implementação de regras e operações específicas ao domínio da aplicação.
* 		controllers:
    * Nesta pasta estão localizados os controladores da aplicação, que são responsáveis por receber as requisições do cliente, interagir com a lógica de negócios e enviar a resposta de volta aos nossos clientes.
* 		data:
    * Essa pasta contém o código relacionado ao acesso e manipulação de dados.A mesma tem também a interação com bancos de dados, a gravação de arquivos, e qualquer outra operação que envolva a constância de informações.
* 		test:
    * Nossa pasta “test” contém os arquivos e configurações dos testes automatizados da aplicação, incluindo suites de testes, mocks, configurações de execução de testes e outros arquivos relevantes para garantir a qualidade e integridade do nosso código.

*       assets:

    * Armazena arquivos estáticos, como imagens, fontes ou outros recursos que precisam ser importados no código.
    
*       components:

    * Contém componentes reutilizáveis da interface do usuário. Cada componente geralmente é isolado e pode ser utilizado em várias partes do aplicativo.

*       hooks:

    * Guarda hooks personalizados, que são funções que podem ser reutilizadas para compartilhar lógica entre componentes.

*       models:
    * Armazena modelos de dados ou estruturas que representam o formato dos dados usados no aplicativo.

*       routes:

    * Gerencia a navegação entre telas do aplicativo. Contém configurações de rotas e navegação.

*       screens:

    * Contém componentes que representam telas individuais do aplicativo. Cada arquivo muitas vezes corresponde a uma única página ou funcionalidade.

*       services:

    * Engloba serviços ou utilitários que interagem com dados externos, como APIs, bancos de dados ou outras operações assíncronas.


|--> documentos<br>
  &emsp;| --> outros <br>
  &emsp;| --> imagens_doc<br>
  &emsp;| csv_modelo.csv<br>
  &emsp;| index.md<br>
  &emsp;| Manual_do_Usuario.md<br>
  &emsp;| Modelo Conceitual.drawio<br>
  &emsp;| Modelo Lógico.drawio<br>
  &emsp;| Testes_de_usabilidade.pdf<br>
|--> imagens<br>
|--> src<br>
  &emsp;|--> colab<br>
  &emsp;&emsp;| --> modelo_colab.ipynb <br>
  &emsp;|--> LearnLinkApp<br>
  &emsp;&emsp;|--> .expo<br>
  &emsp;&emsp;|--> assets<br>
  &emsp;&emsp;|--> components<br>
  &emsp;&emsp;|--> contexts<br>
  &emsp;&emsp;|--> hooks<br>
  &emsp;&emsp;|--> models<br>
  &emsp;&emsp;|--> routes<br>
  &emsp;&emsp;|--> screens<br>
  &emsp;&emsp;|--> services<br>
| readme.md<br>


Dentre os arquivos presentes na raiz do projeto, definem-se:

- <b>readme.md</b>: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

- <b>documentos</b>: aqui estarão todos os documentos do projeto. Há também uma pasta denominada <b>outros</b> onde podem estar presentes documentos complementares à documentação principal.

- <b>imagens</b>: imagens relacionadas ao projeto como um todo (por exemplo imagens do sistema, do grupo, logotipos e afins).

- <b>src</b>: nesta pasta encontra-se todo o código fonte do sistema (circuito e eventuais sistemas complementares).

## 💻 Configuração para desenvolvimento

```

Aqui encontram-se todas as instruções necessárias para a configuração do sistema
1. Instale um aplicativo no celular "Expo Go"
2. Faça um clone do repositório git clone [link desse repositório]"
3. Ao baixar o repositório, via terminal, navegue até a página LearnLinkApp
4. No terminal, digite npm install 
5. Após finalizar o download dos pacotes, digite npm start
6. Selecione a opção web do Expo, apertando a tecla "W"
7. Agora basta acessar a aplicação escaneando o QR Code com o aplicativo "Expo Go"
8. Para acessar o back end, faça o git clone do repositório do serviço de gestão de entregas https://github.com/2023M6T6Inteli/api_gestao_pedidos_seduc
9. Ao baixar o repositório do nosso serviço de gestão de entregas, via terminal, crie um ambiente virtual python utilizando o comando python -m venv venv
10. Dentro do seu ambiente virtual, utilize o comando pip install -r requirements.txt
11. Agora basta ligar o serviço utilizando o comando python app.py

```

## 🗃 Histórico de lançamentos

* 1.0 - **Sprint 1** - 19/10/2023
    * Documentação da arquitetura SOA e diagramas
* 1.1 - 21/10/2023
    * Documentação dos casos de uso
    * Documentação da análise de negócios
* 1.2 - 23/10/2023
    * Criação e documentação do wireframe
* 1.3 - 24/10/2023
    * Análise de dados para construção do modelo de recomendação
* 2.0 - **Sprint 2** 03/11/2023
    * Construção de serviços do sistema (Sistema de recomendação, gestão de usuário e gestão de entregas)
* 2.1 - 05/11/2023
    * Documentação dos planos e casos de testes unitários dos serviços 
* 2.2 - 06/11/2023
    * Documentação dos diagramas UML de classes e de componentes
* 2.3 - 08/11/2023
    * Primeira versão do modelo de recomendação
* 2.4 - 09/11/2023
    * Documentação Swagger dos serviços
* 3.0 - **Sprint 3** 15/11/2023
    * Integração com API externa Google SignIn
* 3.1 - 16/11/2023
    * Desenvolvimento do FrontEnd (React Native)
* 3.2 - 19/11/2023
    * Documentação dos testes da API externa
* 3.3 - 22/11/2023
    * Desenvolvimento e documentação dos testes de usabilidade
* 4.0 - **Sprint 4** 29/11/2023
    * Documentação da analise de usabilidade do sistema
* 4.1 - 30/11/2023
    * Integração do usuário "transportadora"
* 4.2 - 01/12/2023
    * Documentação de testes de integração do sistema
    * Documentação de testes de integração back-front
* 4.3 - 03/12/2023
    * Documentação do diagrama UML de sequência
* 5.0 - **Sprint 5** 10/12/2023
    * Implementação de funcionalidades faltantes
* 2.1 - 17/12/2023
    * Implementação da funcionalidade de confirmação de entrega com CPF/COD
* 2.2 - 19/12/2023
    * Implementação da integração com API de recomendação de fornecedoras
* 2.3 - 20/12/2023
    * Implementação da tela de feedbacks recebidos
* 5.4 - **VERSÃO ATUAL** (FINAL)

## 📋 Licença/License


<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/2023M6T6Inteli/grupo2">LearnLink</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/2023M6T6Inteli/grupo2">INTELI, José Vitor Marcelino de Oliveira, Mauricio Trapnell Felicissimo,Yago Araújo do Vale Moreira, Felipe Martins Moura, Antonio Nassar, Isabela Rocha</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1">
<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>

