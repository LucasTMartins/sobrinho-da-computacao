# :snake: Criando o venv (Virtual Environment) do Python

### O que é o Virtual Environment (Ambiente Virtual)?
O virtual environment (ou ambiente virtual) do Python é uma ferramenta que **permite criar ambientes isolados para projetos**, garantindo que cada um tenha suas próprias dependências e versões de pacotes, semelhante ao que a pasta `node_modules` do NodeJS faz. Isso evita conflitos entre bibliotecas e facilita a gestão de diferentes projetos que podem exigir versões distintas de pacotes. Ao **ativar** um ambiente virtual, o usuário pode **instalar e gerenciar pacotes** sem afetar a instalação global do Python no sistema.

### Como criar um Ambiente Virtual?
Com o Python e o pip instalados, basta rodar o seguinte comando para criar o ambiente virtual:

```bash
python -m venv .venv
```

- **-m**: executa um módulo de biblioteca como um script
- **venv**: o módulo que será executado para a criação do ambiente virtual
- **.venv**: nome da pasta em que será armazenada o ambiente virtual. Pode ser alterada para qualquer outro nome adequado, mas geralmente esse é o padrão

> Vale ressaltar que em alguns casos pode ser que a versão do python específica do Python deve ser usada. Atualmente a versão é Python 3, portanto o comando ficaria `python3 -m venv .venv`.

### Como ativar o ambiente virtual?
Diferente do `node_modules`, em que basta rodar os comandos na pasta raíz do projeto, o `venv` precisa ser ativado para ser usado. Dentro da pasta do `venv`, existe a pasta **bin** e dentro dela estarão armazenados os scripts instalados, inclusive o script de ativação. Dentro da pasta **bin** (no meu caso o caminho seria `.venv/bin/`,  ou `.venv\Scripts\` no caso do windows) rode o seguinte comando:

#### No linux:

```bash
source .venv/bin/activate
```

#### No windows:

```powershell
.venv\Scripts\activate.bat
```

O resultado deve ficar semelhante ao seguinte:

![](/images/tutoriais/terminal-rodando-venv-python.png)

### Como desativar o ambiente virtual?
Para desativar o ambiente virtual, basta rodar o seguinte comando:

```bash
deactivate
```
