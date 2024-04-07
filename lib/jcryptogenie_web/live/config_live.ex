defmodule JcryptogenieWeb.ConfigLive do
  use JcryptogenieWeb, :live_view

  def mount(_params, _session, socket) do
    options = %{
      Media: 50,
      Price: 50
    }

    risk = 0.5

    {:ok,
     socket
     |> assign(:options, options)
     |> assign(:form, to_form(%{"value" => 0}))
     |> assign(:risk, risk)
    }
  end

end
