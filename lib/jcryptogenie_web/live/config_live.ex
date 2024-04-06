defmodule JcryptogenieWeb.ConfigLive do
  use JcryptogenieWeb, :live_view

  def mount(_params, _session, socket) do
    options = %{
      "media" => 0.5,
      "Prices" => 0.5,
    }

    risk = "High"

    {:ok,
     socket
     |> assign(:options, options)
     |> assign(:risk, risk)
    }
  end

end
