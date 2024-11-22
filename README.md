# Diário Eletrônico Mobile SBtec

Bem-vindo(a) ao repositório do Diário Eletrônico mobile do Squad 7, um projeto de front-end desenvolvido com React Native junto à plataforma Expo.

O projeto visa a implementação de um sistema de chamadas mobile que agiliza o registro de presença, reduz tarefas administrativas e integra informações escolares com praticidade e acessibilidade, facilitando a gestão de informações e dados no ambiente escolar, com funcionalidades voltadas para docentes e administradores. 
### Funcionalidades do Sistema

  - Tela de Login: A tela inicial do aplicativo que permite entrada de dados para um cadastro.
  - Rodapé Interativo : Navegação Intuitiva oferecendo acesso às páginas do aplicativo por meio do rodapé.
  - Agenda: Sistema de Calendário com possibilidade de marcar eventos diferentes para determinados dias.
  - Chamada: Modelo do sistema de chamada com funções de filtro através da classe e nome do aluno além de checkboxes para marcar faltas.

### Pré-Requisots
Antes de começar, certifique-se de ter instalado:

  - [Node.js](https://nodejs.org/pt) (Recomendado: LTS)
  - [Yarn](https://yarnpkg.com/)
  - [Expo CLI](https://expo.dev/) (Crie também uma conta no Expo Developer)
  - [Visual Studio Code](https://code.visualstudio.com/)
  - [Git](https://git-scm.com/downloads)
  - Ambiente Android ou iOS configurado

### Passo a Passo
#### 1. Configurações Iniciais
  - Clone o repositório do código: git clone <https://github.com/GuilhermeRznD/sbtec>
  - Instale as Dependências do Projeto Use o Yarn para instalar todas as bibliotecas necessárias: yarn install
#### 2. Teste Local com Expo
  - Inicie o Projeto no Expo: Execute o seguinte comando para iniciar o projeto: yarn expo start
  - Escaneie o QR code exibido no terminal ou no Expo Developer Tools com o aplicativo Expo Go.
  - Caso use um emulador Android ou iOS:  Configure o Android Studio ou Xcode e execute o emulador.
#### 3. Build de Produção
##### Android:
  - Configure o EAS CLI: Instale o EAS CLI globalmente: yarn global add eas-cli.
  - Autentique no Expo: Faça login na sua conta Expo: eas login.
  - Inicialize o EAS no Projeto: eas build:configure.
  - Gere o APK/ABB: Para gerar o APK: eas build --platform android --profile preview
  - Para gerar o ABB: eas build --platform android --profile production
##### IOS:
  - Pré-requisito: O build para iOS requer um macOS com Xcode instalado.
  - Gere o Arquivo IPA: eas build --platform ios --profile production
  - O EAS gerencia automaticamente os certificados, mas você pode usar certificados próprios, se necessário.
  - Após o build, use o link fornecido para baixar o arquivo IPA e disponibilizá-lo na App Store Connect.

  
