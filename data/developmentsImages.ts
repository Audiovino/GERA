export const barrioImages: { [key: string]: string } = {
    "Palermo": "https://audiovino.github.io/imagenes-publicas/public/palermo.png",
    "Belgrano": "https://audiovino.github.io/imagenes-publicas/public/belgrano_copia.png",
    "Recoleta": "https://images.unsplash.com/photo-1599507663297-8a36c6447b4d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Núñez": "https://audiovino.github.io/imagenes-publicas/public/nunez.png",
    "Villa Crespo": "https://audiovino.github.io/imagenes-publicas/public/villa_crespo.png",
    "Chacarita": "https://audiovino.github.io/imagenes-publicas/public/chacarita_copia.webp",
    "Colegiales": "https://images.unsplash.com/photo-1620392496263-33604f857865?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Villa Urquiza": "https://audiovino.github.io/imagenes-publicas/public/villa_urquiza.png",
    "Caballito": "https://images.unsplash.com/photo-1605276374104-dee2a2ed3cd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Puerto Madero": "https://audiovino.github.io/imagenes-publicas/public/puertomadero.png",
    "San Telmo": "https://images.unsplash.com/photo-1592518453538-422a5a5f6e81?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Saavedra": "https://audiovino.github.io/imagenes-publicas/public/saavedra.png",
    "Coghlan": "https://audiovino.github.io/imagenes-publicas/public/coghlan_copia.png",
    "Villa Devoto": "https://audiovino.github.io/imagenes-publicas/public/villa_urquiza.png",
    "Villa del Parque": "https://audiovino.github.io/imagenes-publicas/public/villa_urquiza.png",
    "Villa Luro": "https://audiovino.github.io/imagenes-publicas/public/saavedra.png",
    "Villa Ortuzar": "https://audiovino.github.io/imagenes-publicas/public/villa_urquiza.png",
    "Centro": "https://images.unsplash.com/photo-1599507663297-8a36c6447b4d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Balvanera": "https://images.unsplash.com/photo-1599507663297-8a36c6447b4d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "San Nicolás": "https://images.unsplash.com/photo-1599507663297-8a36c6447b4d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Congreso": "https://images.unsplash.com/photo-1599507663297-8a36c6447b4d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "default": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

export const getDevelopmentImage = (barrio: string): string => {
    return barrioImages[barrio] || barrioImages.default;
};