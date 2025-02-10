const filmes = [
    { titulo: "Mad Max: Estrada da Fúria", genero: "ação", ano: 2015, ator: "Tom Hardy"},
    { titulo: "Duro de Matar", genero: "ação", ano: 1988, ator: "Bruce Willis" },
    { titulo: "Deadpool", genero: "comédia", ano: 2016, ator: "Ryan Reynolds" },
    { titulo: "O Máskara", genero: "comédia", ano: 1994, ator: "Jim Carrey" },
    { titulo: "Interestelar", genero: "drama", ano: 2014, ator: "Matthew McConaughey" },
    { titulo: "Titanic", genero: "drama", ano: 1997, ator: "Leonardo DiCaprio" }
];

function recomendarFilme(genero, anoLancamento, atorFavorito = null) {
    let filmesFiltrados = filmes.filter(filme => filme.genero === genero);
    
    if (filmesFiltrados.length === 0) {
        console.log("Nenhum filme encontrado para esse gênero.");
        return;
    }

    filmesFiltrados = filmesFiltrados.filter(filme => (anoLancamento === "antes" ? filme.ano < 2010 : filme.ano >= 2010));
    
    if (filmesFiltrados.length === 0) {
        console.log("Nenhum filme encontrado com esse gênero e ano de lançamento.");
        return;
    }

    if (atorFavorito) {
        const filmeComAtor = filmesFiltrados.find(filme => filme.ator === atorFavorito);
        if (filmeComAtor) {
            console.log(`Recomendamos: ${filmeComAtor.titulo}`);
            return;
        }
    }

    console.log(`Recomendamos: ${filmesFiltrados[0].titulo}`);
}

// Exemplo de uso
recomendarFilme("comédia", 2016, "Jim Carrey");
