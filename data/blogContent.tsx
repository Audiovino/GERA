const blogStaticData = [
  {
    id: 'comprar-en-pozo',
    image: 'https://audiovino.github.io/imagenes-publicas/public/unnamed.jpg',
  },
  {
    id: 'tendencias-inmobiliarias',
    image: 'https://audiovino.github.io/imagenes-publicas/public/tendencias_inmobiliarias.webp',
  },
  {
    id: 'compradores-primerizos',
    image: 'https://audiovino.github.io/imagenes-publicas/public/compradores_primerizos_copia.webp',
  },
  {
    id: 'palermo',
    image: 'https://audiovino.github.io/imagenes-publicas/public/barrios_emergentes_copia.webp',
  },
];

type TranslatedPost = {
    id: string;
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    content: string;
};

export const getBlogContent = (t: (key: string) => any): (TranslatedPost & { image: string })[] => {
    const translatedPosts = t('blog.posts') as TranslatedPost[];

    return translatedPosts.map((post) => {
        const staticData = blogStaticData.find(p => p.id === post.id);
        return {
            ...post,
            image: staticData ? staticData.image : '',
        };
    });
};
