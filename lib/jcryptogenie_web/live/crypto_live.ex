defmodule JcryptogenieWeb.Live.CryptoLive do
  use JcryptogenieWeb, :live_view

  def mount(_params, _session, socket) do
    {:ok, fetch_and_assign_crypto_data(socket)}
  end

  def handle_info(:fetch_crypto_data, socket) do
    {:noreply, fetch_and_assign_crypto_data(socket)}
  end

  defp fetch_and_assign_crypto_data(socket) do
    case MyApp.CryptoService.fetch_data() do
      {:ok, data} ->
        {:ok, assign(socket, crypto_data: data)}
      {:error, _reason} ->
        {:ok, socket}
    end
  end
end
