---
title: Tornar o Harmony sustentável a longo prazo
description: How we can make sure the Harmony project survives after the Wellcome Trust Mental Health Data Prize
date:
image: /images/blog/sustainability.png
---

Longevidade é um tópico complicado no desenvolvimento de software.

Temos pensado em como podemos garantir que o Harmony continue a operar por muito tempo no futuro, já que o Harmony é um bem público para os pesquisadores usarem sem restrições.

# A infraestrutura

Para a primeira iteração do Harmony , desenvolvemos o painel em [ Plotly Dash ](https://plotly.com/dash/) e o implantamos em um domínio .org em execução no [ Microsoft Azure App Service ](https://azure.microsoft.com/en-gb/products/app-service) . O site estava rodando em [ Wordpress ](https://wordpress.com/) , hospedado em [ Siteground ](https://www.siteground.co.uk/) . Todas essas são soluções pagas que estavam saindo do orçamento do projeto.

Descobrimos que o Wordpress não é uma boa solução a longo prazo, pois precisa ser mantido e atualizado para reduzir o risco de violações de segurança. Também não seria compatível com nenhuma solução em que hospedaríamos na infraestrutura administrada pela Ulster University, devido a questões de segurança. Além disso, o Wordpress precisa de hospedagem paga para uma boa experiência do usuário, embora haja ofertas gratuitas disponíveis.

Tomamos a decisão de migrar nosso blog do Wordpress para [ Hugo ](https://gohugo.io/) e registramos o domínio harmonitydata.ac.uk via Ulster University. Isso garante um domínio mais confiável, tornando-nos mais fáceis de encontrar e uma presença mais permanente na academia do Reino Unido. O site/blog do Hugo é estático e gerenciado de [ um repositório Github ](https://github.com/harmonydata/harmonydata.github.io) e hospedado em [ Páginas do Github ](https://pages.github.com/) . Isso é gratuito e fácil de trabalhar - qualquer membro da equipe pode fazer upload de uma postagem de blog no formato Markdown no repositório Github e o site é reconstruído automaticamente.

Com relação à API do Harmony , inicialmente rodamos a ferramenta no Microsoft Azure. Isso custava cerca de £ 100 a £ 200 por mês, já que a ferramenta precisa executar um LLM (large language model) em segundo plano.

Exploramos várias soluções que podem reduzir custos e optamos por usar os servidores disponíveis na Ulster University para hospedagem contínua, o que significa que uma conta do Azure não é mais necessária. Uma alternativa que exploramos foram as soluções sem servidor (função como serviço, ou FaaS) usando [ AWS Lambda ](https://aws.amazon.com/lambda/) , que é barato de executar, mas muito complicado de configurar e resulta em longos tempos de partida a frio.

{{< image src="images/blog/deployed_harmony_architecture.png" alt="Screenshot" >}}


*Implantação sem servidor alternativa no AWS Lambda*

# Código

Desenvolvemos nosso software de acordo com as melhores práticas de projetos open source. Nosso repositório Github está disponível publicamente e também publicamos nosso código na Open Science Foundation (OSF) aqui: https://osf.io/bct6k/.

Realizamos uma avaliação de sustentabilidade com o [ Instituto de Sustentabilidade de Software ](https://software.ac.uk) no início da Fase de Prototipagem do Prêmio Wellcome Data. Isso destacou alguns pontos fracos de nossa estratégia de sustentabilidade de software, como a falta de informações claras sobre licenciamento, como contribuir ou instalar o código. Para corrigir esses problemas, atualizamos completamente o blog com as informações necessárias e garantimos que nossa licença de software (MIT) seja destacada em todos os repositórios e código-fonte.

Também garantimos o lançamento de nossa ferramenta em Python e R, duas das linguagens de programação mais usadas pelos pesquisadores. Nossa [ documentação da API ](https://raw.githubusercontent.com/harmonydata/harmonyapi/main/docs/API_reference.pdf) está disponível on-line para download em PDF e fornecemos uma série de vídeos em nosso canal do YouTube para ajudá-lo a começar a instalar e usar o Harmony .

Para completar, incluímos nosso relatório inicial de avaliação de sustentabilidade do software.ac.uk (o Instituto de Sustentabilidade de Software) abaixo.

# the Harmony - Avaliação de Sustentabilidade

**Este relatório de avaliação de software é para o seu software: o Harmony . É uma lista de recomendações baseadas nas perguntas da pesquisa às quais você respondeu "não".**

**Caso nenhum texto apareça abaixo deste parágrafo, significa que você já deve estar seguindo todas as recomendações feitas em nossa avaliação. Isso é fantástico! Adoraríamos ouvir sua opinião, porque seu projeto seria um estudo de caso perfeito. Entre em contato (info@software.ac.uk)!**

_Pergunta 1.1: Seu site e documentação fornecem uma visão geral clara e de alto nível de seu software?_

As perguntas fundamentais que serão feitas sobre o seu software são: o que ele faz, o que o torna melhor do que outro software que desempenha um papel semelhante e como ele contribui para a pesquisa? Os usuários em potencial devem ser capazes de encontrar facilmente uma descrição de uma ou duas frases de seu software em seu site e em sua documentação.

Pode ser difícil resumir seu software de forma rápida e concisa, especialmente quando você passou meses codificando centenas de recursos interessantes e poderosos. No entanto, a menos que você chame a atenção de um usuário em potencial muito rapidamente, corre o risco de perdê-lo como um usuário real!

_Pergunta 1.3: Você publica estudos de caso para mostrar como seu software foi usado por você e por outras pessoas?_

Uma ótima maneira de exibir seu software é escrever estudos de caso sobre como você e outras pessoas o usaram. Os estudos de caso podem ajudar os usuários em potencial a aprender sobre seu software. Eles também atuam como um grande anúncio para o seu software. Se você puder mostrar usuários felizes se beneficiando de seu software, provavelmente ganhará mais usuários.

_Pergunta 3.1: Seu software está disponível como um pacote que pode ser implantado sem compilar?_ Construir software pode ser complicado e demorado. Fornecer seu software como um pacote que pode ser implantado sem compilar pode economizar tempo e esforço dos usuários para fazer isso sozinhos. Isso pode ser especialmente valioso se seus usuários não forem desenvolvedores de software. Você deve testar se seu software é compilado e executado em todas as plataformas para as quais ele deve oferecer suporte, o que significa que você já terá criado pacotes que podem ser distribuídos para seus usuários! Consulte nosso guia Pronto para lançamento? Uma lista de verificação para desenvolvedores (http://www.software.ac.uk/resources/guides/ready-release).

Se você estiver interessado nas consequências de ignorar as necessidades de seus usuários, consulte nosso guia sobre Como frustrar seus usuários, irritar outros desenvolvedores e agradar advogados (http://www.software.ac.uk/resources/guides/how- frustrar-seus-usuários-irritar-outros-desenvolvedores-e-agradar-advogados).

_Pergunta 4.6: Se o seu software pode ser usado como uma biblioteca, pacote ou serviço por outro software, você fornece documentação abrangente da API?_

Se o seu software incluir suporte para Application Programming Interfaces (API) (https://en.wikipedia.org/wiki/Application_programming_interface), sejam funções, tipos de dados ou classes oferecidas por uma biblioteca ou uma coleção de REST (https: //en.wikipedia.org/wiki/Representational_state_transfer) endpoints ou serviços da web, eles precisam ser documentados se você quiser que sejam usados. Os exemplos de código sozinhos podem não fornecer informações suficientes sobre como alguém pode usar sua API em seu próprio código.

A partir de comentários estruturados no código, a geração de documentação completa e estruturada da API pode ser feita automaticamente com, por exemplo, JavaDoc (http://www.oracle.com/technetwork/java/javase/documentation/index-jsp-135444.html) (para Java), Doxygen (http://www.stack.nl/~dimitri/doxygen/) (para C, C++ , Fortran ou Python), Sphinx (http://sphinx-doc.org/) (para Python ). Certas estruturas REST, como Django (http://www.django-rest-framework.org/), também suportam geração automática de documentação de API.

_Pergunta 4.8: Você publica seu histórico de lançamento, por exemplo, dados de lançamento, números de versão, principais recursos de cada lançamento etc. em seu site ou em sua documentação?_ Um histórico de lançamento permite que os usuários vejam como seu software evoluiu. Ele pode fornecer a eles uma maneira de ver o quão ativo você está desenvolvendo e mantendo seu software, em termos de novos recursos fornecidos e bugs corrigidos. O software que parece ser corrigido, atualizado e estendido regularmente pode ser mais atraente do que o software que parece estagnado.

_Pergunta 5.1: Seu software descreve como um usuário pode obter ajuda para usar seu software?_ Quando um usuário descobre um problema, ele estará sentado em frente ao computador usando seu software. Isso significa que o primeiro lugar que eles procurarão para tentar encontrar uma solução é em qualquer ajuda disponível com seu software. Se você tiver uma interface gráfica do usuário, sempre deverá ter um menu de "ajuda" ou equivalente. Para ferramentas de linha de comando, um sinalizador "--help" ou um arquivo README pode fornecer essas informações. Para serviços on-line, um link para uma página da Web de suporte é útil.

Da mesma forma, se um usuário está olhando para sua documentação, há uma boa chance de que ele esteja procurando resolver um problema, então faz sentido também descrever como um usuário pode obter mais ajuda lá também. É importante descrever como um usuário pode enviar sua solicitação de suporte, por exemplo, por e-mail, telefone, rastreador de problemas, fórum ou outros meios e quaisquer recursos relacionados, por exemplo, páginas da Web com perguntas frequentes ou arquivos de e-mail. Também é importante que qualquer um desses recursos permaneça disponível durante a vida útil prevista do software, pelo menos!

Consulte nosso guia sobre suporte a software de código aberto (http://software.ac.uk/resources/guides/supporting-open-source-software). Seu conselho também se aplica ao suporte a software de código fechado.

_Pergunta 5.2: Seu site e documentação descrevem qual suporte, se houver, você fornece aos usuários e desenvolvedores?_

O nível de suporte que um usuário pode esperar receber costuma ser um elemento vital na escolha do software pelo usuário. Isso significa que o suporte que você fornece – seja uma resposta garantida em vinte e quatro horas ou uma possível resposta com base no melhor esforço – precisa estar claro em seu site e em sua documentação.

Essas informações podem ajudar a gerenciar as expectativas dos usuários. Um usuário sempre desejará que seu problema seja resolvido o mais rápido possível e pode ficar descontente (e pode até deixar de ser um usuário) se não for esse o caso. Se você for claro e honesto sobre o nível de suporte que pode fornecer, é mais provável que mantenha seus usuários satisfeitos.

Consulte nosso guia sobre suporte a software de código aberto (http://software.ac.uk/resources/guides/supporting-open-source-software). Seu conselho também se aplica ao suporte a software de código fechado.

_Pergunta 5.3: Seu projeto possui um endereço de e-mail ou fórum exclusivo para suporte aos usuários?_

O e-mail foi criado com o propósito de resolver os problemas dos usuários. O usuário pode fornecer uma boa descrição de seu problema e anexar capturas de tela, arquivos de log ou outras evidências de suporte, e é fácil solicitar informações de acompanhamento, se necessário. Você deve sempre tentar ter um endereço de e-mail para consultas de suporte.

É melhor se o endereço de e-mail de suporte estiver claramente identificado como tal, por exemplo

myproject-support@myplace.ac.uk. Isso torna mais fácil para os usuários identificar o endereço de e-mail em seu site ou em sua documentação e ajuda você a separar suas consultas de suporte de todos os seus outros e-mails. No entanto, um endereço de e-mail pessoal é melhor do que nada se você não tiver os meios para fornecer um endereço de suporte dedicado.

Consulte nosso guia sobre suporte a software de código aberto (http://software.ac.uk/resources/guides/supporting-open-source-software). Seu conselho também se aplica ao suporte a software de código fechado.

_Pergunta 5.4: Os e-mails para o seu endereço de e-mail de suporte são recebidos por mais de uma pessoa?_ É fácil esquecer um e-mail, especialmente um com perguntas difíceis, então seus e-mails para seus e-mails de suporte endereço deve ser sempre recebido por mais de uma pessoa. Uma pessoa ainda deve ter a responsabilidade principal de lidar com os e-mails dos usuários, mas outras podem se preparar para lidar com os e-mails, se necessário, para que a consulta de um usuário seja atendida mesmo se um de vocês estiver de férias, doente ou indisposto .

Consulte nosso guia sobre suporte a software de código aberto (http://software.ac.uk/resources/guides/supporting-open-source-software). Seu conselho também se aplica ao suporte a software de código fechado.

_Pergunta 5.5: Seu projeto possui um sistema de tickets para gerenciar relatórios de bugs e solicitações de recursos?_

Lidar com uma ou duas consultas de suporte é bastante simples, mas à medida que o número de consultas aumenta e sua complexidade aumenta, fica mais fácil cometer erros. Nada incomodará mais um usuário do que suas consultas de suporte sendo ignoradas, mesmo por acidente.

Um sistema de bilhética permite organizar consultas de suporte de forma escalável. Ele fornece um método fácil para registrar quem perguntou o quê e quando, para armazenar informações adicionais sobre a consulta, designar alguém em uma equipe para lidar com uma consulta específica e priorizar as consultas para que você possa trabalhar primeiro nas mais importantes. Um sistema de tíquetes é um requisito absoluto se você tiver mais de uma pessoa trabalhando nas consultas – ele evita que duas pessoas trabalhem acidentalmente para resolver o mesmo problema e permite que você se mantenha atualizado facilmente com o progresso.

Os sistemas de bilhética também são muito úteis para fornecer estatísticas. Você pode descobrir os componentes de seu software que causam mais problemas e melhorá-los ou documentar melhor seu uso. Você também pode ver a rapidez com que está lidando com os problemas e verificar se está atendendo ao nível de suporte anunciado.

Exemplos de sistemas de emissão de bilhetes incluem JIRA (https://www.atlassian.com/software/jira), Bugzilla (https://www.bugzilla.org/) e Trac (http://trac.edgewall.org/). Muitos repositórios de terceiros, incluindo GitHub (https://github.com), BitBucket (https://bitbucket.org), LaunchPad (https://launchpad.net) e SourceForge (https://sourceforge.net) também fornecem rastreadores de problemas. Consulte nosso guia sobre Suporte a software de código aberto

(http://software.ac.uk/resources/guides/supporting-open-source-software). Seu conselho também se aplica ao suporte a software de código fechado.

_Pergunta 5.6: O sistema de tíquetes do seu projeto está visível publicamente para seus usuários, para que eles possam visualizar relatórios de bugs e solicitações de recursos?_

Um sistema de tíquete aberto permite que seus usuários vejam que você está ativo na correção de bugs e na implementação de recursos e responde aos seus usuários. Isso pode dar a eles confiança em você e em seu software e os torna mais propensos a usá-lo. Ele também fornece aos seus usuários um meio de ver se um problema que eles têm é um problema conhecido e permite que eles verifiquem o progresso ou, até mesmo, se o problema já foi resolvido e uma correção está disponível.

Consulte nosso guia sobre suporte a software de código aberto (http://software.ac.uk/resources/guides/supporting-open-source-software). Seu conselho também se aplica ao suporte a software de código fechado.

_Pergunta 6.1: A arquitetura e o design do seu software são modulares?_

Modularidade (https://en.wikipedia.org/wiki/Modular_programming) é uma abordagem fundamental de design de software centrada na criação de unidades funcionais independentes ou módulos que atendem a propósitos específicos (por exemplo, E/S de arquivo, autorização, registro, álgebra linear, dinâmica de fluidos computacional, correspondência de DNA ou análise de texto).

A modularidade tem muitos benefícios. É mais fácil reutilizar módulos em outro software, em vez de reimplementar sua funcionalidade, economizando tempo e esforço. Cada módulo é independente, portanto pode ser alterado ou atualizado sem afetar os outros módulos no código, e também pode ser testado quanto ao isolamento, o que é útil ao desenvolver como parte de uma equipe. Projetos modulares também são mais fáceis de entender.

Dado que o código-fonte é a realização final de um projeto, ele também deve ser modular e estruturado de forma a tornar os módulos claros. As linguagens de programação suportam muitas maneiras pelas quais um design modular pode ser realizado, por exemplo, pacotes e classes em Java; pacotes, módulos e classes em Python; arquivos de cabeçalho, arquivos de código-fonte e tipos de dados em C; namespaces e classes em C++; ou módulos e classes em Fortran.

Consulte nosso guia sobre Desenvolvimento de software sustentável (http://software.ac.uk/resources/guides/developing-maintainable-software) e Modular Design (https://en.wikipedia.org/wiki/Modular_design) na Wikipedia.

_Pergunta 11.5: Sua documentação lista o número da versão para todas as dependências de terceiros?_

Diferentes versões de linguagens, bibliotecas, pacotes, scripts, modelos ou ferramentas podem suportar diferentes recursos. O código escrito para usar uma versão de uma linguagem, biblioteca ou pacote pode não ser compatível com versões anteriores ou posteriores. Você deve fornecer informações sobre quais versões de dependências os usuários precisam usar ao criar, implantar ou executar seu software. Um usuário ficará irritado se tentar usar seu software com o Python 3 apenas para descobrir que ele é compatível apenas com o Python 2, algo que você, como desenvolvedor, já deve saber. Você sabe quais versões usa, então documente-as para ajudar seus usuários também.

Alternativas para números de versão incluem, dependendo de onde a dependência se origina: a

identificador ou tag de confirmação do repositório de código-fonte ou uma data de download.

Consulte nosso guia sobre Como citar e descrever software (http://software.ac.uk/so-exactly-what-software-did-you-use).

_Pergunta 11.6: Seu software lista o endereço da web e as licenças para todas as dependências de terceiros e informa se as dependências são obrigatórias ou opcionais?_ Os usuários não querem ter que pesquisar na web por suas dependências de terceiros para encontrar o informações necessárias para empacotar ou implantar seu software. Você já conhece todas as informações que seus usuários precisarão sobre versões adequadas, licenças e afins, portanto, você deve disponibilizá-las para seus usuários. Em particular, as informações de licença são muito importantes, porque os usuários precisam entender os termos e condições das dependências de terceiros para que possam determinar se têm permissão legal para usá-los e, portanto, usar seu software.

_Pergunta 11.7: Você pode baixar dependências usando uma ferramenta de gerenciamento de dependência ou gerenciador de pacotes? por exemplo, Ivy (http://ant.apache.org/ivy/), Maven (https://maven.apache.org/), Python pip (https://pypi.python.org/pypi/pip) ou setuptools_

_(https://pypi.python.org/pypi/setuptools), PHP Composer (https://getcomposer.org/), Ruby gems (https://rubygems.org) ou R PackRat (https:// rstudio.github.io/packrat/)_ Juntar todas as dependências de terceiros com seu software significa que seus usuários não precisam baixar as dependências. No entanto, pode levar a um lançamento de pacotes muito grande e, em alguns casos, você não poderá agrupar uma dependência, porque sua licença o impede. As ferramentas de gerenciamento de dependência fornecem estruturas automatizadas para baixar e instalar dependências de terceiros no momento da compilação ou implantação. Isso ajuda a reduzir o tamanho dos pacotes de lançamento, evita problemas de licenciamento e evita que os próprios usuários tenham que baixar as dependências.

_Pergunta 12.1: Você tem um conjunto de testes automatizados para o seu software?_

Depois de alterar seu código e reconstruí-lo, um desenvolvedor desejará verificar se suas alterações ou correções não danificaram nada. Os testes contribuem para um ambiente fail-fast, que permite a identificação rápida de falhas introduzidas por alterações no código, como otimizações ou correções de bugs. A falta de testes pode dissuadir os desenvolvedores de consertar, estender ou melhorar seu software, pois os desenvolvedores terão menos certeza se estão introduzindo bugs inadvertidamente ao fazê-lo. Cada teste pode verificar uma função ou método individual, uma classe ou módulo, módulos ou componentes relacionados ou o software como um todo. Os testes podem garantir que os resultados corretos sejam retornados de uma função, que uma operação altere o estado de um sistema conforme o esperado ou que o código se comporte conforme o esperado quando algo der errado.

Existem muitos frameworks disponíveis para escrever testes em várias linguagens, incluindo JUnit (http://junit.org/) para Java, CUnit (http://cunit.sourceforge.net/) para C, CPPUnit (http:/ /www.freedesktop.org/wiki/Software/cppunit/) e googletest (https://code.google.com/p/googletest/) para C++, FRUIT (http://sourceforge.net/projects/fortranxunit/) para Fortran, py.test (http://pytest.org/) e nosetests (http://nose.readthedocs.org/) para Python, testthat (https://cran.r-project.org/web/packages /testthat/index.html) para R e PHPUnit (https://phpunit.de) para PHP.

Automatizar a execução de seu conjunto de testes significa que todo o conjunto de testes pode ser executado de uma só vez, facilitando a vida de seus desenvolvedores. Ter um sistema de construção automatizado é um precursor muito valioso para fornecer um conjunto de testes, e ter um sistema de construção e teste automatizado é um recurso valioso em qualquer projeto de software.

Consulte nossos guias sobre como testar seu software (http://software.ac.uk/resources/guides/testing-your-software) e adotar testes automatizados (http://github.com/softwaresaved/automated_testing/blob/master/README .md).

_Pergunta 12.2: Você tem um framework para executar seus testes periodicamente (por exemplo, todas as noites) na versão mais recente do código-fonte?_

Ter um sistema automatizado de compilação e teste é uma base sólida para executar testes automaticamente na versão mais recente do seu código-fonte em intervalos regulares, por exemplo, todas as noites. Na sua forma mais simples, isso pode ser feito agendando uma tarefa cron em Unix/Linux ou Mac OSX, ou usando o Agendador de Tarefas do Windows. A

A solução mais avançada é usar um framework como o Inca (http://inca.sdsc.edu/) que aproveita uma série de máquinas através de um servidor central para distribuir uma ampla variedade de testes de forma paralela e escalável.

Consulte nosso guia sobre como testar seu software

(http://software.ac.uk/resources/guides/testing-your-software).

_Pergunta 12.3: Você usa integração contínua, executando testes automaticamente sempre que alterações são feitas em seu código-fonte?_

Ter um sistema de compilação e teste automatizado é uma base sólida para executar testes automaticamente na versão mais recente do código-fonte sempre que forem feitas alterações no código no repositório de código-fonte. Isso significa que sua equipe (e outros, se você publicar os resultados do teste de forma mais ampla) obterá um feedback muito rápido sobre o impacto das mudanças. Os servidores de integração contínua podem executar tarefas automaticamente para criar software e executar testes sempre que as alterações forem confirmadas em um repositório de código-fonte. Por exemplo, Jenkins (http://jenkins-ci.org) é um servidor de integração contínua que pode acionar trabalhos em resposta a mudanças no Git, Mercurial, Subversion e CVS. Travis CI (http://travis-ci.org) é um servidor de integração contínua hospedado que pode acionar tarefas em resposta a alterações nos repositórios Git hospedados no GitHub (https://github.com).

Consulte nossos guias sobre como a integração contínua pode ajudá-lo a testar e liberar regularmente seu software

(http://software.ac.uk/how-continuous-integration-can-help-you-regularly-test-and-release-your-soft ware), Crie e teste exemplos

(https://github.com/softwaresaved/build_and_test_examples/blob/master/README.md) (que inclui orientações sobre Introdução ao Jenkins e Introdução ao Travis CI) e Integração contínua hospedada

(http://www.software.ac.uk/resources/guides/hosted-continuous-integration). Indo além, isso também pode ser feito automaticamente sempre que o repositório de código-fonte for alterado. Consulte nossos guias sobre como testar seu software

(http://software.ac.uk/resources/guides/testing-your-software), Adotando testes automatizados (http://github.com/softwaresaved/automated_testing/blob/master/README.md)

_Pergunta 12.4: Os resultados do seu teste são visíveis publicamente?_

A publicação de resultados de testes executados com frequência (por exemplo, compilação noturna e execuções de teste) pode dar segurança aos usuários sobre como e quanto seu software é testado. Você pode publicar automaticamente as execuções de teste no site do seu projeto ou, alternativamente, enviar os resultados da execução do teste para a lista de discussão de um desenvolvedor ou para uma lista de discussão dedicada aos resultados do teste. Por exemplo, veja os resultados do teste (http://build.mygrid.org.uk/ci/), para o sistema de gerenciamento de fluxo de trabalho Taverna (http://www.taverna.org.uk/) que usa Jenkins (https: //jenkins-ci.org) para construir e testar seu código e publicar seus resultados.

Questão 12.5: Todos os testes executados manualmente estão documentados?

[yes/no/non-applicable]

Pode não ser possível, ou fácil, automatizar certos testes, por exemplo, testar um aplicativo baseado em navegador depois de implantado. Nesses casos, você deve documentar a lista de etapas a serem executadas para testar o software. Documentar as etapas significa que os testes podem ser executados por qualquer pessoa, não apenas pelo

desenvolvedor que costuma fazer esses testes.

_Pergunta 12.5: Todos os testes executados manualmente estão documentados?_

Pode não ser possível, ou fácil, automatizar certos testes, por exemplo, testar um aplicativo baseado em navegador depois de implantado. Nesses casos, você deve documentar a lista de etapas a serem executadas para testar o software. Documentar as etapas significa que os testes podem ser executados por qualquer pessoa, não apenas pelo desenvolvedor que costuma fazer esses testes.

_Pergunta 13.2: Seu site informa quantos projetos e usuários estão associados ao seu projeto?_

Onde você tem um conjunto ativo de usuários e desenvolvedores, anunciar sua existência não é bom apenas para promover o sucesso e a vida de seu projeto. Se os usuários em potencial perceberem que há um grande número de usuários, eles saberão que seu projeto está prosperando, seu software é útil e está em desenvolvimento ativo. Isso pode incentivá-los a usar seu software, sabendo que, se tiverem problemas, pode haver pessoas que possam ajudar e compartilhar experiências.

_Pergunta 13.3: Você fornece histórias de sucesso em seu site?_

Uma ótima maneira de mostrar seu software é escrever estudos de caso sobre as pessoas que o usaram e como o usaram. Isso ajuda os usuários em potencial a aprender sobre o software, mas, mais especificamente, é um ótimo anúncio para o seu software. Se você puder mostrar usuários felizes se beneficiando de seu software, provavelmente ganhará mais usuários.

_Pergunta 13.8: Se o seu software é desenvolvido como um projeto de código aberto (e não apenas um projeto de desenvolvimento de software de código aberto), você possui um modelo de governança?_

Um modelo de governança define como um projeto de código aberto é executado. Descreve as funções dentro do projeto e sua comunidade e as responsabilidades associadas a cada função; como o projeto apóia sua comunidade; que contribuições podem ser feitas ao projeto, como são feitas, quaisquer condições às quais as contribuições devem obedecer, quem retém os direitos autorais das contribuições e o processo seguido pelo projeto ao aceitar a contribuição; e, o processo de tomada de decisão dentro do projeto.

Embora sejam projetados para projetos de código aberto, muitas de suas preocupações são relevantes para qualquer projeto de software.

OSS Watch (http://oss-watch.ac.uk) fornece uma introdução aos modelos de governança (http://oss-watch.ac.uk/resources/governancemodels).

_Pergunta 14.2: Você tem uma política de contribuições?_

Uma política de contribuições fornece informações aos usuários sobre o que eles podem contribuir (por exemplo, correções de bugs, aprimoramentos, atualizações de documentação, tutoriais), como eles podem contribuir (por exemplo, por e-mail, arquivos de patch, solicitações de pull do GitHub), quaisquer requisitos que devem satisfazer (por exemplo, conformidade com as convenções de codificação ou estilo, aprovação nos testes necessários, licenciamento de software) e o que acontece com suas contribuições depois de enviadas (por exemplo, como é revisado e integrado ao seu código, documentação ou site). Ele também informa aos usuários quem possui os direitos autorais de sua contribuição. Para obter informações sobre como gerenciar contribuições, consulte os Contratos de licença de colaborador do OSS Watch (http://oss-watch.ac.uk/resources/cla).

_Pergunta 14.3: A política de suas contribuições está disponível publicamente?_

Os usuários não podem contribuir se não souberem que podem contribuir. Publicar sua política de contribuições fornece informações aos usuários sobre o que eles podem contribuir, como podem contribuir, quaisquer requisitos que devem atender e o que acontece com suas contribuições depois de enviadas. Ele também informa aos usuários quem possui os direitos autorais de sua contribuição.

Para obter informações sobre como gerenciar contribuições, consulte os Contratos de licença de colaborador do OSS Watch (http://oss-watch.ac.uk/resources/cla).

_Pergunta 14.4: Os colaboradores mantêm os direitos autorais/IP de suas contribuições?_ Pedir aos colaboradores que assinem seus direitos autorais e propriedade intelectual para seu projeto ou organização pode impedir os usuários de contribuir. Com efeito, pede-lhes que abram mão de algo que pode ser novo e que pode representar um aspecto fundamental de sua pesquisa. Permitir que os colaboradores mantenham seus próprios direitos autorais e propriedade intelectual remove essa barreira, tornando a contribuição uma opção mais atraente. Também contribui para promover uma comunidade em torno de seu software – todos compartilhando seus resultados em vez de entregá-los a um grupo seleto. Para obter informações sobre como gerenciar contribuições, consulte os Contratos de licença de colaborador do OSS Watch (http://oss-watch.ac.uk/resources/cla).

_Pergunta 15.2: Cada um de seus arquivos de código-fonte inclui uma declaração de direitos autorais?_ É fácil distribuir arquivos de código-fonte e isso separa o código de qualquer declaração de direitos autorais que possa estar em seu site ou em sua documentação. Para cobrir essa eventualidade e remover qualquer ambigüidade sobre propriedade, é uma boa prática incluir uma declaração de direitos autorais com cada um de seus arquivos de código-fonte, como um comentário ou, se o idioma permitir, como uma string constante.

_Pergunta 15.3: Seu site e documentação declaram claramente a licença de seu software?_ Os usuários precisam conhecer as condições de licenciamento de seu software e também de qualquer software de terceiros que o acompanha, pois isso pode impor restrições e obrigações sobre como eles podem usá-lo ou redistribuí-lo. Os desenvolvedores precisam saber as condições sob as quais podem alterar ou estender seu software e quaisquer restrições sobre suas modificações e extensões e sua redistribuição. Também é essencial que usuários e desenvolvedores conheçam o licenciamento de qualquer software de terceiros incluído em uma versão pelos mesmos motivos. Isso pode incluir: código-fonte de terceiros, copiado e usado como está; código-fonte de terceiros modificado, estendido ou corrigido; binários de terceiros (por exemplo, DLLs, arquivos JAR, etc.) enviados por você; e software de terceiros baixado e instalado pelos usuários.

Se os usuários puderem visualizar a licença do seu software em seu site, sem precisar fazer o download do software, os usuários em potencial poderão determinar rapidamente se a licença é adequada para a forma como pretendem usar o software.

Se você não possui uma licença e uma licença de código aberto pode ser adequada para você, consulte nosso guia Escolhendo uma licença de código aberto (http://www.software.ac.uk/resources/guides/adopting- licença de código aberto).

_Pergunta 15.6: Cada um de seus arquivos de código-fonte inclui um cabeçalho de licença?_ É fácil distribuir arquivos de código-fonte e isso separa o código de qualquer declaração de licença que possa estar em seu site ou em sua documentação. Para cobrir essa eventualidade e remover qualquer ambiguidade sobre o que um desenvolvedor pode fazer com o código-fonte, é uma boa prática incluir uma declaração de licença em cada um dos seus arquivos de código-fonte, como um comentário. Isso também pode ajudar a evitar confusão entre arquivos de origem que podem ter licenças diferentes, principalmente se houver várias dependências de terceiros usadas em seu software.

_Pergunta 16.1: Seu site ou documentação inclui um roteiro de projeto (uma lista de projetos e marcos de desenvolvimento para os próximos 3, 6 e 12 meses)?_

Um roteiro permite que os usuários vejam quando novos recursos serão adicionados e planejem seu projeto de acordo. Ele também tem um benefício secundário importante: um dos fatores mais importantes que influenciarão a escolha de um software pelo usuário é a probabilidade de esse software ainda existir – e ter suporte – no futuro. Há muitas maneiras pelas quais um projeto pode convencer um usuário de sua longevidade: anúncios regulares, lançamentos regulares, respostas rápidas a perguntas, informações sobre financiamento e seus planos para o futuro – um roteiro.

_Pergunta 16.2: Seu site ou documentação descreve como seu projeto é financiado e o período durante o qual o financiamento é garantido?_

Especialmente em projetos acadêmicos, os usuários verão o tempo de vida ativo do software como a duração do financiamento do projeto de software. Se você deseja persuadir os usuários de que seu software estará disponível no futuro, é uma boa ideia descrever seu modelo de financiamento e a duração durante a qual o financiamento é garantido.

_Pergunta 16.3: Você faz anúncios oportunos sobre a descontinuação de componentes, APIs, etc.?_

Nunca é uma boa ideia remover componentes ou recursos sem avisar os usuários com antecedência. Pode ser que haja usuários dependentes do(s) recurso(s) que você planeja alterar ou remover. Anunciar essas descontinuações planejadas com bastante antecedência significa que usuários e desenvolvedores podem responder se um determinado recurso for importante para eles.

Se um recurso for substituído por um recurso ou componente mais novo e melhor, incluir ambos por um período adequado no software pode permitir que seus usuários façam uma transição confortável da versão anterior para a nova versão.

Você também pode desenvolver e divulgar uma política de descontinuação, declarando como e quando os recursos ou componentes em geral são descontinuados. Isso dá aos usuários a garantia de que os recursos não serão removidos sem aviso prévio. consulte, por exemplo, a política de descontinuação da API do Eclipse. (https://wiki.eclipse.org/Eclipse/API_Central/Deprecation_Policy).
