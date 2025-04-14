import './App.css';

export default function App() {
  return (
    <div className="container">
      {/* Lado esquerdo: Código estilo VSCode */}
      <div className="code-panel">
        <pre>
{`const developer = {
  name: "Vitória",
  surname: "Pistori",
  mission: "Explorando dados. Construindo interfaces. Criando impacto."
};

const skills = [
  "Python",
  "PowerBI",
  "JavaScript",
  "HTML/CSS",
  "React"
];

while(coding) {
  criativity += 1;
  logic += 1;
  purpose = "on";
}

function buildImpact(name, skills) {
  return \`\${name} está criando soluções com \${skills.join(", ")}\`;
}

function solve(realWorldProblem) {
  const insight = analyse(realWorldProblem);
  const solution = code(insight);
  return simplify(solution);
}`}
        </pre>
      </div>

      {/* Lado direito: Apresentação */}
      <div className="profile-panel">
        <h1>Vitória Pistori</h1>
        <h2>Software Developer & Data Analyst</h2>
        <p>Engenheira que virou dev. Entusiasta de dados e código limpo.</p>
        <div className="links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Email</a>
        </div>
      </div>
    </div>
  );
}
