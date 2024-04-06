defmodule JcryptogenieWeb.HomeLive do
  use JcryptogenieWeb, :live_view

  def mount(_params, _session, socket) do
    users = [
      %{name: "John", age: 27},
      %{name: "Jane", age: 29},
      %{name: "Alice", age: 25}
    ]

    {:ok,
     socket
     |> assign(users: users)
     |> assign(:name, "merda")
     |> assign(:form, to_form(%{}))}
  end

  def handle_event("greet", %{"name" => name}, socket) do
    {:noreply, assign(socket, name: name)}
  end
end
