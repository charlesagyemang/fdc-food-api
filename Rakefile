desc "Heroku Set Up"
task :heroku_setup do
  puts `heroku config:set DB_HOSTNAME=ec2-3-95-87-221.compute-1.amazonaws.com`
  puts `heroku config:set DB_NAME=da0hc9msg2vvup`
  puts `heroku config:set DB_USER=vxzpipfyyfzcco`
  puts `heroku config:set DB_PASS=f242cdde4aaaf6e7abc36ca4104af6b5ba012e8b10eb04f97c19d21910333ad4`
  puts `heroku config`
  puts `heroku run yarn sequelize-stage db:migrate`
end
