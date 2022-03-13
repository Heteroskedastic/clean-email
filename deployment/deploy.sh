#!/bin/bash
git clone https://github.com/Heteroskedastic/clean-email.git /home/jenkins/clean-email
cd /home/jenkins/clean-email
git checkout main
mkdir -p media

sudo cp -rf ../nginx.conf  /etc/nginx/nginx.conf
sudo cp -rf ../default.conf  /etc/nginx/sites-available/default
cp ../.env /home/jenkins/clean-email/clean/
#python manage.py collectstatic
python manage.py migrate

# Restart nginx
sudo /etc/init.d/nginx start || sudo /etc/init.d/nginx start

# Running Server
uwsgi --socket mysite.sock --module clean.wsgi --buffer-size=100000 --chmod-socket=666 --master --processes 4 --threads 2