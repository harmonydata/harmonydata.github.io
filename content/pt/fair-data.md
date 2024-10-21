---
title: Dados justos
---

## Quais são os Princípios de Dados FAIR?

Os [ princípios FAIR ](https://www.go-fair.org/fair-principles/) são um conjunto de diretrizes para tornar os dados mais **detectáveis**, **acessíveis**, **interoperáveis**, e **reutilizável**. Os princípios destinam-se a ajudar organizações e indivíduos a maximizar o valor de seus dados, tornando-os mais fáceis de encontrar, acessar e usar.

Os princípios FAIR foram publicados na *Nature* em 2016 para abordar as dificuldades na reprodução de pesquisas científicas. Organizações financiadoras, editoras e agências governamentais estão cada vez mais começando a exigir planos de gerenciamento de dados para dados gerados em pesquisas. Isso significa que, se você encontrar um artigo científico e quiser reproduzir o estudo, poderá reproduzir a pesquisa com o mínimo de atrito.

{{< image src="/images/fair.png" alt="Fair" >}}

## Como o Harmony está seguindo os princípios FAIR?

### Os dados do Harmony podem ser encontrados

O projeto Harmony está registrado na [ Open Science Foundation ](https://osf.io/bct6k/) . Com exceção dos protocolos protegidos por direitos autorais, como o inventário de ansiedade de Beck, todos os conjuntos de dados (protocolos) usados no desenvolvimento e teste do Harmony estão disponíveis em nosso [ repositório Github ](https://github.com/harmonydata/harmony) que é público acesso. Conjuntos de dados não fornecidos em formato bruto são fornecidos em um [ shell script ](https://github.com/harmonydata/harmony/blob/main/data/raw_pdf/download_raw_pdfs.sh) que baixa documentos da web. O conjunto de avaliação de McElroy et al é fornecido no repositório Github.

- F1. (Meta)dados recebem um identificador único e persistente globalmente – O identificador exclusivo para o projeto Harmony é https://osf.io/bct6k/ com a Open Science Foundation. O perfil OSF está vinculado à [ página do Github] do Harmony ](https://github.com/harmonydata) . O repositório do Github contém uma pasta de [ questionários codificados ](https://github.com/harmonydata/harmony/tree/main/front_end/hard_coded_questionnaires) onde cada questionário está no formato CSV, que serve como ID exclusivo. Para questionários PDF brutos disponíveis na Internet, é fornecido um script de shell que baixa cada arquivo de dados para um nome de arquivo exato que serve como um identificador exclusivo.
- F2. Os dados são descritos com metadados avançados – O perfil OSF contém todos os metadados relevantes do projeto. A planilha [ ferramenta de item harmonizado final EM.xlsx ](https://github.com/harmonydata/harmony/blob/main/data/Final harmonised item tool EM.xlsx) no repositório possui uma guia de descrições.
- F3. Os metadados incluem clara e explicitamente o identificador dos dados que descrevem – os links do perfil OSF para o Github e o URL do Github é o identificador exclusivo do repositório do Github. Todas as referências a um questionário referem-se ao nome do arquivo no mesmo formato, como **GHQ 12 English**.
- F4. (Meta)dados são registrados ou indexados em um recurso pesquisável – o perfil OSF é pesquisável. No repositório do Github, os arquivos são baixados pelo shell script em uma pasta e há um script para extrair todos os dados em um formato txt pesquisável.

### Os dados do Harmony são Acessíveis

Como nosso conjunto de dados é de acesso público no repositório do Github, uma vez que um usuário tenha clonado (baixado) o repositório e executado o shell script, todos os documentos estarão em seu computador.

- A1. (Meta)dados são recuperáveis por seu identificador usando um protocolo de comunicação padronizado – o Harmony pode ser baixado clonando o repositório Github. O script para baixar quaisquer questionários extras não fornecidos com o Harmony está incluído no repositório do Github.
- A2. Os metadados são acessíveis, mesmo quando os dados não estão mais disponíveis - uma vez que o ID exclusivo do Harmony é o perfil OSF, se o Harmony fosse hospedado em outro lugar, o perfil OSF permaneceria com os metadados relevantes. A lista de protocolos para teste está incluída no script de shell. Todos os protocolos sem restrições de acesso aberto estão incluídos em [ esta pasta ](https://github.com/harmonydata/harmony/tree/main/front_end/hard_coded_questionnaires) .

### Os dados do Harmony são interoperáveis

Os dados são baixados em formato PDF e a biblioteca Apache Tika é usada para converter para o formato de texto bruto. Não há problemas de interoperabilidade com o formato de texto bruto.

- I1. (Meta)dados usam uma linguagem formal, acessível, compartilhada e amplamente aplicável para representação do conhecimento. – todos os questionários são convertidos em uma única estrutura onde o texto de uma pergunta está em uma coluna.
- I2. (Meta)dados usam vocabulários que seguem os princípios FAIR. – Você pode ler o esquema de dados [ aqui ](https://github.com/harmonydata/harmony/blob/main/README.md#data-schema) .
- I3. (Meta)dados incluem referências qualificadas a outros (meta)dados – este item não é aplicável, pois nenhum conjunto de dados se baseia em outros conjuntos de dados.

### Os dados do Harmony são reutilizáveis

O Harmony é lançado sob a [ Licença MIT ](https://github.com/harmonydata/harmony/blob/main/LICENSE) , que permite o uso comercial, modificação, distribuição e uso privado da ferramenta e dos dados.

- R1. (Meta)dados são ricamente descritos com uma pluralidade de atributos precisos e relevantes – nossa [ página Github do projeto ](https://github.com/harmonydata) contém informações sobre o projeto, enquanto o repositório de origem possui uma [ LICENÇA ](https://github.com/harmonydata/harmony/blob/main/LICENSE) e [ README.md ](https://github.com/harmonydata/harmony/blob/main/README.md) contendo todas as informações relevantes sobre o projeto e reutilização.

## Referências

Wilkinson, Mark D., e outros. “Os Princípios Orientadores FAIR para gerenciamento e administração de dados científicos.” Dados científicos 3.1 (2016): 1-9.
