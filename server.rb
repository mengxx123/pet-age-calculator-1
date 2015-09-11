require 'sinatra'


get '/' do

  redirect 'petage'
end

get '/petage' do
  erb :index
end

post '/petage' do

  erb :index
end
