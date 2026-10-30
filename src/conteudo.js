// ============================================================
//  CONTEÚDO DO SITE
//  Tudo o que aparece no site está aqui. Para personalizar,
//  basta editar este arquivo — não precisa mexer nos componentes.
//
//  Fotos:   coloque em  public/fotos/      (ex.: "fotos/praia.webp")
//  Músicas: coloque em  public/musicas/    (ex.: "musicas/nossa.mp3")
//  Dica: rode `npm run fotos` para converter e comprimir as fotos
//  de public/fotos-originais/ automaticamente.
// ============================================================

export const conteudo = {
  nomes: {
    eu: 'Lucas',
    ela: 'Nanda',
  },

  subtitulo: 'FELIZ DOIS ANOS DE NAMORO!',

    // Stickers nas laterais do início
  // lado: 'esquerda' ou 'direita'
  // topo: distância do topo da tela | distancia: distância da borda
  // tamanho: largura no computador (no celular fica metade)
  // celular: false para esconder esse sticker no celular
  stickers: [
    { arquivo: 'stickers/WhatsApp_Image_2026-10-28_at_18.11.11-removebg-preview.png', lado: 'esquerda', topo: '22%', topoCelular: '10%', distancia: '8%', tamanho: '12rem', giro: '-8deg' },
    { arquivo: 'stickers/WhatsApp_Image_2026-10-28_at_18.12.06-removebg-preview.png', lado: 'direita', topo: '30%', topoCelular: '32%', distancia: '7%', tamanho: '13rem', giro: '6deg' },
    { arquivo: 'stickers/WhatsApp_Image_2026-10-28_at_18.14.08-removebg-preview.png', lado: 'esquerda', topo: '60%', distancia: '6%', tamanho: '12rem', giro: '-4deg', frente: true },
    { arquivo: 'stickers/WhatsApp_Image_2026-10-28_at_18.15.15-removebg-preview.png', lado: 'direita', topo: '70%', distancia: '5%', tamanho: '11rem', giro: '3deg', frente: true },
    { arquivo: 'stickers/images-removebg-preview.png', lado: 'esquerda', topo: '90%', distancia: '7%', tamanho: '12rem', giro: '-5deg', frente: true },
    { arquivo: 'stickers/13867089-m-removebg-preview.png', lado: 'direita', topo: '100%', distancia: '8%', tamanho: '13rem', giro: '5deg' },
  ],

  // Data (e hora, se lembrar) em que vocês começaram a namorar.
  // Formato: 'AAAA-MM-DDTHH:MM' no horário local.
  inicio: '2024-11-02T20:00',

  // ---------- ABERTURA ----------
  abertura: {
    // Texto escrito no envelope
    destinatario: 'Para minha Nan',
    // Senha opcional. Deixe '' (vazio) para abrir sem senha.
    // A comparação ignora maiúsculas, acentos e espaços.
    senha: 'coringa 2',
    pergunta: 'Qual o primeiro filme que a gente viu no cinema?',
    // Bilhete que aparece quando o envelope abre
    bilhete: 'Aumenta o volume e vai descendo devagar.',
  },

  // ---------- MÚSICAS ----------
  // Tocam em sequência e voltam pro começo no fim.
  musicas: [
    { titulo: 'Azul', artista: 'Gal Costa', arquivo: 'musicas/Azul (letra) __ Gal Costa [SUJcffY3TE4].mp3' },
    { titulo: 'Cheiro de Amor', artista: 'Maria Bethânia', arquivo: 'musicas/Cheiro de Amor (Letra) - Maria Bethânia [hO_fotuUS2M].mp3' },
    { titulo: 'Linha do Equador', artista: 'Djavan', arquivo: 'musicas/DJAVAN - LINHA DO EQUADOR [LETRA] [JFNhEnxRYCY].mp3' },
    { titulo: 'Um Amor Puro', artista: 'Djavan', arquivo: 'musicas/Djavan - Um Amor Puro (Letra_Lyrics) [izz9Wly3t9g].mp3' },
  ],

  // ---------- CONTADOR ----------
   contador: {
    titulo: 'Juntos há:',
    foto: {
      arquivo: 'fotos/WhatsApp Image 2026-10-28 at 16.59.35.webp',
      legenda: 'nós dois pra sempre <3',
    },
  },

  // ---------- LINHA DO TEMPO ----------
  // Em ordem cronológica. "fotos" pode ter de 0 a 3 imagens.
  momentos: [
    {
      data: '2024-08',
      titulo: 'Quando nos conhecemos',
      texto: 'Numa viagem que eu nem queria ir, a menina da piranha bege foi no mesmo ônibus que eu. Eu fiquei encantado e não consegui parar de olhar pra ela. (Ela era tão linda que eu fiquei admirado até vendo ela coçar o nariz.)',
      fotos: ['/fotos/WhatsApp Image 2026-10-17 at 16.10.24.webp'],
    },
    {
      data: '2024-08-24',
      titulo: 'O primeiro encontro',
      texto: 'Depois de Bia ter feito a ponte, um pedido pra seguir no Instagram e alguns dias de conversa, veio o primeiro encontro. Sêxtuplo com a presença de Leca, Rafa, Bia e Vilaça. Mas muito especial de qualquer forma. Pela primeira vez, a gente pode ter uma conversa presencialmente só nós dois',
      fotos: ['/fotos/WhatsApp Image 2026-10-28 at 10.51.23.webp'],
    },
    {
      data: '2024-09-27',
      titulo: 'O primeiro beijo',
      texto: 'Depois de muita luta, finalmente saiu! Um momento especial, num lugar especial. Senti uma felicidade enorme, porque sabia que a partir dali tudo seria diferente e que nossa paixão só cresceria.',
      fotos: ['/fotos/WhatsApp Image 2026-10-28 at 11.09.49.webp']
    },
    {
      data: '2024-11-02',
      titulo: 'O pedido',
      texto: 'Depois de dois meses, não dava mais pra negar o quanto eu estava louco por ela. Então, numa festa de halloween, da forma mais inesperada possível, uma conversa qualquer se tornou a pergunta mais importante da minha vida. E a resposta dela foi a melhor coisa que eu poderia ouvir.',
      fotos: ['/fotos/WhatsApp Image 2026-10-28 at 11.15.02.webp'],
    },
    {
      data: '2026-11-02',
      texto: 'Dois anos se passaram desde aquele dia. Foram os melhores 730 dias da minha vida. Eu só tenho a agradecer por cada momento vivido ao seu lado e que venham mais e mais. Você tem me feito a pessoa mais feliz do mundo e me ensinado tanto. Eu te amo mais do que tudo.',
      fotos: ['/fotos/WhatsApp Image 2026-10-28 at 11.35.08.webp'],
    },
  ],

  // ---------- GALERIA ----------
  galeria: {
    titulo: 'Nossa galeria',
    albuns: [
    {
      nome: 'Viagens',
      fotos: [
        { arquivo: 'fotos/WhatsApp Image 2026-10-28 at 19.12.11.webp', legenda: 'RJ 2025' },
        { arquivo: 'fotos/WhatsApp Image 2026-10-28 at 19.24.41.webp', legenda: 'RJ 2026' },
        { arquivo: 'fotos/WhatsApp Image 2026-10-28 at 19.27.09.webp', legenda: 'Vaqueirinhos em Gravatá' },
        { arquivo: 'fotos/WhatsApp Image 2026-10-28 at 19.30.49.webp', legenda: 'Tão linda dormindo no avião' },
        { arquivo: 'fotos/WhatsApp Image 2026-10-28 at 19.34.32.webp', legenda: 'Reveillon em Muro Alto' },
      ],
    },

    { 
      nome: 'Festas', 
      fotos: [
        { arquivo: 'fotos/WhatsApp Image 2026-10-29 at 09.06.29.webp', legenda: 'Halloween 2024/Dia do pedido' },
        {arquivo: 'fotos/aniv_tiagabi.webp', legenda: 'Aniversário de Tia Gabi: o dia que eu conheci toda sua família'},
        {arquivo: 'fotos/wedo.webp', legenda: 'Wedo'},
        {arquivo: 'fotos/passara.webp', legenda: 'Passara'},
        {arquivo: 'fotos/carva1.webp', legenda: 'Carva 2025'},
        {arquivo: 'fotos/abel_carna.webp', legenda: 'Abel de Carnaval'},
        {arquivo: 'fotos/malokas.webp', legenda: 'Baile do Abel'},
        {arquivo: 'fotos/nemo.webp', legenda: 'Nemo e Dory'},
        {arquivo: 'fotos/formatura.webp', legenda: 'Formatura'},
        {arquivo: 'fotos/carva2.webp', legenda: 'Carva 2026'},

      ], 
    },

    {
      nome: 'Juntinhos',
      fotos: [
        { arquivo: 'fotos/primeira.webp', legenda: 'Primeira selfie juntinhos'},
        { arquivo: 'fotos/tia gabs.webp', legenda: ''},
        { arquivo: 'fotos/oculos.webp', legenda: ''},
        { arquivo: 'fotos/dormindo.webp', legenda: 'Soninho'},
        { arquivo: 'fotos/fogos.webp', legenda: 'Reveillon na praia'},
        { arquivo: 'fotos/copa.webp', legenda: 'Copa & Romeu'},
        { arquivo: 'fotos/nautico.webp', legenda: 'Felicidade no jogo do gigante!'},
        { arquivo: 'fotos/cog.webp', legenda: 'Casal cog'},
        { arquivo: 'fotos/grude.webp', legenda: 'O melhor grude do mundo'},
        { arquivo: 'fotos/skol.webp', legenda: 'SKOL!'},
        { arquivo: 'fotos/intrusivos.webp', legenda: 'Pensamentos intrusivos'},
        { arquivo: 'fotos/espelho.webp', legenda: ''},
        { arquivo: 'fotos/meia.webp', legenda: 'Meia do Stich'},
        { arquivo: 'fotos/elevador.webp', legenda: 'Meu maior amor'},

      ],
    },
  ],
},

  // ---------- CARTINHAS ----------
  cartinhas: {
    titulo: 'Cartinhas',
    subtitulo: 'Uma de cada vez. Abre quando quiser.',
    // "frente" é o que aparece no envelope; "texto" é a carta.
    lista: [
      { frente: 'abra quando sentir saudade', texto: 'Escreva aqui uma cartinha curta. Pode ser uma lembrança, um motivo, uma coisa que você nunca disse em voz alta.' },
      { frente: 'abra quando estiver triste', texto: 'Texto da cartinha.' },
      { frente: 'uma coisa que eu amo em você', texto: 'Texto da cartinha.' },
      { frente: 'o dia em que eu soube', texto: 'Texto da cartinha.' },
      { frente: 'abra quando duvidar de si', texto: 'Texto da cartinha.' },
      { frente: 'nosso segredo', texto: 'Texto da cartinha.' },
    ],
  },

  // ---------- CARTA FINAL ----------
  cartaFinal: {
    saudacao: 'Meu amor,',
    // Cada item é um parágrafo.
    paragrafos: [
      'É impressionante como o tempo voa com você ao meu lado. Parece que foi ontem que eu te vi pela primeira vez e hoje olha onde estamos.',
      'São dois anos vivendo essa jornada incrível com você, construindo uma história tão linda, cheia de alegria, cumplicidade e amor.',
      'Eu sempre pedi a Deus uma pessoa especial pra ter como namorada, mas Ele me deu muito mais do que isso: Ele me deu uma parceira, que se parece comigo, que sabe me escutar, que sempre está lá quando eu preciso, que me entende mais do que ninguém. Ele me deu minha melhor amiga.',
      'Eu sei que já te falei isso várias vezes, mas quero que você saiba que você sempre foi meu maior presente nessa vida, e hoje meu sentimento é de gratidão por cada momento que vivemos juntos, tanto as alegrias quanto os desafios.',
      'Se passaram 730 dias, mas a cada dia que se passa eu só consigo me apaixonar mais por você, pelo seu jeito único de ser. E isso cresce mais ainda ao ver o quão você é amada e admirada não só por mim mas por todos ao seu redor. Eu me sinto o homem mais sortudo do mundo por ter a menina com o coração mais lindo do mundo como minha namorada.',
      'Obrigado por me fazer mais feliz, por me ensinar tanto, por me fazer pensar direito antes de agir por mim mesmo, por me trazer paz quando eu preciso, e por todos os nossos momentos juntos: nossas sessões de How, nossas idas ao cinema, nossas viagens, praias, festas, sorvetes, cookies, brownies, pipocas, por tudo! Tudo ao seu lado é simplesmente perfeito. Obrigado por me fazer me sentir mais vivo!',
      'Eu amo tudo sobre você, Nan. Amo conviver com sua família, que me acolheu tão bem e tem um lugar especial no seu coração. Amo tomar conta de Romeu com você. Amo ver você feliz com cada etapa nova que você vive.',
      'Vou morrer de saudades nos dois meses que vou ficar no Canadá, mas até lá vamos aproveitar cada momentinho junto.',
      'Desculpa pelas vezes em que sou chato, pelas vezes em que eu falho, ou que prometo assistir alguma série e não consigo cumprir (mas ainda vou assistir em algum momento). Prometo estar sempre do seu lado e nunca soltar sua mão independente da situação, da mesma forma que sei que posso contar com você também.',
      'Peço a Deus que continue nos abençoando e guiando, e agradeço a Ele por sua vida e por cada segundo que vivemos juntos.',
      'Por mais que pareça que dois anos já é muita coisa, lembre de suas próprias palavras: "O que são dois anos comparados a uma vida toda?" Temos muita coisa pra viver juntos ainda e isso só me empolga mais ainda cada dia que se passa.',
      'E como eu já disse outras vezes, uma carta como essa nunca vai ser o suficiente pra mostrar o quanto eu te amo e o quanto eu sou louco por você.',
      'Eu te amo e sempre vou te amar infinitamente e incodicionalmente!',
    ],
    despedida: 'Feliz Dois Anos de Namoro minha Nan',
    assinatura: 'Lucas',
  },

  // Linha discreta no rodapé
  rodape: '02.11.2026',
}
