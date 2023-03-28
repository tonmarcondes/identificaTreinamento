const fs = require("fs");

// Ler o arquivo package.json
const packageJson = fs.readFileSync("package.json");

// Converter o conteúdo do arquivo para objeto JSON
const packageObj = JSON.parse(packageJson);

// Obter a versão atual do arquivo
const currentVersion = packageObj.version;

// Ler as regras de versão definidas no arquivo semver.config.js
const semverConfig = require("./semver.config");

// Atualizar a versão usando o SemVer
const newVersion = getNextVersion(currentVersion, semverConfig.release);

// Atualizar o objeto package.json com a nova versão
packageObj.version = newVersion;

// Escrever o objeto atualizado no arquivo package.json
fs.writeFileSync("package.json", JSON.stringify(packageObj, null, 2));

// Exibir a nova versão no console
console.log(`Nova versão: ${newVersion}`);

// Função auxiliar para obter a próxima versão usando o SemVer
function getNextVersion(version, releaseType) {
  const versionParts = version.split(".");
  const major = parseInt(versionParts[0]);
  const minor = parseInt(versionParts[1]);
  const patch = parseInt(versionParts[2]);

  switch (releaseType) {
    case "major":
      return `${major + 1}.0.0`;
    case "minor":
      return `${major}.${minor + 1}.0`;
    case "patch":
      return `${major}.${minor}.${patch + 1}`;
    default:
      throw new Error(`Tipo de lançamento inválido: ${releaseType}`);
  }
}
