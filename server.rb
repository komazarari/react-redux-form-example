require 'webrick'
require 'json'

port = ENV['PORT'] ? ENV['PORT'].to_i : 3000
puts "Server started: http://localhost:#{port}/"

root = File.expand_path './public'
server = WEBrick::HTTPServer.new Port: port, DocumentRoot: root
trap('INT') { server.shutdown }

server.start
