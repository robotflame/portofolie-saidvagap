import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hei, jeg heter Said Vagap. Jeg er en dedikert og dyktig programvareutvikler med en solid bakgrunn i datateknikk. Med ferdigheter i en rekke programmeringsspråk som Python, JavaScript og C, og kompetanse i verktøy som .NET, Jira og Azure, er jeg godt rustet for komplekse teknologiske utfordringer. Jeg har verdifull erfaring som programvareutvikler-intern hos KPMG, hvor jeg bidro til utviklingen av digitale tvillinger. For tiden forfølger jeg en deltids mastergrad i datateknologi ved Universitetet i Stavanger. Jeg er kjent for mine sterke problemløsningsevner og evne til å håndtere stress, og jeg er alltid klar til å lære og ta på meg nye utfordringer.`;

export const ABOUT_TEXT = `Jeg er utadvendt, ærlig, og strukturert. Forholder meg til mitt ansvar og mine forpliktelser.
Lærer effektiv, gir aldri opp og fullfører alltid det jeg begynner på. Håndterer fint stress, stort
arbeidspress og utfordrende arbeidsoppgaver. Min reise innen programvareutvikling begynte med en dyp nysgjerrighet for hvordan ting fungerer, og har utviklet seg til en karriere hvor jeg kontinuerlig streber etter å lære og tilpasse meg nye utfordringer. Jeg trives i smidige samarbeidsmiljøer og liker å løse komplekse problemer for å levere løsninger av høy kvalitet. Utenom kodingen liker jeg å holde meg aktiv, trene styrke, spille fotball og utforske nye teknologier.`;

export const EXPERIENCES = [
  {
    year: "2024 - Nå",
    role: "Deltidsstudent i Mastergrad i datateknologi",
    company: "Universitetet i Stavanger",
    description: `Masterstudiet i Datateknologi ved Universitetet i Stavanger er et deltidsprogram over fire år, som kombinerer arbeid og studier. Programmet gir avansert kunnskap innen skytjenester, sikkerhet, nettverk, distribuerte systemer, datautvinning og maskinlæring. Studiet legger stor vekt på praktiske ferdigheter, med laboratorie- og prosjektarbeid som krever noe fysisk oppmøte. Utdannelsen forbereder studentene på karrierer innen IT-konsulentselskaper, teknologiutvikling, energisektoren, telekommunikasjon, helsevesen og offentlige etater.`,
    technologies: [],
  },
  {
    year: "2022 - 2022",
    role: "Intern Programvareutvikler",
    company: "KPMG",
    description: `Dette prosjektarbeidet har vi jobbet med digitale tvillinger og hvordan det kan effektivisere landbruksproduksjonen
    ved å automatisere prosessene og bruke dyp læring for optimalisering.`,
    technologies: ["React", "Node.js", "MongoDB", "FastAPI"],
  },
  {
    year: "2020 - 2021",
    role: "Studentassistent",
    company: "Universitetet i Agder",
    description: `Som studentassistent ved Universitetet i Agder hjalp jeg studenter med laboratorieøvelser og obligatoriske oppgaver i C++ og C. Denne erfaringen styrket mine ferdigheter i disse programmeringsspråkene og ga meg verdifull innsikt i undervisning og veiledning.`,
    technologies: ["C","C++"]
  },
  {
    year: "2017 - 2019",
    role: "Drosjesjåfør",
    company: "07000",
    description: `Jeg jobbet som taxisjåfør og fraktet folk til ønsket destinasjon. Jeg møtte forskjellige mennesker
    med ulik bakgrunn.`,
    technologies: []
  },
];

export const PROJECTS = [
  {
    title: "E-handelsplattform Sellorama",
    image: project1,
    description:
      "En e-handelsplattform designet for handel med brukte mobiltelefoner. Plattformen er utviklet med bruk av .NET Framework for backend, React for frontend, samt Javascript og C# for å sikre en sømløs og effektiv brukeropplevelse. Prosjektet ble fullført med høyeste karakter, A.",
    technologies: [".NET", "React", "Javascript", "C#"],
  },
  {
    title: "Loomo segway navigasjonssystem",
    image: project2,
    description:
      "Denne bacheloroppgaven fokuserte på utviklingen av et assistansesystem for Loomo Segway, som kombinerer navigasjon og tale-til-tekst-teknologi. Ved å bruke Java og Android Studio for programvareutvikling, og Cisco-teknologi for nettverksintegrasjon, ble det skapt et system som kunne gi brukere muligheten til å styre og navigere Loomo Segway-enheten ved hjelp av talekommandoer. Systemet oversetter talekommandoer til tekst, som deretter brukes til å kontrollere enhetens bevegelser og funksjoner. Dette prosjektet demonstrerte avanserte ferdigheter innen programvareutvikling og integrasjon av moderne teknologier for å forbedre brukervennligheten og funksjonaliteten til robotiske assistansesystemer.",
    technologies: ["Java", "Android Studio", "Cisco"],
  },
  {
    title: "Portfolio Nettside",
    image: project3,
    description:
      "Et personlig porteføljenettsted som viser prosjekter, ferdigheter og kontaktinformasjon.",
    technologies: ["React", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Konverteringssystem for ingeniørenheter",
    image: project4,
    description:
      "Dette prosjektet involverte utviklingen av et system designet for å konvertere ulike ingeniørenheter til et standardformat. Systemet ble bygget med MongoDB for databasen, Node.js for server-scripting og JSON for datautveksling. Prosjektet fokuserte på å forbedre nøyaktigheten og effektiviteten i dataoverføringen mellom forskjellige ingeniørverktøy, noe som resulterte i en karakter på C.",
    technologies: ["MongoDB", "CSS", "Node.js", "Json"],
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "+47 400 92 862",
  email: "said.vagap@gmail.com",
};
