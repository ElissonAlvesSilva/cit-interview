  
.PHONY: build start stop remove logs lint mocha test run

SHELL := /bin/bash
branch := $(shell git branch | grep \* | cut -d ' ' -f2)

build:
	docker-compose build
	docker-compose run --rm app npm install

start:
	docker-compose up -d

stop:
	docker-compose down

remove:
	docker-compose rm

logs:
	docker-compose logs -f

lint:
	docker-compose run --rm app npm run lint

mocha:
	docker-compose run --rm app npm run mocha

test: lint mocha

run:
	docker-compose exec app sh