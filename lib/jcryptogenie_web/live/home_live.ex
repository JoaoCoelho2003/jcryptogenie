# lib/jcryptogenie_web/live/home_live.ex
defmodule JcryptogenieWeb.HomeLive do
  use JcryptogenieWeb, :live_view

  def mount(_params, _session, socket) do
    {:ok, socket
      |> assign(:crypto_coin, "BTC")
      |> assign(:balance, 1000)}
  end

end
