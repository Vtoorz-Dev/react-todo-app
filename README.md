# 📝 TaskCraft - Lista de Tarefas em React

Uma aplicação web simples, intuitiva e responsiva para gerenciamento de tarefas diárias. Este projeto foi desenvolvido em **React** com o objetivo de praticar os conceitos fundamentais da biblioteca, como gerenciamento de estados, manipulação de formulários e renderização de listas.

---

## 🚀 Funcionalidades

O projeto conta com os seguintes recursos baseados no código atual:
*   **Adicionar Tarefas:** Permite a inserção de novas tarefas com validação para impedir campos vazios ou apenas com espaços (`.trim()`).
*   **Identificação Única:** Cada tarefa recebe um ID gerado dinamicamente com base no timestamp (`Date.now()`), evitando conflitos de chave (*key*) na renderização.
*   **Remoção de Tarefas:** Exclusão instantânea de itens individuais utilizando filtros de array.
*   **Interface Reativa:** Exibe uma mensagem de feedback amigável ("não há tarefas") quando a lista está vazia.

---

## 🛠️ Tecnologias Utilizadas

*   **React** (Functional Components & Hooks)
*   **JavaScript (ES6+)**
*   **CSS3** (Estilização customizada via `TodoApp.css`)

---

## 💡 Aprendizados e Conceitos Aplicados

Durante o desenvolvimento deste componente, foram colocados em prática:
*   O hook `useState` para controle do input e da lista de tarefas.
*   O conceito de **imutabilidade do estado** no React ao adicionar novos itens utilizando a função de callback `setTodos((prevTodos) => [...prevTodos, newTodo])`.
*   Uso de métodos nativos do JavaScript como `.filter()` (para remoção) e `.map()` (para renderizar a lista na tela).

---

## 📦 Como Executar o Projeto Localmente

Para clonar e rodar esta aplicação na sua máquina, você precisará do [Git](https://git-scm.com) e do [Node.js](https://nodejs.org/) instalados.

1. **Clone o repositório:**
```bash
git clone [https://github.com/SEU-USUARIO/react-todo-app.git](https://github.com/SEU-USUARIO/react-todo-app.git)
