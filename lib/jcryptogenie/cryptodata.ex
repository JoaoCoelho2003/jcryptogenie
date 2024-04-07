defmodule Jcryptogenie.Cryptodata do
  use HTTPoison.Base

  def fetch_data() do
    case HTTPoison.get("https://api.uphold.com/v0/ticker/BTC-USD") do
      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        case Poison.decode!(body) do
          %{"bid" => bid} ->
            IO.puts "Current bid: #{bid}"
            {:ok, bid: bid}

          _ ->
            IO.puts "Invalid JSON format"
            {:exit, reason: "Invalid JSON format"}
        end

      {:ok, %HTTPoison.Response{status_code: 404}} ->
        IO.puts "Not found :("
        nil

      {:error, %HTTPoison.Error{reason: reason}} ->
        {:exit, reason}
    end
  end
end
