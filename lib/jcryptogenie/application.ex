defmodule Jcryptogenie.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      JcryptogenieWeb.Telemetry,
      {DNSCluster, query: Application.get_env(:jcryptogenie, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: Jcryptogenie.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: Jcryptogenie.Finch},
      # Start a worker by calling: Jcryptogenie.Worker.start_link(arg)
      # {Jcryptogenie.Worker, arg},
      # Start to serve requests, typically the last entry
      JcryptogenieWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Jcryptogenie.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    JcryptogenieWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
