# Advice Generator Project | Exercício DevQuest

## **Sumário**

- [Visualização do Projeto](#visualização-do-projeto)
- [Apresentação](#apresentação)
- [Explicação do Projeto](#explicação-do-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Utilizar o Código do Projeto](#como-utilizar-o-código-do-projeto)
- [Ferramentas e Tecnologias Utilizadas](#ferramentas-e-tecnologias-utilizadas)
- [Principais Recursos e Abordagens](#principais-recursos-e-abordagens)
- [Desafios Enfrentados](#desafios-enfrentados)
- [Aprendizado Adquirido](#aprendizado-adquirido)
- [Desenvolvimento Contínuo e Autossuperação](#desenvolvimento-contínuo-e-autossuperação)
- [Agradecimentos e Conclusão](#agradecimentos-e-conclusão)
- [Contato](#contato)
- [Licença de Uso](#licença-de-uso)

## **Visualização do projeto**

### **🖥️ Desktop**

<div align="center">
  <img src="https://raw.githubusercontent.com/Miguel-dAlmeida/accordion-faq__project/main/src/images/gif_desktopPreview.gif" alt="Gif do resultado final da página">
</div>

### **📱 Mobile**

<div align="center">
  <img src="https://raw.githubusercontent.com/Miguel-dAlmeida/accordion-faq__project/main/src/images/gif_mobilePreview.gif" alt="Gif do resultado final da página">
</div>

### [Acesse a página clicando aqui!](https://miguel-dalmeida.github.io/accordion-faq__project/) 

## **Apresentação**

Olá! Meu nome é Mário Miguel e sou estudante de Desenvolvimento Web. Atualmente, sou aluno do curso **DevQuest**, da plataforma *Dev em Dobro*, focado na formação de desenvolvedores Fullstack.

Como parte da minha jornada de aprendizado, desenvolvi a aplicação **Advice Generator**. Este projeto integra o módulo [**Exercício JavaScript Avançado**](https://gigantic-chef-a6f.notion.site/Exerc-cio-JavaScript-Avan-ado-2bbcd10b93ab806e81d8ef6bde9f7e1f?source=copy_link) do curso *DevQuest* e tem como objetivo colocar em prática os conhecimentos adquiridos no módulo teórico de **JavaScript Avançado**, explorando conceitos mais aprofundados da linguagem.

## **Explicação do Projeto**

Este projeto consiste em um gerador simples de conselhos que consome a API [**Advice Slip JSON**](https://api.adviceslip.com/#endpoint-random), responsável por disponibilizar milhões de conselhos ao longo do ano.

A aplicação exibe um card centralizado na tela contendo o **ID do conselho** e o **texto do conselho**. Além disso, há um botão interativo que, ao ser clicado, realiza uma nova requisição à API e atualiza o conteúdo exibido, apresentando um novo conselho ao usuário.

## **Estrutura do Projeto**

```plaintext
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   ├── responsive.css
│   │   ├── style.css
│   ├── js/
│   │   ├── index.js
│   ├── design/
│   │   ├── ...
│   ├── images/
│   │   ├── ...
├── index.html
├── README.md
```

## **Como Utilizar o Código do Projeto**

**Para rodar este projeto em sua máquina local, siga os passos abaixo:**

### 1️⃣ Crie um diretório para o projeto  
Escolha um local no seu computador e crie uma pasta para armazenar os arquivos do projeto.

### 2️⃣ Acesse o terminal  
Clique com o botão direito sobre a pasta criada e selecione a opção para abrir o terminal.  

### 3️⃣ Clone o repositório  
No terminal, execute o seguinte comando para clonar o repositório:  
```sh
git clone https://github.com/Miguel-dAlmeida/advice-generator__project.git
```
### 4️⃣ Acesse o diretório do projeto
Após a clonagem, entre na pasta do projeto executando o comando abaixo em seu terminal:

```sh
cd advice-generator__project
```

### 5️⃣ Abra o projeto no editor de código
Ainda no terminal, caso esteja utilizando o VS Code, basta rodar o comando:

```sh
code .
```
Se estiver utilizando outro editor, abra a pasta `advice-generator__project` manualmente no programa de sua escolha.

**Pronto! Agora você pode explorar e editar o código do projeto.** 

## **Ferramentas e Tecnologias Utilizadas**

<div style="display: inline_block" align="center"><br>
  <img align="center" alt="HTML" height="60" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="60" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="CSS" height="55" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg">
  <img align="center" alt="Markdown" height="80" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg"/>
</div>

## **Principais Recursos e Abordagens**

*Este projeto foi desenvolvido considerando boas práticas em front-end, com foco em acessibilidade, estrutura semântica, responsividade, interatividade, escalabilidade e desempenho. **A seguir, compartilho um resumo dos principais recursos e estratégias adotadas:***

### HTML

- **Tags Semânticas:**  
  A estrutura do projeto foi cuidadosamente montada com tags semânticas como `<main>`, `<picture>` e `<footer>`. Essa escolha não apenas organiza e torna o código mais legível, mas também melhora a acessibilidade e a indexação pelo SEO.

- **Atributos:**  
  Utilizei atributos HTML para aprimorar a acessibilidade do site, como `aria-label` e `alt`, e também para estruturar melhor a lógica em JavaScript, com o `id`.

- **Imagens Responsivas via `<picture>`:**  
  Utilizei a tag `<picture>` para gerenciar a renderização condicional de imagens de acordo com o dispositivo. Como o layout prevê imagens distintas para mobile e desktop, essa abordagem permite carregar apenas o recurso necessário em cada contexto, evitando duplicações no HTML e "gambiarras" via CSS (*esconder com `display: none;`, por exemplo*), além de contribuir para um melhor desempenho (*uma renderização por vez; economia de banda*).


### CSS

- **CSS Flexbox:**  
  O Flexbox foi utilizado como principal mecanismo de layout, permitindo alinhar e distribuir os elementos da página de forma eficiente e responsiva.

- **Prefixos `-webkit-`, `-ms-` e `-o-`:**  
  Inclusão de prefixos em propriedades CSS para garantir compatibilidade com versões antigas de navegadores.  
***Nota:** Utilizei o site [Autoprefixer CSS online](https://autoprefixer.github.io/) para incluir os prefixos automaticamente.*
- **Favicon Personalizado:**  
  Utilizei um favicon para reforçar a identidade visual da aplicação.

- **Reset CSS:**  
  Utilizei um arquivo de reset para eliminar inconsistências entre navegadores, criando uma base uniforme para os estilos aplicados.

- **Uso Estratégico de REM:**  
  Diferentemente de outros projetos, mantive o valor padrão do `root` em 16px (`html { font-size: 100% }`), abrindo mão da conveniência matemática do `62.5%` em favor da acessibilidade. Essa decisão garante maior previsibilidade no zoom do navegador e melhor compatibilidade com preferências do usuário. Em conjunto, utilizei a unidade `rem` para definir tamanhos e espaçamentos, assegurando escalabilidade consistente em diferentes resoluções.

- **CSS Nesting:**  
  A técnica de CSS Nesting foi empregada para estruturar os estilos de forma hierárquica, o que minimiza a repetição de regras e torna o código mais legível e organizado, criando uma estrutura semelhante à encontrada no código HTML.

- **Nomenclatura de Classes com BEM (Block, Element, Modifier):**  
  Todas as classes seguem a metodologia BEM, o que proporciona clareza, modularidade e escalabilidade ao CSS. Essa padronização também facilita a manutenção e me prepara tanto para, futuramente, trabalhar em equipe, quanto para projetos mais complexos.

- **Abordagem Mobile First:**  
  Iniciei o desenvolvimento com foco em telas mobile e fui adaptando progressivamente para dispositivos desktop, como notebooks e monitores maiores.

- **Media Queries:**  
  O uso de media queries permitiu ajustar o layout conforme o tamanho da tela, garantindo uma experiência consistente em todos os dispositivos.

- **Posicionamento Avançado:**  
  Utilizando os valores `relative` e `absolute` da propriedade `position`, pude criar contextos de empilhamento e controlar sobreposições, replicando fielmente o design.

- **Função `clamp()` para dimensionamento fluido:**  
  Empreguei a função `clamp()` para lidar com a responsividade em dispositivos mobile (orientation: portrait). Definindo valores mínimo, ideal e máximo, foi possível criar um dimensionamento fluido do `font-size`, atendendo a diferentes larguras de tela com um único breakpoint e uma única regra CSS, mantendo coesão visual e simplicidade no código.  
  ```css
  @media (min-width: 320px) and (orientation: portrait) {
  html {
    font-size: clamp(1rem, 2.2727vw + 0.54545rem, 2rem);
    }
  }
  ```

- **Breakpoints para dimensionamento responsivo:**  
  Para o layout desktop, optei por uma abordagem mais convencional utilizando breakpoints aliados à unidade `rem`. Após testes com `clamp()`, percebi limitações relacionadas à previsibilidade do comportamento do zoom, o que motivou a adoção dessa estratégia mais estável e amplamente consolidada.

### JavaScript

- **Seleção de Elementos com `getElementById()`:**
  A lógica começa com a seleção dos elementos HTML via `document.getElementById()`. Isso possibilita capturar os elementos importante para a lógica e prepará-los para manipulação.

- **Eventos de Clique com `addEventListener()`:**  
  Implementei o método `addEventListener("click", ...)` no botão gerador de conselhos, permitindo capturar a interação do usuário e disparar a função responsável por realizar a requisição à API e atualizar dinamicamente o conteúdo exibido.

- **Uso das palavras-chave `async` e `await`:**  
  Para lidar com operações assíncronas envolvendo requisições HTTP, utilizei `async` e `await`, garantindo que o código aguarde corretamente a resposta da API antes de prosseguir com a manipulação dos dados.

- **Requisições com `fetch()` e método `.json()`:**  
  A comunicação com a API foi realizada por meio da função `fetch()`, seguida da conversão da resposta para um objeto JavaScript utilizando o método `.json()`, possibilitando o acesso e a manipulação dos dados retornados de forma eficiente.-

- **Tratamento de erros com `try` e `catch`:**  
  Como boa prática, implementei o tratamento de erros utilizando `try` e `catch`, prevenindo que falhas na requisição ou no processamento dos dados comprometam a execução da aplicação, além de permitir a exibição de mensagens apropriadas em cenários inesperados.

- **Uso de `.innerText`:**  
  A atualização do conteúdo textual na interface foi realizada por meio da propriedade `.innerText`, garantindo que os conselhos retornados pela API fossem inseridos no DOM de forma segura e direta.

### Padronização
- **Organização Lógica das Propriedades CSS:**  
  Agrupei as propriedades CSS de forma lógica (box model, tipografia, layout etc.), de modo a manter o código previsível e fácil de ler.

- **Nomenclatura Descritiva do Código:** Busquei utilizar nomes claros e significativos para funções, variáveis e classes. Essa prática torna o código mais autoexplicativo e reduz a necessidade de comentários excessivos, além de facilitar revisões e colaborações futuras.

- **Uso de *Header Comments*:** Implementei comentários padronizados no topo dos arquivos CSS e JS com informações como o propósito do arquivo, autor, data da última modificação e dependências envolvidas. 
Mesmo o projeto sendo pequeno, decidi usar essa padronização para ir me acostumando com boas práticas de código limpo — afinal, logo serei um desenvolvedor contratado, atuando numa equipe de desenvolvimento real.


### Extra: Inteligência Artificial

Durante o desenvolvimento deste projeto, contei com o apoio das IAs, como **ChatGPT**, **Claude** e **Microsoft Copilot**. Elas funcionaram como verdadeiras assistentes, ajudando a esclarecer dúvidas técnicas, resolver desafios complexos e refinar o código (estrutura, semântica, coesão, escalabilidade etc.).

Além disso, as IAs contribuíram para a organização das minhas anotações e para o aprimoramento deste README, elevando a clareza e a qualidade da documentação. Vale destacar que, embora essas ferramentas tenham sido primordiais, o projeto é majoritariamente autoral, resultado da minha criatividade e esforço, com os quais consegui produzir uma solução única e original.

## **Desafios Enfrentados**

Embora o **Advice Generator** tenha sido proposto para avaliar habilidades em JavaScript — especialmente no consumo de APIs —, de forma contraintuitiva, o maior desafio deste projeto não esteve na lógica JS, mas sim na **responsividade**. Essa experiência foi semelhante ao que ocorreu no projeto [**Image Slider**](https://github.com/Miguel-dAlmeida/slider-image_project), cujo objetivo principal era testar a manipulação de classes via JavaScript, mas cujos obstáculos mais significativos acabaram surgindo no CSS.

A marcação HTML fluiu de forma tranquila, assim como a estilização base. Adotei a metodologia **Mobile First**, de modo que o arquivo `style.css` representa o layout mobile, enquanto as adaptações para desktop ficaram concentradas no arquivo responsável pela responsividade — ponto ao qual retornarei mais adiante. Já a lógica em JavaScript fluiu melhor do que o esperado: consegui estruturar toda a funcionalidade em menos de 15 minutos, resultado direto do estudo intensivo realizado no módulo teórico anterior de **JavaScript Avançado**.

Esse preparo foi fortemente influenciado pela aula 16 do módulo, intitulada *“Requisições com Fetch”*, na qual praticamos o consumo de uma API real — a [**Deck of Cards API**](https://deckofcardsapi.com/). Nessa aula, desenvolvemos uma lógica que permitia a alteração dinâmica das cartas por meio do clique em um botão. A didática do professor Beto foi fundamental, mas não foi o único fator determinante para que o Advice Generator saísse com tanta naturalidade. Um ponto decisivo foi minha metodologia de estudo: **estudo ativo com revisões espaçadas**.

Durante a aula, destrinchei cada etapa da lógica de consumo da API e documentei todo o processo. Esse material posteriormente foi refinado com apoio de IA, resultando em um resumo sólido. Em seguida, repliquei toda a lógica do zero, sem consultas. Antes mesmo de avançar para a próxima aula, propus a mim mesmo um novo desafio: recriar a solução sob outra perspectiva, inspirado por um exercício sugerido pelo próprio professor ao final da aula.

No entanto, a experiência de anos estudando todos os dias me ensinou algo essencial: sem revisões, o conhecimento se dissipa. Independentemente do nível de compreensão inicial, conceitos não revisitados tendem a ser esquecidos. Por isso, segui uma prática que adoto há muito tempo — desde a época dos concursos militares — criando **questões de fixação**, respondidas sem consulta em intervalos pré-definidos (1 dia e 7 dias após a conclusão do conteúdo). Abaixo estão as três primeiras questões que elaborei nesse processo:

> **1) Prática que traz à tona a teoria:**  
Crie uma lógica JS com base nas exigências do comentário fixado no bloco de código abaixo:
> - **Bloco de código:**
>  ```jsx 
> /* Crie um botão na tela que, ao ser clicado, criará um baralho embaralhado e exibirá uma carta aleatória do mesmo. Utilize `fetch()`, `json()` e os endpoints da API https://deckofcardsapi.com/ para estruturar a lógica.  
>Você utilizará no total 3 funções: duas para guardar as funcionalidades da API e uma para finalmente colocar a mão na massa.
> Nota: Complete a questão no VS.Code
> Boa sorte! */
>
> document.getElementById('trocarCarta').addEventListener('click', () => tirarCartaAleatoriaDoBaralho()) 
>
>async function funcionalidadeCriarBaralhoEmbaralhado() { 
>     const resposta = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
>     return await resposta.json();
>}  
> 
>async function funcionalidadeTirarCartaDoBaralho(deck_id) {
>     const resposta = await fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
>     return await resposta.json()
>}
>
>async function tirarCartaAleatoriaDoBaralho () {
>     const baralhoEmbaralhado = await funcionalidadeCriarBaralhoEmbaralhado();
>     const tirarUmaCarta = await funcionalidadeTirarCartaDoBaralho(baralhoEmbaralhado.deck_id)
>     const imagemDaCarta = tirarUmaCarta.cards[0].image	
>   document.getElementById('carta').src = imagemDaCarta
>} 
> ```
> **2) Agora, explique teoricamente os 3 conceitos abaixo:**
> 1. **`fetch()`:**  
  O método `fetch()` permite enviar uma requisição a determinada API. Ele retornarará uma Promise, sendo o Objeto Response o valor `resolve` da promessa.  
> 2. **Objeto Response:**  
  O objeto Response consiste na resposta bruta da API em caso de `resolve` na requisição.  
> 3. **`json()`:**  
  O método `json()`, que também retorna uma Promise, transforma a resposta bruta da API (o Objeto Response) num objeto JS manipulável (em caso de `resolve`).
> 
> **3) Ainda no campo da lógica baseada na API do baralho, crie um mecanismo onde as cartas serão tiradas de um único baralho (até que ele acabe):**
>
> ```jsx
> /* 
>	 -> Nota: Complete a questão no VS.Code	 
>	 -> Utilize os endpoints da API https://deckofcardsapi.com/ para estruturar a lógica.
>*/	
>
>document.getElementById('trocarCarta').addEventListener('click', () => tirarCartaAleatoriaDoBaralho())
>
> let baralho = null;
>
>async function funcionalidadeCriarBaralho() {
>	const resposta = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
>	return await resposta.json();
>}
>
>async function tirarCartaAleatoriaDoBaralho() {
>	if (!baralho) {
>		baralho = await funcionalidadeCriarBaralho();
>	}
>
>	const resposta = await fetch(`https://deckofcardsapi.com/api/deck/${baralho.deck_id}/draw/?count=1`)
>	const carta = await resposta.json()
>	console.log(carta)
>
>	document.getElementById('carta').src = carta.cards[0].image
>}
>```

Ter resolvido esses exercícios repetidas vezes consolidou, de forma definitiva, a estrutura básica de consumo de uma API. Isso me deu segurança suficiente para adaptar a lógica ao Advice Generator sem dificuldades significativas. Foram necessárias apenas pequenas adequações, e a aplicação passou a funcionar conforme esperado.

Superada a parte lógica, cheguei ao maior desafio do projeto: **a responsividade**. Como em projetos anteriores, iniciei utilizando uma estratégia de fluidez baseada em `vw`, especificamente por meio da função `min()`. O resultado visual foi, à primeira vista, excelente: a interface se mantinha completamente fluida, quase como uma imagem que preserva suas proporções independentemente da largura da tela. Confesso que, nesse momento, fiquei satisfeito com o resultado. Porém, sem perceber, estava refinando uma abordagem que ignorava aspectos fundamentais de **acessibilidade** e **experiência do usuário**.

Ao finalizar o projeto, como de costume, solicitei um feedback geral a uma IA, questionando pontos de melhoria. Dessa vez, dois alertas foram levantados com bastante clareza:

* a estratégia `html { font-size: 62.5% }` em conflito com as preferências do usuário;
* e o uso mais adequado da função `clamp()`.

### **1. Estratégia `html { font-size: 62.5% }` vs. Preferência do Usuário**

A prática de definir o `font-size` do `html` como `62.5%` tornou-se popular por facilitar cálculos com unidades relativas, convertendo a base de 16px em 10px. O problema é que o navegador define um tamanho base padrão — geralmente 16px — que pode ser alterado pelo usuário por motivos de acessibilidade, como baixa visão. Ao redefinir essa base, o desenvolvedor acaba sobrescrevendo a preferência do usuário, comprometendo a experiência. Por esse motivo, a abordagem mais atual e acessível é manter `html { font-size: 100% }`.

### **2. Uso do `clamp()`**

A IA também sugeriu substituir o `min()` por `clamp()` para obter maior controle sobre a responsividade. Esse é um feedback recorrente, mas até então eu sempre tive dificuldade com essa função — não por sua complexidade real, mas por nunca ter me desafiado a entendê-la a fundo. Desta vez, decidi mudar essa postura.

Ao testar o zoom na aplicação construída com `min()`, percebi que nada mudava: o zoom simplesmente não surtia efeito. Investigando sites reais e amplamente utilizados, notei que muitos deles não são completamente fluidos. Em resoluções como 1024px ou 1920px, o tamanho da tipografia permanece estável. Isso me levou a uma reflexão importante: **nem toda aplicação precisa ser totalmente fluida**. Agora consciente da importância do zoom para acessibilidade, minha estratégia anterior começou a se mostrar inconsistente.

Antes de aplicar o `clamp()` indiscriminadamente, decidi entender melhor a responsividade na prática. Para isso, assisti a uma trilogia de vídeos do canal [**DevClub | Programação**](https://www.youtube.com/@canaldevclub), em que o professor Rodolfo Mori recria o site da Microsoft, abordando desde a estrutura HTML até a responsividade. Ficou claro que, em aplicações modernas, a responsividade está muito mais relacionada à **reorganização do layout** do que à simples escala contínua dos elementos.

Mesmo assim, segui estudando o `clamp()`. Para isso, li dois artigos fundamentais:

1. [*Tipografia fluida moderna usando CSS Clamp*](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/), de Adrian Bece
2. [*Por que a tipografia deveria ser fluida, afinal?*](https://elisehe.in/2021/03/13/fluid-type), de Elise Hein

No primeiro, compreendi a lógica matemática por trás do `clamp()` e passei a ser capaz de definir funções de crescimento controladas dentro de intervalos específicos de largura. Também entendi melhor os riscos de acessibilidade associados à fluidez excessiva. No segundo, aprofundei meu entendimento sobre experiência do usuário e acessibilidade, percebendo que o `clamp()` deve ser aplicado com critério e em contextos bem definidos. Esses aprendizados serão explorados com mais profundidade na seção **Aprendizado Adquirido**.

Com esse novo embasamento, refatorei o Advice Generator. No mobile, utilizei as fórmulas estudadas com Adrian Bece para definir uma função de crescimento que atua entre 320px e 1024px:

```css
html {
  font-size: clamp(1rem, 2.2727vw + 0.54545rem, 2rem);
}
```

Após testar o zoom e alterar o tamanho base do dispositivo, o comportamento passou a respeitar tanto as preferências do usuário quanto as boas práticas de acessibilidade, mantendo adaptação consistente em todas as larguras mobile.

Inicialmente, minha intenção era aplicar a mesma estratégia no desktop. Contudo, o `clamp()` apresentou limitações ao lidar com zoom e preferências tipográficas nesse contexto. Diante disso, optei pela abordagem mais convencional baseada em **breakpoints**, que se mostrou estável, previsível e alinhada às necessidades do projeto.

> *No fim das contas, esse projeto acabou sendo muito mais do que um simples exercício de consumo de API. Ele me forçou a questionar escolhas que eu vinha repetindo automaticamente, principalmente no que diz respeito à responsividade e à acessibilidade. Os desafios que surgiram ao longo do caminho foram essenciais para amadurecer minha forma de pensar layout, tipografia e experiência do usuário — aprendizados que com certeza levarei para os próximos projetos.*


## **Aprendizado Adquirido**
Explorar:
No segundo, aprofundei meu entendimento sobre experiência do usuário e acessibilidade, percebendo que o `clamp()` deve ser aplicado com critério e em contextos bem definidos. Esses aprendizados serão explorados com mais profundidade na seção **Aprendizado Adquirido**.

Explicar - **Uso Estratégico de REM:**  e utilização de clamp() e breakpoints desktop.

### Aprimoramento do raciocínio para códigos responsivos

No projeto anterior ([**5° Exercício - Slider Image**](https://github.com/Miguel-dAlmeida/slider-image_project)), meu maior desafio foi a responsividade. Como foi minha primeira aplicação unindo HTML, CSS e JS, sofri bastante para adaptar a página a diferentes resoluções, especialmente em telas com altura reduzida, onde os elementos frequentemente se sobrepunham.

No Accordion FAQ, percebi logo de início que o layout tenderia a ter os mesmos problemas — como o `footer` invadindo o conteúdo principal em alturas menores. Mas, dessa vez, carregava a experiência anterior comigo. Antes de implementar, já testei diferentes contextos de altura reduzida e experimentei ajustes de espaçamento e posicionamento para evitar esses conflitos.

A solução envolveu o uso de margens verticais automáticas, a troca do `position: absolute` para `static` em determinados casos e o ajuste de margens e espaçamentos específicos em breakpoints. Essa bagagem prática me permitiu avançar de forma mais rápida e fluida, sem os travamentos ou frustrações que tive antes.


### Utilização de atributos específicos para a lógica JS + `getAttribute()`

Um ponto essencial que aprendi foi planejar a marcação HTML já pensando na futura lógica em JavaScript. No caso do acordeão, eu precisava que a classe `.active` fosse aplicada a elementos irmãos (a pergunta e a resposta), mas apenas um deles estava diretamente ligado à interação do usuário.

Para resolver isso, utilizei um sistema de atributos: cada cabeçalho recebeu um `data-target` e cada bloco de resposta recebeu um `id` correspondente. Assim, com o método `getAttribute()`, eu recuperava o valor do `data-target` e o usava para selecionar o `id` correto via `getElementById()`. Esse mecanismo garantiu a ligação dinâmica entre pergunta e resposta, tornando a lógica funcional.

### Refino do meu entendimento sobre o método `forEach()`

Consolidei meu entendimento sobre como aplicar o `forEach()` em contextos interativos. Quando precisamos que vários elementos compartilhem o mesmo comportamento, essa função se torna uma ferramenta poderosa.

No projeto, usei o `forEach()` de duas formas distintas:

* **Passiva:** percorrendo os cabeçalhos apenas para adicionar escutadores de eventos (sem modificar nada diretamente).
* **Ativa:** percorrendo novamente os elementos dentro da função de clique para limpar as classes `.active`, garantindo que apenas um item permanecesse aberto.

Esse discernimento entre usos passivos e ativos do `forEach()` ampliou minha visão sobre o papel desse método dentro de uma lógica JS.

### Uso de seletores complexos unindo classes HTML e classes JS

Aprofundei minha prática com seletores CSS que dependem de classes adicionadas dinamicamente via JS. Houve momentos em que eu precisava alterar a estética de elementos que não recebiam diretamente a classe `.active`. A solução foi usar a hierarquia: quando um elemento superior recebia `.active`, os estilos eram propagados para os elementos internos.

Exemplo:

```css
.faq__accordion-header {
  &.active .faq__accordion-trigger .faq__accordion-icon {
    & .faq__icon-image--default {
      display: none;
    }
    & .faq__icon-image--active {
      display: block;
    }
  }
}
```


### Insights da aula de resolução do Curso Dev Quest

Após finalizar minha versão, assisti à aula de resolução do exercício com o professor Beto (Desenvolvedor Web Sênior). Notei uma diferença de abordagem interessante: no código dele, apenas o cabeçalho recebia a classe `.ativo`, simplificando a lógica do JS. Na minha versão, tanto cabeçalho quanto conteúdo recebiam a classe `.active`, o que exigiu a estratégia com `data-target` + `getAttribute()`.

Essa diferença trouxe prós e contras: minha versão manteve maior semântica no HTML, enquanto a versão do professor simplificou a lógica. No fim, percebi que não existe apenas uma forma “certa” de resolver, e conhecer múltiplos padrões enriquece muito meu repertório como desenvolvedor.

### Revisão do uso de `overflow: hidden;`

Ao pensar na animação do acordeão, percebi que alternar apenas a propriedade `display` resultaria em uma transição brusca. Pesquisando alternativas, encontrei uma solução mais profissional: controlar o `max-height` (`0` para fechado e um valor específico para aberto) em conjunto com `overflow: hidden;`.

Sem esse `overflow`, o conteúdo extrapolaria os limites do container, comprometendo a estética.

## **Desenvolvimento Contínuo e Autossuperação**

Essa é, sem dúvidas, a seção que mais gosto de escrever. De alguns projetos para cá, ela se tornou um verdadeiro diário pessoal — o espaço em que exponho não apenas o desenvolvimento técnico, mas também o emocional que o sustenta.

Quando iniciei o FAQ Accordion, havia expandido minhas responsabilidades acadêmicas: matriculei-me em dois cursos extras — um de neurociência e outro de inglês.

No curso de neurociência, aprendi a importância de equilibrar a vida em dois momentos:

1. **Sprint** — grandes esforços cognitivos, como o desenvolvimento de um projeto.
2. **Polimento** — esforços médios, como a escrita deste README.

Por isso, reservo tempo de qualidade para atividades como essa escrita, mesmo quando minha autocrítica insiste em gritar: *“Vamos, cara, você está perdendo tempo. Volte a produzir imediatamente.”*

A verdade é que nunca me enxerguei verdadeiramente como alguém equilibrado. Sobrevivo graças à disciplina, às sessões exaustivas de estudo, à renúncia aos prazeres e ao confronto com tarefas difíceis. Mas hoje consigo ser mais flexível: aceito parar para organizar, preparar o terreno, **afiar o machado** — sem me obrigar a estar em produção constante.

Uma metáfora que me marcou e inspirou essa mudança veio do vídeo [*Não ignore a manutenção da sua vida*](https://www.youtube.com/watch?v=_piJ_68V1B8), do canal **Pinho**.

> Num dia ensolarado, um homem observou um trabalhador tentando cortar uma árvore. O esforço era intenso, mas o machado estava cego, e os golpes mal arranhavam a madeira. Ao sugerir que ele parasse para afiá-lo, o trabalhador respondeu:
> *“Não tenho tempo para isso. Preciso trabalhar.”*
>
> Essa cena ilustra uma verdade profunda: quando negligenciamos a manutenção em nome da pressa, conquistamos apenas o efêmero. A constância, e não a urgência, é o que gera estabilidade. Afie-se. Cuide-se. Só então conquiste — com propósito, coração e desapego do imediato.

Ainda assim, reconheço: não há momentos de maior identificação pessoal do que quando me reencontro com minha voz interna desequilibrada e implacável. Ela aparece quando penso em desistir, quando sinto medo, preguiça, raiva ou angústia. É nesses instantes — quando orgulho, vaidade, inseguranças e mediocridade me esmagam — que escuto aquela voz brutal:

*“O que você está pensando? Como assim não vai fazer? Como assim não vai mandar tudo àquele lugar e continuar? Como assim não vai engolir tudo isso e passar por cima da dor?”*

E então respondo:

*“Eu conheço a verdade. Já estive na zona do arrependimento. Eu sei o que é a dor de não ter tentado. Eu já passei por isso inúmeras vezes e sobrevivi. Hoje é o dia que eu esperava. Convido todos vocês — medo, preguiça, inseguranças — a se sentarem comigo e me acompanharem na dança. Mergulhem comigo no fogo, testem sua criatividade para me travar, tentem me derrubar… Eu estive esperando por esse dia.*

É nesse momento que escrevo no meu caderno: **“Eu renuncio!”**
Renuncio ao conforto, à covardia e à mediocridade. Aceito a dor no peito e sigo adiante. Esse é o meu verdadeiro dom: a capacidade de mergulhar no sofrimento e ouvir a voz implacável que não me deixa desistir.

**Nota importante:** Não confundam minhas palavras: não considero que cada dia de estudo, trabalho ou treino seja sofrimento. Pelo contrário, gosto da disciplina e até encontro prazer nas tarefas difíceis. O que quero dizer é que assumir responsabilidades diariamente inevitavelmente traz dor. Não há como escapar — existirão dias ruins, contratempos e frustrações. Minha forma de seguir em frente nesses momentos é peculiar: enfrento a dor com a própria dor. Foi assim, com essa estratégia um pouco melancólica, que consegui construir consistência.

> *As pessoas me perguntam: **“Como você correu com os pés quebrados, com as canelas fraturadas?”** Minha mente sabia: é assim que operamos. Estamos no treinamento dos SEALs da Marinha. É o que somos. Isso se tornou a minha nova norma. Não dei a mim mesmo nenhuma saída. Não havia nada fora daquelas paredes do inferno. Nada.  
Eu amo Deus, mas, por um curto período de tempo, eu me tornei o diabo — porque aquilo era o inferno. Eu me tornei o SEAL dentro do treinamento dos SEALs da Marinha. Essa era a minha mentalidade. Você se coloca, se emerge seja lá onde for, e se torna aquilo, sem se dar nenhuma saída.  
Eu encontrei paz do outro lado, ao me encontrar. E ninguém realmente se encontra sem passar por provações, tribulações, sofrimento e responsabilidade. **E responsabilidade é sofrimento. Ser responsável todos os dias — por fazer a coisa certa, por você mesmo, pelas pessoas ao seu redor — é difícil, é miserável.*** — **David Goggins**

> *Nunca se esqueça: a conquista de si mesmo é um processo permanente. Nunca é hora de parar.* — **David Goggins**

Voltando à parte acadêmica, meu próximo desafio será a etapa **“Quest HTML + CSS + JS Intermediário”** do curso _DevQuest_. Nela, colocarei em prática os aprendizados dos módulos de **HTML** e **CSS Avançados** junto ao **JavaScript Intermediário**, desenvolvendo um formulário com validação de dados.

## **Agradecimentos e Conclusão**

Se você chegou até aqui, meu sincero obrigado por dedicar seu tempo a explorar este projeto e acompanhar minha jornada. Completar esse desafio foi uma grande conquista e cada passo reforça minha certeza de que estou no caminho certo para conquistar minha primeira vaga como desenvolvedor web júnior.

Também não posso deixar de agradecer ao [**DevQuest**](https://www.youtube.com/@DevemDobro), curso do qual sou aluno, por todo o suporte e conhecimento ensinado ao longo da minha jornada. 

<div align="center">
      <a href="https://www.youtube.com/@DevemDobro">
        <img src="https://raw.githubusercontent.com/Miguel-dAlmeida/accordion-faq_project/main/src/images/devQuest_logo.jpg" width="155px" alt="Logo da empresa DevQuest - Dev em Dobro"/>
      </a>
</div>
<br>

Um grande abraço e até o próximo projeto. **Bora codar!**

## **Contato**

 <div style="margin-bottom: 20px;">
    <a style="padding-right: 3px;" href="https://www.linkedin.com/in/mariomigueldealmeida/"><img
        src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
    <a href="mailto:mariomigueldealmeida@gmail.com"><img
        src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white"></a>
  </div>

## **Licença de Uso**  

Este código está disponível exclusivamente para fins educacionais. Qualquer outro tipo de utilização não está autorizada.   

<br>
<div align="center">
  <img src="https://raw.githubusercontent.com/Miguel-dAlmeida/accordion-faq_project/main/src/images/closingImage.gif" alt="Imagem representando união e parceria" width="80%">
</div>