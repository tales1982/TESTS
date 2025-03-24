import { render, screen, fireEvent } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import Tasks from "./Tasks";

// Configura o servidor MSW para interceptar a requisição à API
const server = setupServer(
  http.get("https://jsonplaceholder.typicode.com/todos", () => {
    return HttpResponse.json([
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
    ]);
  })
);

// Configura o ciclo de vida do servidor nos testes
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Tasks Component", () => {
  it("should fetch and show tasks on button click", async () => {
    render(<Tasks />);

    const button = screen.getByText(/get tasks from api/i);
    fireEvent.click(button);

    // Aguarda que o título da tarefa apareça na tela
    const taskElement = await screen.findByText(/delectus aut autem/i);
    expect(taskElement).toBeInTheDocument();
  });
});