// NAVEGAÇÃO DOS SLIDES

const slides = document.querySelectorAll(".slide");
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");
const indicador = document.getElementById("indicador");

let paginaAtual = 0;

function mostrarPagina() {
    slides.forEach((slide, index) => {
        slide.classList.toggle("ativo", index === paginaAtual);
    });

    indicador.textContent =
        `${String(paginaAtual + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
}

function avancarPagina() {
    paginaAtual = (paginaAtual + 1) % slides.length;
    mostrarPagina();
}

function voltarPagina() {
    paginaAtual = (paginaAtual - 1 + slides.length) % slides.length;
    mostrarPagina();
}

proximo.addEventListener("click", avancarPagina);
anterior.addEventListener("click", voltarPagina);

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") avancarPagina();
    if (event.key === "ArrowLeft") voltarPagina();
});


// REDAÇÕES

const redacoes = [
    {
        titulo: "Consumo, mídia e cultura: como referências mediadas por algoritmos influenciam os modos de vida na sociedade contemporânea",
        texto: `Atualmente, a mídia e as redes sociais fazem parte da vida de muitas pessoas, influenciando a maneira como elas pensam, se comportam e consomem. Por meio de vídeos, propagandas e publicações, os algoritmos mostram conteúdos de acordo com os interesses de cada usuário. Porém, essa influência também pode trazer alguns problemas para a sociedade.

Um dos principais desafios é o incentivo ao consumo exagerado. Muitas vezes, as pessoas acabam comprando produtos por influência de famosos ou por verem esses itens sendo divulgados nas redes sociais. Além disso, os algoritmos mostram conteúdos parecidos com aquilo que cada pessoa costuma assistir, podendo influenciar suas opiniões, escolhas e até seus hábitos do dia a dia.

Por outro lado, a mídia também pode trazer benefícios, como facilitar o acesso à informação, divulgar diferentes culturas e ajudar na comunicação entre as pessoas. Porém, é importante saber utilizar essas ferramentas com responsabilidade, sem acreditar em tudo o que aparece na internet.

Dessa forma, é necessário desenvolver um olhar mais crítico sobre os conteúdos que consumimos nas redes sociais. Cada pessoa deve refletir antes de comprar algo ou seguir determinadas influências, para que a tecnologia seja utilizada de maneira consciente e positiva na sociedade.`
    },
    {
        titulo: "Povos originários e direitos constitucionais: desafios para a efetivação da cidadania indígena no Brasil",
        texto: `Os povos indígenas fazem parte da história e da cultura do Brasil, sendo responsáveis por preservar tradições, conhecimentos e costumes que passam de geração em geração. Apesar de possuírem direitos garantidos pela Constituição Federal de 1988, muitos ainda enfrentam dificuldades para ter esses direitos respeitados, como o acesso à saúde, à educação e à proteção de suas terras.

Um dos principais problemas enfrentados pelos povos indígenas é a invasão de suas terras, além do desmatamento, das queimadas e da exploração ilegal de recursos naturais. Essas situações prejudicam suas comunidades, ameaçam suas tradições e dificultam a preservação de sua cultura. Além disso, muitos indígenas ainda sofrem preconceito e discriminação na sociedade.

É importante lembrar que os povos originários têm direito de viver de acordo com seus costumes, preservar sua identidade e ter acesso aos mesmos direitos que os demais cidadãos. Para isso, é necessário que o governo fiscalize e proteja as terras indígenas, melhore os serviços de saúde e educação e combata o preconceito.

Dessa forma, é fundamental respeitar os povos indígenas e reconhecer sua importância para a formação do Brasil. Garantir seus direitos é uma maneira de valorizar sua história, proteger suas culturas e construir uma sociedade com mais igualdade e respeito.`
    },
    {
        titulo: "Da diversão ao endividamento: efeitos socioeconômicos das bets na vida de jovens brasileiros",
        texto: `Atualmente, as apostas online, conhecidas como bets, estão cada vez mais presentes na sociedade brasileira, principalmente entre os jovens. Por meio das redes sociais e de propagandas, essas plataformas são divulgadas como uma forma fácil de ganhar dinheiro e se divertir. Porém, muitas pessoas não percebem os riscos que esse tipo de atividade pode trazer para sua vida financeira e social.

Um dos principais problemas é que alguns jovens acabam acreditando que podem ganhar dinheiro rapidamente, mas muitas vezes perdem valores que poderiam ser utilizados em necessidades importantes. Além disso, a facilidade de apostar pelo celular pode incentivar gastos exagerados, causando dívidas, conflitos familiares e dificuldades financeiras.

Outro fator preocupante é a influência de famosos e influenciadores digitais, que divulgam essas plataformas sem mostrar todos os riscos envolvidos. Com isso, muitos jovens podem ser atraídos pelas promessas de ganhos fáceis, sem entender que as apostas também podem causar prejuízos.

Diante disso, é importante ampliar a conscientização sobre os perigos das bets, principalmente entre os jovens. As escolas e as famílias devem conversar sobre educação financeira e incentivar escolhas responsáveis, para evitar que uma atividade apresentada como diversão acabe trazendo problemas para o futuro.`
    },
    {
        titulo: "Inclusão digital no Brasil: caminhos e desafios na sociedade contemporânea",
        texto: `Atualmente, a tecnologia está cada vez mais presente na vida das pessoas, sendo utilizada para estudar, trabalhar, se comunicar e buscar informações. Porém, nem todos os brasileiros possuem acesso à internet e aos aparelhos tecnológicos. Essa desigualdade dificulta a inclusão digital e mostra que ainda existem desafios para garantir que todos tenham as mesmas oportunidades.

Um dos principais problemas é a falta de acesso à internet em algumas regiões do país, principalmente em áreas mais afastadas e comunidades de baixa renda. Além disso, muitas pessoas não possuem computadores ou conhecimentos suficientes para utilizar as ferramentas digitais. Com isso, acabam enfrentando dificuldades para estudar, conseguir empregos e realizar atividades do dia a dia.

Por outro lado, a tecnologia pode trazer muitos benefícios, facilitando a comunicação, o acesso à educação e as oportunidades de trabalho. Para que isso aconteça, é importante que mais pessoas tenham acesso à internet de qualidade e recebam orientação para utilizar os recursos digitais com segurança.

Dessa forma, é necessário ampliar o acesso à tecnologia no Brasil, com investimentos em internet, equipamentos e cursos de informática. Assim, será possível diminuir a desigualdade digital e garantir que mais pessoas possam aproveitar as oportunidades oferecidas pela sociedade contemporânea.`
    },
    {
        titulo: "Caminhos para combater a intolerância religiosa no Brasil",
        texto: `O Brasil é um país formado por pessoas que possuem diferentes religiões, crenças e costumes. Apesar dessa diversidade, a intolerância religiosa ainda é um problema presente na sociedade. Muitas pessoas sofrem preconceito e desrespeito por seguirem uma religião diferente, o que prejudica a convivência e a liberdade de cada cidadão.

Um dos principais problemas é a falta de respeito com as crenças dos outros, que pode gerar ofensas, discriminação e até violência. Além disso, algumas religiões, principalmente as de origem africana, ainda enfrentam muito preconceito. Essas atitudes mostram a falta de conhecimento e de respeito pela diversidade religiosa existente no país.

A liberdade de religião é um direito de todos e deve ser respeitada. Por isso, a educação possui um papel importante no combate à intolerância, ensinando desde cedo que cada pessoa tem o direito de escolher sua própria crença, sem sofrer julgamentos ou discriminação.

Dessa forma, é necessário que o governo invista em campanhas de conscientização e fortaleça as medidas contra a intolerância religiosa. As escolas e as famílias também devem incentivar o respeito às diferentes crenças. Assim, será possível construir uma sociedade mais justa, onde todos possam exercer sua fé com liberdade e segurança.`
    },
    {
        titulo: "Agro forte, futuro sustentável: produzir sem prejudicar o meio ambiente",
        texto: `Na obra *Primavera Silenciosa*, da escritora Rachel Carson, são apresentados os impactos negativos das ações humanas sobre a natureza. De maneira semelhante, o agronegócio brasileiro enfrenta o desafio de aumentar a produção sem causar prejuízos ao meio ambiente. Nesse contexto, é necessário buscar o equilíbrio entre desenvolvimento econômico e preservação ambiental, por meio da tecnologia e da conscientização da sociedade.

Em primeiro lugar, a tecnologia tem um papel fundamental para tornar a produção agrícola mais sustentável. Atualmente, muitos produtores utilizam drones, satélites e aplicativos para monitorar as plantações e reduzir o desperdício de água e de agrotóxicos. Além disso, práticas como o plantio direto e a rotação de culturas ajudam a preservar o solo e a diminuir os impactos ambientais. Dessa forma, percebe-se que o avanço tecnológico pode fortalecer o agronegócio sem comprometer os recursos naturais.

Ademais, a conscientização da população e o incentivo governamental são essenciais para promover práticas sustentáveis no campo. Muitas vezes, o desmatamento ilegal e a poluição ambiental ocorrem devido à falta de fiscalização e de informação. Nesse sentido, projetos de reflorestamento, preservação de nascentes e campanhas ambientais podem ajudar os produtores rurais a adotarem métodos menos prejudiciais à natureza. Assim, torna-se possível unir crescimento econômico e responsabilidade ambiental.

Portanto, o agronegócio e a preservação ambiental devem caminhar juntos para garantir um futuro sustentável. Para isso, o governo deve investir em tecnologias agrícolas sustentáveis e fortalecer a fiscalização ambiental, além de criar programas de incentivo aos produtores rurais. A sociedade também precisa valorizar práticas responsáveis e cobrar a proteção dos recursos naturais. Desse modo, será possível manter a produção agrícola forte sem prejudicar o meio ambiente e as futuras gerações.`
    },
    {
        titulo: "Obsolescência tecnológica e descarte de resíduos eletrônicos",
        texto: `Atualmente, a tecnologia está cada vez mais presente na vida das pessoas, facilitando a comunicação, os estudos e o trabalho. Porém, com o lançamento constante de novos aparelhos, muitos equipamentos antigos acabam sendo descartados rapidamente. Esse problema é conhecido como obsolescência tecnológica e traz consequências para o meio ambiente e para a sociedade.

Um dos principais problemas é o descarte incorreto de celulares, computadores, televisões e outros aparelhos eletrônicos. Muitas pessoas jogam esses objetos no lixo comum, sem saber que eles possuem substâncias que podem contaminar o solo e a água. Além disso, o consumo exagerado aumenta a quantidade de resíduos e prejudica a preservação ambiental.

Outro fator preocupante é a falta de informação sobre os locais corretos para descartar esses materiais. Muitas vezes, a população não sabe onde encontrar pontos de coleta ou como realizar o descarte adequado. Por isso, é importante incentivar a reciclagem e o reaproveitamento dos equipamentos.

Dessa forma, é necessário que o governo invista em campanhas de conscientização e amplie os pontos de coleta de lixo eletrônico. As empresas também devem oferecer formas adequadas de recolhimento dos aparelhos antigos. Assim, será possível diminuir a poluição e construir uma sociedade mais consciente e sustentável.`
    },
    {
        titulo: "El Niño e os desafios diante dos eventos extremos",
        texto: `As mudanças climáticas têm causado diversos problemas para a sociedade, principalmente por meio de fenômenos naturais que podem provocar grandes prejuízos. Um exemplo é o El Niño, que altera as condições climáticas e pode causar chuvas intensas, secas e aumento das temperaturas. Diante disso, é importante discutir a falta de preparo da sociedade e a necessidade de medidas para enfrentar esses acontecimentos.

Em primeiro lugar, o El Niño pode afetar diretamente a vida da população, principalmente das pessoas que vivem em regiões mais vulneráveis. No Brasil, por exemplo, o excesso de chuvas pode provocar enchentes e deslizamentos, enquanto a falta de chuva prejudica a agricultura e o abastecimento de água. Além disso, muitas cidades não possuem uma estrutura adequada para enfrentar esses problemas, aumentando os riscos para os moradores.

Outro ponto importante é a falta de informação e prevenção. Muitas pessoas não sabem como agir diante de situações extremas, e isso acontece também pela falta de investimentos em planejamento e infraestrutura. Dessa forma, os prejuízos poderiam ser menores se existissem mais orientações e ações preventivas.

Dessa maneira, é necessário que o Governo, junto às prefeituras e à Defesa Civil, invista em sistemas de alerta, melhorias na infraestrutura das cidades e campanhas de conscientização nas escolas e comunidades. Além disso, a população deve receber orientações sobre como agir em situações de risco. Assim, será possível reduzir os impactos dos eventos extremos, proteger vidas e preparar melhor a sociedade para enfrentar as mudanças climáticas.`
    },
    {
        titulo: "Migração e acolhimento",
        texto: `A migração acontece quando pessoas saem de seu país ou cidade em busca de uma vida melhor. A Declaração Universal dos Direitos Humanos defende que todas as pessoas devem ser tratadas com igualdade e respeito. Porém, muitos imigrantes enfrentam preconceito e dificuldades para conseguir emprego e se adaptar ao novo lugar.

Primeiramente, a falta de oportunidades é um problema para muitos imigrantes. Alguns chegam sem conhecer o idioma e acabam tendo dificuldade para conseguir emprego e estudar. Com isso, fica mais difícil começar uma nova vida e ter melhores condições.

Além disso, o preconceito também atrapalha a convivência. Muitas pessoas julgam os imigrantes por serem de outro país e acabam tratando eles de forma diferente. Isso pode causar tristeza e dificultar a adaptação dessas pessoas no novo lugar.

Dessa forma, o governo deve criar projetos para ajudar os imigrantes, oferecendo cursos de português e apoio para conseguir emprego. As escolas também podem fazer atividades sobre respeito e diversidade, para diminuir o preconceito. Assim, os imigrantes poderão ter mais oportunidades e viver com mais respeito e dignidade.`
    },
    {
        titulo: "A preservação dos animais brasileiros",
        texto: `A fauna brasileira possui muitos animais diferentes, mas várias espécies estão ameaçadas de extinção. Isso acontece principalmente por causa do desmatamento e da caça ilegal, que prejudicam a natureza e o equilíbrio ambiental.

Em primeiro lugar, o desmatamento é um grande problema, pois muitos animais perdem seus lugares de viver e ficam sem alimento. Com isso, algumas espécies acabam diminuindo cada vez mais, o que prejudica o meio ambiente.

Além disso, a caça ilegal também contribui para a extinção dos animais. Por isso, é importante que a população entenda que os animais são importantes para o equilíbrio da natureza e precisam ser protegidos.

Dessa forma, o governo deve aumentar a fiscalização das florestas e criar punições para quem pratica a caça ilegal, por meio de leis mais rigorosas. Além disso, as escolas podem realizar campanhas para conscientizar os alunos sobre a importância de proteger os animais e preservar a natureza. Assim, será possível diminuir o risco de extinção das espécies e manter o equilíbrio ecológico para as futuras gerações.`
    },
    {
        titulo: "Exploração Espacial: Avanço e Responsabilidade",
        texto: `A exploração espacial vem crescendo bastante com o passar dos anos e trazendo novas descobertas para a humanidade. Com o avanço da tecnologia, ficou possível estudar outros planetas, observar o espaço e desenvolver equipamentos cada vez mais modernos. Porém, esse avanço também traz alguns problemas, principalmente quando pensamos nos gastos, nos impactos ambientais e na desigualdade social. Por isso, é importante buscar um equilíbrio entre o desenvolvimento científico e as necessidades da sociedade.

Um dos principais desafios é o alto custo das missões espaciais. Enquanto grandes empresas e países investem muito dinheiro em foguetes e pesquisas, ainda existem pessoas que enfrentam problemas básicos, como falta de moradia, alimentação e educação. Isso não significa que a exploração espacial não seja importante, mas é necessário que os investimentos sejam feitos de uma maneira responsável, sem deixar de lado as necessidades da população.

Além disso, o avanço espacial pode causar impactos no meio ambiente. O lançamento de foguetes libera gases e também existe o aumento da quantidade de objetos e equipamentos que ficam na órbita da Terra. Com isso, é preciso pensar em novas formas de realizar essas atividades causando menos danos. A ciência deve continuar avançando, mas também precisa levar em consideração as consequências de suas ações.

Dessa forma, os governos, junto com empresas e instituições de pesquisa, devem investir em tecnologias espaciais mais sustentáveis, por meio de pesquisas que diminuam os impactos ambientais e também [trecho encoberto na imagem] de projetos que tenham benefícios para a população. Além disso, as escolas podem incentivar debates e atividades sobre ciência e exploração espacial, mostrando aos estudantes tanto os avanços quanto os problemas desse setor. Assim, será possível continuar buscando novas descobertas sem esquecer da responsabilidade com a sociedade e com o planeta.`
    },
    {
        titulo: "Os desafios para a preservação dos monumentos históricos no Brasil",
        texto: `Os monumentos históricos são importantes para a sociedade, pois ajudam a preservar a história e a cultura de um país. No Brasil, existem diversos lugares que representam diferentes momentos da formação da população, como igrejas, prédios antigos e centros históricos. Porém, muitos desses patrimônios enfrentam problemas para continuar preservados. Dessa forma, a falta de manutenção e o pouco conhecimento da população sobre a importância desses locais são alguns dos principais desafios.

Em primeiro lugar, a falta de investimentos dificulta a conservação dos monumentos históricos. Muitos prédios não recebem a atenção necessária do poder público. Com o passar do tempo, esses locais podem ficar danificados e até perder características importantes da sua história. Além disso, quando não existe uma boa fiscalização, podem ocorrer pichações, depredações e outras ações que prejudicam o patrimônio.

Outro problema é a falta de conhecimento e de interesse de parte da população. Muitas pessoas conhecem esses lugares apenas como pontos turísticos, sem entender o significado que eles possuem para a história do Brasil. Isso pode fazer com que a preservação seja vista como algo sem muita importância. Por isso, é necessário aproximar os jovens e a sociedade desses patrimônios, mostrando que eles fazem parte da história e da identidade do país.

Diante disso, o Governo Federal, junto com as prefeituras e o IPHAN, deve aumentar os investimentos destinados à restauração e à manutenção dos monumentos históricos, por meio de projetos de conservação e de uma fiscalização mais frequente. Além disso, as escolas podem realizar visitas e atividades sobre o patrimônio histórico, com o objetivo de ensinar os estudantes sobre a importância desses locais. Assim, com mais cuidado do poder público e maior participação da população, será possível preservar os monumentos históricos brasileiros para as próximas gerações.`
    },
    {
        titulo: "Entre a saúde e o padrão de beleza",
        texto: `A cultura fitness está cada vez mais presente na vida dos jovens, principalmente por meio das redes sociais. A prática de exercícios físicos é importante para a saúde e o bem-estar; porém, quando o foco passa a ser apenas a aparência, pode trazer consequências negativas. Nesse contexto, a busca por um corpo considerado perfeito e a influência das redes sociais são os principais problemas relacionados à cultura fitness entre os jovens.

Em primeiro lugar, as redes sociais contribuem para a criação de padrões estéticos difíceis de alcançar. Fotos e vídeos de pessoas com corpos dentro de determinados padrões podem fazer com que adolescentes se comparem constantemente e se sintam insatisfeitos consigo mesmos. Além disso, desafios fitness, dietas e dicas de produtos podem incentivar práticas inadequadas, principalmente quando não existe orientação de profissionais.

Outro problema é a pressão para alcançar resultados rapidamente. Muitos jovens podem acreditar que precisam mudar sua aparência para serem aceitos ou considerados bonitos. Um exemplo disso é a influenciadora Gracyanne Barbosa, conhecida por sua rotina de exercícios e pelo estilo de vida fitness, que mostra como a busca por um corpo muito definido pode se tornar a parte mais importante da vida de uma pessoa. Por isso, é importante entender que cuidar da saúde não deve significar viver em função da aparência.

Dessa forma, é necessário buscar um equilíbrio entre atividade física e autoestima. Para isso, as escolas, com apoio de profissionais da saúde, devem realizar palestras e atividades educativas sobre exercícios, alimentação, autoestima e uso consciente das redes sociais. As famílias também devem incentivar hábitos saudáveis sem cobrar mudanças na aparência. Assim, os jovens poderão compreender que a verdadeira finalidade da cultura fitness deve ser promover saúde e bem-estar, e não a busca por um padrão de beleza inatingível.`
    },
    {
        titulo: "O uso da Inteligência Artificial e das deepfakes",
        texto: `No filme *Pânico 7* (2026), a inteligência artificial recria Stu Macher, confundindo o que é real e fictício. Na vida real, a manipulação digital por meio das deepfakes gera desinformação e riscos à segurança, tornando-se um desafio no ambiente virtual.

A disseminação de conteúdos falsos é intensificada pelo uso da inteligência artificial e das deepfakes. Nesse sentido, o documentário *O Dilema das Redes* mostra como os algoritmos das redes sociais favorecem a circulação de conteúdos manipulados, pois priorizam o engajamento sem verificar a veracidade das informações. Assim, muitas pessoas passam a acreditar em conteúdos falsos, prejudicando o debate público. Portanto, a desinformação torna-se um problema relevante na sociedade.

Além disso, os riscos à segurança e à reputação se destacam com o uso da inteligência artificial e das deepfakes. Um exemplo é a Meta, criticada por questões envolvendo dados e conteúdos manipulados. Esse repertório evidencia como o ambiente digital pode expor indivíduos a situações prejudiciais. Vídeos falsos podem comprometer a imagem de uma pessoa e afetar a confiança nas interações on-line. Portanto, a segurança e a reputação tornam-se preocupações na vida digital.

Diante disso, a inteligência artificial e as deepfakes intensificam a desinformação e ameaçam a segurança digital. Para enfrentar esse problema, o governo deve criar leis e fiscalizar a circulação de informações falsas. Além disso, empresas como a Meta devem identificar e remover conteúdos manipulados. Assim, será possível garantir mais segurança na internet.`
    },
    {
        titulo: "Corpo ideal ou risco real? O uso de canetas emagrecedoras",
        texto: `Na sociedade atual, a busca por um padrão de beleza ideal tem se intensificado cada vez mais, impulsionada pelas redes sociais e pela pressão estética. Nesse contexto, o uso de canetas emagrecedoras, como o Mounjaro, vem se popularizando rapidamente, muitas vezes sem orientação médica adequada. Esse cenário revela um problema preocupante: a priorização da estética acima da saúde, o que pode trazer sérios riscos físicos e emocionais. Assim, é necessário refletir sobre os impactos desse uso indiscriminado.

Em primeiro lugar, é importante destacar que esses medicamentos foram desenvolvidos inicialmente para tratar doenças específicas, como diabetes, e não apenas para fins estéticos. Quando utilizados sem acompanhamento profissional, podem causar efeitos colaterais, como náuseas, fraqueza e até problemas mais graves. Um exemplo disso pode ser observado na minha própria família, onde algumas pessoas começaram a usar o Mounjaro com o objetivo de emagrecer rapidamente. Apesar de resultados aparentes no início, surgiram preocupações com a saúde e a falta de orientação adequada, mostrando como essa prática pode ser arriscada.

Além disso, o uso dessas canetas reforça a ideia de que o corpo ideal deve ser alcançado a qualquer custo, o que pode afetar a autoestima e a saúde mental, principalmente entre os jovens. Essa pressão estética pode levar a decisões impulsivas e perigosas, sem considerar as consequências a longo prazo.

Portanto, é fundamental que haja mais conscientização sobre o uso responsável desses medicamentos. Campanhas informativas, orientação médica e debates nas escolas podem ajudar a reduzir o uso indiscriminado e promover uma visão mais saudável sobre o corpo. Afinal, a busca pela estética não deve se sobrepor ao bem-estar e à saúde.`
    },
    {
        titulo: "Enchentes em Kelantan",
        texto: `Segundo reportagens de jornais internacionais, as enchentes têm se intensificado devido às mudanças no ciclo hidrológico. Dessa forma, esses eventos geram impactos sociais relevantes. Como exemplo, no estado de Kelantan, na Malásia, as chuvas intensas provocam enchentes frequentes, deixando milhares de pessoas desabrigadas.

Sob esse viés, destaca-se a vulnerabilidade social da população afetada. Isso ocorre porque muitas famílias vivem em áreas de risco, ficando mais expostas às inundações. Assim, perdem moradias, bens materiais e acesso a serviços básicos. Além disso, a falta de infraestrutura agrava os impactos, dificultando o escoamento da água.

Ademais, os prejuízos econômicos são significativos. As enchentes comprometem atividades como comércio e agricultura, gerando perdas financeiras e desemprego. Consequentemente, a pobreza se intensifica e a recuperação das áreas afetadas se torna mais difícil. Além disso, o governo precisa investir na reconstrução, o que sobrecarrega os recursos públicos.

Portanto, é necessário que o governo da Malásia invista em infraestrutura, como sistemas de drenagem, para reduzir os impactos das enchentes. Também é importante promover o planejamento urbano adequado, evitando ocupações em áreas de risco. Dessa forma, será possível diminuir a vulnerabilidade da população.`
    },
    {
        titulo: "Construindo uma sociedade mais justa",
        texto: `A sociedade brasileira é composta por uma diversidade de culturas, regiões, estilos de vida e opiniões, o que, apesar de enriquecer o convívio social, ainda resulta em situações recorrentes de preconceito e discriminação. Muitas atitudes desrespeitosas começam dentro de casa, quando opiniões são passadas de geração em geração sem ninguém se impor sobre isso. Por esse motivo, a família exerce papel fundamental, visto que os valores e comportamentos observados pelas crianças e adolescentes em casa tendem a ser reproduzidos por eles. É em casa que se aprendem os valores da vida, como empatia, educação e convivência. O diálogo entre pais e filhos, aliado ao exemplo dado pelos adultos, contribui para a formação de pessoas mais conscientes e respeitosas.

Além da família, o governo também precisa agir. O poder público pode investir em campanhas educativas, propaganda na televisão e nas redes sociais, além de projetos nas escolas que incentivem a conversa sobre o preconceito, detalhando, por exemplo, quais órgãos seriam responsáveis, como as campanhas seriam implementadas e como seria feita a avaliação dos resultados.

A escola, com o apoio do estado, pode promover atividades como rodas de conversa, oficinas de diversidade e projetos interdisciplinares, envolvendo professores, alunos e comunidade escolar.`
    }
];


// CRIAÇÃO DOS CARDS DAS REDAÇÕES

const listaRedacoes = document.getElementById("listaRedacoes");

const modal = document.getElementById("modal");
const fechar = document.getElementById("fechar");
const tituloModal = document.getElementById("tituloModal");
const textoModal = document.getElementById("textoModal");

redacoes.forEach((redacao, index) => {
    const card = document.createElement("button");

    card.className = "card-redacao";
    card.type = "button";

    const numero = document.createElement("span");
    numero.className = "numero-redacao";
    numero.textContent = String(index + 1).padStart(2, "0");

    const titulo = document.createElement("span");
    titulo.className = "titulo-redacao";
    titulo.textContent = redacao.titulo;

    const ler = document.createElement("span");
    ler.className = "ler-redacao";
    ler.textContent = "Ler redação →";

    card.appendChild(numero);
    card.appendChild(titulo);
    card.appendChild(ler);

    card.addEventListener("click", () => {
        tituloModal.textContent = redacao.titulo;
        textoModal.textContent = redacao.texto;
        modal.classList.add("aberto");
        document.body.style.overflow = "hidden";
    });

    listaRedacoes.appendChild(card);
});


// FECHAR A JANELA DA REDAÇÃO

function fecharModal() {
    modal.classList.remove("aberto");
    document.body.style.overflow = "";
}

fechar.addEventListener("click", fecharModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        fecharModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        fecharModal();
    }
});


// INICIAR SITE

mostrarPagina();
