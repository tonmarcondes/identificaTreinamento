# SISTEMA DE IDENTIFICAÇÃO DE SALAS

> Sistema de impressão de identificação de salar LATAM Linhas Aéreas com acesso a banco em json



## Arquivos

../data.json
src/index
src/assets/style/style.css
src/assets/js/main.js
src/assets/img/logo.js
---

Certamente, vou fornecer um exemplo básico de um fluxo de trabalho do GitHub Actions que atualiza o número da versão no arquivo de manifesto e publica o artefato final. Você pode ajustá-lo de acordo com as necessidades específicas do seu projeto.

```yaml
name: Build and Publish
on:
  push:
    branches: [main]
jobs:
  build-and-publish:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Update version
        uses: mshick/versioning@v1
        with:
          version-file: 'path/to/manifest.json'
          version: ${{ github.sha }}
      - name: Build project
        run: |
          # Add your build commands here
      - name: Publish artifact
        uses: actions/upload-artifact@v2
        with:
          name: my-artifact
          path: path/to/artifact
```

Este exemplo de fluxo de trabalho é executado quando ocorre um push na branch "main". Ele consiste em quatro etapas:

Verificação do repositório (Checkout repository): esta etapa verifica o repositório no qual ocorreu o push.

Atualização da versão (Update version): esta etapa usa a ação "versioning" para atualizar o número da versão no arquivo de manifesto especificado no campo "version-file". Neste exemplo, usamos o hash do commit atual (github.sha) como o número da versão.

Construção do projeto (Build project): esta etapa executa os comandos de construção do projeto. Aqui você deve adicionar os comandos específicos do seu projeto para construí-lo.

Publicação do artefato (Publish artifact): esta etapa publica o artefato final, que é especificado no campo "path". Neste exemplo, estamos usando a ação "upload-artifact" para publicar o artefato.

Este é apenas um exemplo básico de como atualizar a versão e publicar um artefato usando o GitHub Actions. Lembre-se de que você pode personalizar o fluxo de trabalho de acordo com as necessidades do seu projeto.