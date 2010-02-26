require 'rubygems'
require 'sinatra'
require 'active_support'
require 'erb'

$ruby   = []
$rails  = []
$explains = []

# $code_examples = []

Dir.new(File.join(File.dirname(__FILE__), 'views/ruby')).each do |e|
  unless ['.','..','index.erb','layout.erb','code.erb'].include?(e)
    e.sub!(/\.erb$/i, '')
    $ruby << { :human => e.humanize.titleize, :name => e }
  end
end

Dir.new(File.join(File.dirname(__FILE__), 'views/rails')).each do |e|
  unless ['.','..','index.erb','layout.erb','code.erb'].include?(e)
    e.sub!(/\.erb$/i, '')
    $rails << { :human => e.humanize.titleize, :name => e }
  end
end

Dir.new(File.join(File.dirname(__FILE__), 'views/explains')).each do |e|
  unless ['.','..','index.erb','layout.erb','code.erb'].include?(e)
    e.sub!(/\.erb$/i, '')
    $explains << { :human => e.humanize.titleize, :name => e }
  end
end

get '/' do
  @title = 'Overview'
  erb :index
end

get '/code/:lang/:name' do
  @title = params[:name].sub(/^(\d)./, '').humanize.titleize
  @code = (params[:lang] == 'explains') ? false : true
  
  erb "#{params[:lang]}/#{params[:name]}".to_sym, :layout => :code
end
