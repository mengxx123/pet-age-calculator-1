require 'sinatra'


get '/' do

  redirect 'petage'
end

get '/petage' do
  erb :index
end

post '/petage' do

  @animal = Pet.new(params["human_years"].to_i, params["pet"])
  erb :index
end
