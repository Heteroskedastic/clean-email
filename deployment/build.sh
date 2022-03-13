#!/bin/sh

docker build -t clean-email-image:prd -f Dockerfile .
if [ `echo $?` == 0 ]; then
	docker rm -f clean-email
	docker run -dt --restart=always -p 8005:8005 --name clean-email clean-email-image:prd
fi