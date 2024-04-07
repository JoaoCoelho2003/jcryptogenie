defmodule JcryptogenieWeb.HomeLive do
  use JcryptogenieWeb, :live_view
  alias Jcryptogenie.Cryptodata
  import JcryptogenieWeb.Components.Chart

  def mount(_params, _session, socket) do
      schedule_update_value(socket)
  end

  def handle_info(:update_value, socket) do
    {:noreply, assign(socket, :current_value, {:ok, %{current_value: Cryptodata.fetch_data()}})}
    schedule_update_value(socket)
  end

  defp schedule_update_value(socket) do
    Process.send_after(self(), :update_value, 5000)
    {:ok, socket
      |> assign(:crypto_coin, "BTC")
      |> assign(:balance, 1000)
      |> assign(:current_value, {:ok, %{current_value: Cryptodata.fetch_data()}})
    }
  end
end
