# lib/my_app/crypto_service.ex
defmodule MyApp.CryptoService do
  @endpoint "https://api.example.com/crypto/prices"

  def fetch_data do
    case HTTPoison.get(@endpoint) do
      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        {:ok, Poison.decode!(body)}
      {:error, %HTTPoison.Error{reason: reason}} ->
        {:error, reason}
      _ ->
        {:error, "Unknown error"}
    end
  end
end
