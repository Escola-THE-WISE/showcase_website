![Logo The Wise]()
# Sistema The Wise

## Tecnologias Utilizadas

- HTML
- CSS
- SASS
- JavaScript
- Python

## FrameWorks e Metodologias

- Django
- Angular
- SMACSS

## Documentação e Diagramação

- [Documento de Visão (Em Produção)](https://docs.google.com/document/d/1bltB2ak-D74L2mkDGleXdHXmMUp0mDRR/edit?usp=sharing&ouid=111045129543239144353&rtpof=true&sd=true)

### Diagrama de Caso e Uso

- ![Diagrama de Caso e Uso]()

### Diagrama de Classe

- ![Diagrama de Classe]()

## Estrutura do Projeto

### Estrutura de Diretorios e Arquivos HTML

### Estrutura de Diretorios e Arquivos CSS

- Estruturação Baseada na Metodologia **SMACSS**
[Documentação SMACSS](https://smacss.com/)

- Os arquivo `mixins.css` no diretorio `utils/` foi criado para armazenar mixins e funções baseadas em **SASS**
[Documentação SASS](https://sass-lang.com/guide/)

```CSS
css/
├── base/
│   ├── _reset.css           # Reset ou normalização de estilos
│   ├── _typography.css      # Regras básicas de tipografia
│   ├── _default.css         # Estilos básicos aplicados a elementos HTML
├── layout/
│   ├── _grid.css            # Sistema de grid para o layout
│   ├── _header.css          # Estilo do cabeçalho
│   ├── _footer.css          # Estilo do rodapé
│   ├── _sidebar.css         # Estilo de barras laterais
├── module/
│   ├── _button.css          # Estilo para botões
│   ├── _card.css            # Estilo para componentes de cartão
│   ├── _form.css            # Estilo para formulários
│   ├── _navigation.css      # Estilo para barras de navegação
├── state/
│   ├── _is-active.css       # Estados ativos
│   ├── _is-hidden.css       # Estados ocultos
│   ├── _is-error.css        # Estados de erro
├── theme/
│   ├── _theme-light.css     # Tema claro
│   ├── _theme-dark.css      # Tema escuro
├── utils/
│   ├── _variables.css       # Variáveis de projeto (cores, tamanhos, etc.)
│   ├── _mixins.css          # Mixins e funções reutilizáveis
│   ├── _helpers.css         # Classes utilitárias rápidas (ex.: .text-center)
├── main.css                 # Importação de todos os arquivos
