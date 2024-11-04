import{_ as e,c as o,a0 as s,o as r}from"./chunks/framework.tNzSPtvZ.js";const i="/sobrinho-da-computacao/images/projetos/CapaMundano.png",q=JSON.parse('{"title":"🌎 Mundano","description":"","frontmatter":{},"headers":[],"relativePath":"pages/projetos/mundano.md","filePath":"pages/projetos/mundano.md"}'),n={name:"pages/projetos/mundano.md"};function t(u,a,d,m,c,p){return r(),o("div",null,a[0]||(a[0]=[s('<h1 id="mundano" tabindex="-1">🌎 Mundano <a class="header-anchor" href="#mundano" aria-label="Permalink to &quot;:earth_americas: Mundano&quot;">​</a></h1><hr><p><img src="'+i+'" alt=""></p><p>Falei de forma resumida um pouco do que é o projeto e o que espero que ele se torne no futuro. Algumas coisas podem mudar aqui e alí, mas manterei sempre o mais atualizado possível.</p><h3 id="qual-o-conceito-do-software" tabindex="-1">💡 Qual o conceito do software? <a class="header-anchor" href="#qual-o-conceito-do-software" aria-label="Permalink to &quot;:bulb: Qual o conceito do software?&quot;">​</a></h3><p>Mundano é um software de construção de mundos (world building) focado em escritores criativos que visa a facilidade de criar e organizar mundos, culturas e locais de uma narrativa. Apesar do público-alvo serem escritores criativos, todo tipo de narrativa fica melhor com uma construção de mundo bem planejada. Pode ser usado na criação de jogos, livros, campanhas de RPG de mesa, filmes, etc.</p><h3 id="por-que-existiria-um-software-assim" tabindex="-1">⚠️ Por que existiria um software assim? <a class="header-anchor" href="#por-que-existiria-um-software-assim" aria-label="Permalink to &quot;:warning: Por que existiria um software assim?&quot;">​</a></h3><p>De modo geral, quando se escreve uma história, um dos maiores desafios é que manter a coerência do início ao fim. Da mesma maneira que o mundo real é regido por leis da física, mundos fictícios seguem as leis que os autores criarem. Essas leis devem ser bem explicadas e mantidas durante toda a narrativa para a construção de um mundo mais imersivo. Quando o leitor ou telespectador percebe um furo nessa construção de mundo, toda imersão criada é quebrada.</p><p>O escritor deve evitar isso ao máximo. Todo autor quer prender a atenção do leitor e manter sua mente curiosa. Questões sobre seu mundo precisam de respostas. Não uma resposta barata, inventada na hora, mas uma resposta planejada e com sentido. É isso que um mundo bem construído proporciona. A imersão de poder questionar sobre esse mundo sabendo que provavelmente existe uma resposta plausível.</p><h3 id="quais-sao-as-funcoes-que-solucionarao-esses-problemas" tabindex="-1">⭐ Quais são as funções que solucionarão esses problemas? <a class="header-anchor" href="#quais-sao-as-funcoes-que-solucionarao-esses-problemas" aria-label="Permalink to &quot;:star: Quais são as funções que solucionarão esses problemas?&quot;">​</a></h3><p>Primeiramente o foco é em ser intuitivo e fácil de entender. Os cenários, personagens e objetos serão armazenados em arquivos que armazenarão suas propriedades. Essas propriedades serão totalmente customizadas pelo escritor, mas podem ser salvas como template para facilitar a criação de outros personagens, cenários ou objetos no futuro.</p><p>Com as propriedades criadas, é o momento de explorar as ferramentas principais. Será possível analisar quais as relações dos personagens entre si através de grafos. A linha de acontecimentos é onde será possível analisar a ordem narrativa e cronológica dos acontecimentos da história, evitando furos de roteiro. A ferramenta de notas rápidas ajuda a armazenar textos curtos com ideias ou conceitos que serão trabalhados posteriormente.</p><h3 id="atualmente-quais-sao-as-alternativas-no-mercado" tabindex="-1">🔄 Atualmente quais são as alternativas no mercado? <a class="header-anchor" href="#atualmente-quais-sao-as-alternativas-no-mercado" aria-label="Permalink to &quot;:arrows_counterclockwise: Atualmente quais são as alternativas no mercado?&quot;">​</a></h3><p>Pelas minhas pesquisas, alguns escritores decidem usar softwares de organização, como Notion ou Obsidian, enquanto outros preferem usar apenas arquivos de texto bem organizados. O que me chamou atenção é que uma pequena parte usa softwares de Wiki para organizar, como Dokuwiki ou Bookstack. A navegação simples da Wiki faz com que seja muito fácil achar tudo em qualquer momento. Posteriormente espero adicionar uma função semelhante ao Mundano, mas sem previsão ainda.</p><p>É um pouco surpreendente não haver um software focado especificamente em construção de mundo atualmente. Existem focados em mapas para RPG, ou organização, mas nada como o Mundano.</p><h3 id="qual-seria-o-modelo-de-negocio" tabindex="-1">💰 Qual seria o modelo de negócio? <a class="header-anchor" href="#qual-seria-o-modelo-de-negocio" aria-label="Permalink to &quot;:moneybag: Qual seria o modelo de negócio?&quot;">​</a></h3><p>A principal forma de monetização será pela venda de grandes atualizações. Atualizações pequenas de correção de bugs e segurança serão gratuitas para todos os usuários. Além disso também será cobrado pela sincronização de projetos na nuvem (opcional) para backup de projetos.</p><h3 id="quais-as-tecnologias-usadas-e-por-que" tabindex="-1">💻 Quais as tecnologias usadas e por quê? <a class="header-anchor" href="#quais-as-tecnologias-usadas-e-por-que" aria-label="Permalink to &quot;:computer: Quais as tecnologias usadas e por quê?&quot;">​</a></h3><p>Aqui entramos em um assunto um pouco mais técnico: as tecnologias. Em geral tentei não usar mais do que eu precisava, já que é um projeto de uma pessoa só e não é dos mais fáceis.</p><p>Para o front-end foquei na React com ShadCN para componentização, enquanto TailwindCSS foi usado na estilização. A escolha de React foi tanto por ter muito conteúdo disponível, como a flexibilidade que ela proporciona. E juntando com ShadCN e TailwindCSS é fácil criar e modificar componentes altamente customizáveis. Com isso, toda a interface do Mundano segue um padrão de design fixo que combina bastante.</p><p>No back-end optei por usar Python com Django para criar uma API robusta e ao mesmo tempo escalável. Com a quantidade de bibliotecas que o Python oferece, é fácil conseguir algo útil para o projeto. Como por exemplo a criação dos grafos ou a integração com o banco de dados, que abordarei no parágrafo seguinte.</p><p>O banco de dados escolhido foi MongoDB, já que um projeto exige dados bem flexiveis e não relacionados. O MongoDB também é referencia em quesito velocidade de escrita e leitura, então foi a escolha ideal para o projeto.</p>',22)]))}const f=e(n,[["render",t]]);export{q as __pageData,f as default};
