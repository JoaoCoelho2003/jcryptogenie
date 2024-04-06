# lib/jcryptogenie_web/live/home_live.ex
defmodule JcryptogenieWeb.Live.HomeLive do
  use JcryptogenieWeb, :live_view

  def mount(_params, _session, socket) do
    {:ok, fetch_crypto_prices(socket)}
  end

  def handle_info(:fetch_crypto_prices, socket) do
    {:noreply, fetch_crypto_prices(socket)}
  end

  defp fetch_crypto_prices(socket) do

    parsed_prices = MyApp.CryptoService.fetch_prices()

    {:ok, assign(socket, prices: parsed_prices)}
  end

  def render(assigns) do
  end
end
