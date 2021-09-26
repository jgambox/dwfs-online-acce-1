const candidates = [
    { name: "Salome", skills: ["Excel", "Javascript", "Java"], score: 10, img: "https://randomuser.me/api/portraits/med/women/10.jpg" },
    { name: "Vanesa", skills: ["Java", "Python", "Rust"], score: 9, img: "https://randomuser.me/api/portraits/med/women/47.jpg" },
    { name: "Andrea", skills: ["Go", "Python", "Rust", "Javascript"], score: 10, img: "https://randomuser.me/api/portraits/med/women/89.jpg" },
    { name: "Camilo", skills: ["C#", "Python", "Rust"], score: 5, img: "https://randomuser.me/api/portraits/med/men/5.jpg" },
    { name: "Johan", skills: ["Clojure", "Haskell", "R"], score: 7, img: "https://randomuser.me/api/portraits/med/men/25.jpg" },
    { name: "Carolina", skills: ["Visual Basic"], score: 4, img: "https://randomuser.me/api/portraits/med/women/90.jpg" },
    { name: "Bruna", skills: ["Python", "Mathlab"], score: 7, img: "https://randomuser.me/api/portraits/med/women/67.jpg" },
    { name: "Diego", skills: ["C#", "Java", "Go", "Haskell"], score: 5, img: "https://randomuser.me/api/portraits/med/men/43.jpg" }
];


//TODO: Callbacks
//-> filterBySkills (callback = filtrarMayoresA7)

function filter(callback) {
    const candidatesAux = [];
    for (const candidate of candidates) {
        const resultadoEjecutarFn = callback(candidate);
        if (resultadoEjecutarFn) {
            candidatesAux.push(candidate)
        }
    }
    return candidatesAux;
}

function filtrarMayoresA7(candidate) {
    return candidate.score > 7;
}

const resultados = filter(filtrarMayoresA7);
console.log(resultados);

const resultados2 = filter((candidate) => candidate.score > 7);
console.log(resultados2);

const resultados3 = filter((candidate) => candidate.score > 7 && candidate.skills.includes("Javascript"));
console.log(resultados3);

//TODO: Generic filter

const resultadoFilter = candidates.filter((candidate) => candidate.score > 7)
console.log("resultadoFilter", resultadoFilter);

candidates.forEach((candidate) => console.log("forEach!!!", candidate))

//TODO: setTimeout

setTimeout(() => {
    console.log("HOLAaaaaaaa")
}, Math.random())

//TODO: Ordernar por categoria
//TODO: Ordernar por nombre
//TODO: Ordernar por precio
//TODO: Filtrar por categoria