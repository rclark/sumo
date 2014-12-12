# sumo

Sumologic searches. See https://github.com/SumoLogic/sumo-api-doc/wiki/search-api

```sh
# Specify a query string.
# Optionally, specify
#   --service --> "_collector=*${service}*"
#   --from in minutes before now
$ sumo <query string> [--service] [--from]
```
